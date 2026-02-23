import { Point } from 'Engine/Point';
import { Vector2 } from 'Engine/Vector2';
import * as math from 'Engine/mathUtils';
import { BoxCollider } from './Box';
import { CircleCollider } from './Circle';
import { IAbstractCollider, IBoxCollider, ICollisionResult } from './interfaces';
import { ColliderType } from './types';

const defaultCollisionResult: ICollisionResult = {
  collided: false,
  normal: null,
  penetration: null,
};

/**
 * @description Проверяет столкновение между двумя коллайдерами
 * @param a Первый коллайдер
 * @param b Второй коллайдер
 * @returns Результат столкновения
 * @throws Ошибка, если не найдена функция для обработки столкновения
 */
export const checkCollision = (a: IAbstractCollider, b: IAbstractCollider): ICollisionResult => {
  switch (a.type + b.type) {
    case ColliderType.Box + ColliderType.Box:
      return boxBox(a as BoxCollider, b as BoxCollider);
    case ColliderType.Circle + ColliderType.Circle:
      return circleCircle(a as CircleCollider, b as CircleCollider);
    case ColliderType.Box + ColliderType.Circle:
      return boxCircle(a as BoxCollider, b as CircleCollider);
    case ColliderType.Circle + ColliderType.Box:
      return boxCircle(b as BoxCollider, a as CircleCollider);
  }

  throw new Error(
    `Engine/collider:Utils.checkCollision, не найдена функция для обработки колизий ${a.type} x ${b.type}`,
  );
};

const getVertices = (box: IBoxCollider): Point[] => {
  const transform = box.gameObject.transform;
  const position = transform.position.point;
  const pivot = transform.pivot;
  const rotation = transform.position.rotation;
  const width = transform.width;
  const height = transform.height;

  const localVertices: Point[] = [
    { x: 0 - pivot.x, y: 0 - pivot.y },
    { x: width - pivot.x, y: 0 - pivot.y },
    { x: width - pivot.x, y: height - pivot.y },
    { x: 0 - pivot.x, y: height - pivot.y },
  ];

  const pivotWorld = { x: position.x + pivot.x, y: position.y + pivot.y };

  return localVertices.map(vertex => {
    const rotated = math.rotate(
      vertex,
      { x: 0, y: 0 }, // Вращаем вокруг локального (0,0), так как уже учли pivot
      rotation
    );
    return {
      x: rotated.x + pivotWorld.x, // Смещаем в позицию мирового pivot
      y: rotated.y + pivotWorld.y
    };
  });
}

const project = (vertices: Point[], axis: Vector2): { min: number, max: number } => {
  let min = math.dot(vertices[0], axis);
  let max = min;

  for (let i = 1; i < vertices.length; i++) {
    const p = math.dot(vertices[i], axis);
    if (p < min) {
      min = p;
    } else if (p > max) {
      max = p;
    }
  }

  return { min, max };
}

const boxBox = (a: IBoxCollider, b: IBoxCollider): ICollisionResult => {
  const verticesA = getVertices(a);
  const verticesB = getVertices(b);

  const getAxes = (vertices: Point[]): Vector2[] => {
    const axes: Vector2[] = [];
    for (let i = 0; i < vertices.length; i++) {
      const p1 = vertices[i];
      const p2 = vertices[i + 1 === vertices.length ? 0 : i + 1];
      const edge = math.subtract(p1, p2);
      const normal = { x: -edge.y, y: edge.x };
      axes.push(normal);
    }
    return axes;
  };

  const axes = [...getAxes(verticesA), ...getAxes(verticesB)];
  let mtv = { x: 0, y: 0 };
  let minOverlap = Infinity;

  for (const axis of axes) {
    const projA = project(verticesA, axis);
    const projB = project(verticesB, axis);

    const overlap = Math.min(projA.max, projB.max) - Math.max(projA.min, projB.min);
    if (overlap < 0) {
      return defaultCollisionResult;
    }

    if (overlap < minOverlap) {
      minOverlap = overlap;
      mtv = axis;
    }
  }

  const magnitude = Math.sqrt(mtv.x * mtv.x + mtv.y * mtv.y);
  const normal = { x: mtv.x / magnitude, y: mtv.y / magnitude };

  const centerA = { x: a.gameObject.transform.position.point.x, y: a.gameObject.transform.position.point.y };
  const centerB = { x: b.gameObject.transform.position.point.x, y: b.gameObject.transform.position.point.y };
  const direction = math.subtract(centerB, centerA);

  if (math.dot(direction, normal) < 0) {
    normal.x = -normal.x;
    normal.y = -normal.y;
  }

  return {
    collided: true,
    normal: normal,
    penetration: { x: normal.x * minOverlap, y: normal.y * minOverlap },
  };
};

export const circleCircle = (a: CircleCollider, b: CircleCollider): ICollisionResult => {
  const centerA = a.getCenter();
  const centerB = b.getCenter();

  const dx = centerA.x - centerB.x;
  const dy = centerA.y - centerB.y;

  const distanceSq = dx * dx + dy * dy;
  const combinedRadius = a.radius + b.radius;

  if (distanceSq < combinedRadius * combinedRadius) {
    const distance = Math.sqrt(distanceSq);
    const normal = distance === 0 ? { x: 1, y: 0 } : { x: dx / distance, y: dy / distance };
    const penetrationDepth = combinedRadius - distance;
    return {
      collided: true,
      normal: normal,
      penetration: { x: normal.x * penetrationDepth, y: normal.y * penetrationDepth },
    };
  }

  return defaultCollisionResult;
};

export const boxCircle = (box: BoxCollider, circle: CircleCollider): ICollisionResult => {
  const { gameObject, radius } = circle;
  const { position: circlePosition } = gameObject.transform;
  const { point: circleCenter, previousPoint: circlePrevCenter } = circlePosition;

  // Если нет предыдущей позиции, используем старый метод
  if (!circlePrevCenter) {
    return discreteBoxCircle(box, circle);
  }

  const transform = box.gameObject.transform;
  const { position: boxPosition, pivot, width, height } = transform;
  const { point: boxCenter, rotation } = boxPosition;

  // Вектор движения круга
  const circleVelocity = math.subtract(circleCenter, circlePrevCenter);

  // Трансформируем все в локальную систему координат прямоугольника
  const boxPivotWorld = { x: boxCenter.x + pivot.x, y: boxCenter.y + pivot.y };
  const circleStartLocal = math.rotate(math.subtract(circlePrevCenter, boxPivotWorld), { x: 0, y: 0 }, -rotation);
  const circleEndLocal = math.rotate(math.subtract(circleCenter, boxPivotWorld), { x: 0, y: 0 }, -rotation);
  const circleVelLocal = math.subtract(circleEndLocal, circleStartLocal);

  // Границы прямоугольника в локальных координатах
  const boxMin = { x: -pivot.x, y: -pivot.y };
  const boxMax = { x: width - pivot.x, y: height - pivot.y };

  // Расширяем границы прямоугольника на радиус круга (Minkowski sum)
  const expandedBoxMin = { x: boxMin.x - radius, y: boxMin.y - radius };
  const expandedBoxMax = { x: boxMax.x + radius, y: boxMax.y + radius };

  // Алгоритм Ray-AABB intersection
  let tNear = 0;
  let tFar = 1;
  let collisionNormalLocal: Vector2 = { x: 0, y: 0 };

  for (const axis of ['x', 'y'] as const) {
    if (Math.abs(circleVelLocal[axis]) < 1e-8) { // Движения по оси почти нет
      if (circleStartLocal[axis] < expandedBoxMin[axis] || circleStartLocal[axis] > expandedBoxMax[axis]) {
        return defaultCollisionResult; // Столкнуться не может
      }
      continue;
    }

    const t1 = (expandedBoxMin[axis] - circleStartLocal[axis]) / circleVelLocal[axis];
    const t2 = (expandedBoxMax[axis] - circleStartLocal[axis]) / circleVelLocal[axis];

    const tMin = Math.min(t1, t2);
    const tMax = Math.max(t1, t2);

    if (tMin > tNear) {
      tNear = tMin;
      collisionNormalLocal = { x: 0, y: 0 };
      if (axis === 'x') {
        collisionNormalLocal.x = -Math.sign(circleVelLocal.x);
      } else {
        collisionNormalLocal.y = -Math.sign(circleVelLocal.y);
      }
    }

    tFar = Math.min(tFar, tMax);

    if (tNear > tFar) {
      return defaultCollisionResult; // Нет пересечения
    }
  }

  if (tNear > 1) {
    return defaultCollisionResult; // Столкновение произойдет в будущем, но не в этом кадре
  }

  // Если tNear отрицательный, значит, объект уже находится внутри.
  // Считаем, что столкновение произошло в самом начале кадра.
  if (tNear < 0) {
    tNear = 0;
  }

  // Проверяем, не находится ли точка столкновения внутри угловой области
  const contactPoint = math.add(circleStartLocal, math.multiply(circleVelLocal, tNear));
  let isCornerCollision = true;
  for (const axis of ['x', 'y'] as const) {
    if (contactPoint[axis] >= boxMin[axis] && contactPoint[axis] <= boxMax[axis]) {
      isCornerCollision = false;
      break;
    }
  }

  if (isCornerCollision) {
    // Находим ближайший угол
    const closestCorner = {
      x: (contactPoint.x < boxMin.x) ? boxMin.x : boxMax.x,
      y: (contactPoint.y < boxMin.y) ? boxMin.y : boxMax.y,
    };

    // Пересчитываем столкновение как сфера-линия
    const cornerToStart = math.subtract(circleStartLocal, closestCorner);
    const a = math.dot(circleVelLocal, circleVelLocal);
    const b = 2 * math.dot(cornerToStart, circleVelLocal);
    const c = math.dot(cornerToStart, cornerToStart) - radius * radius;
    const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
      return defaultCollisionResult;
    }

    const t = (-b - Math.sqrt(discriminant)) / (2 * a);
    if (t < 0 || t > 1) {
      return defaultCollisionResult;
    }

    const actualContactPoint = math.add(circleStartLocal, math.multiply(circleVelLocal, t));
    collisionNormalLocal = math.normalize(math.subtract(actualContactPoint, closestCorner));
    tNear = t;
  }


  if (tNear >= 0 && tNear <= 1) {
    const contactTime = Math.max(0, tNear);
    const penetrationDepth = (1 - contactTime) * Math.sqrt(math.dot(circleVelocity, circleVelocity));
    const normalWorld = math.normalize(math.rotate(collisionNormalLocal, { x: 0, y: 0 }, rotation));

    return {
      collided: true,
      normal: normalWorld,
      penetration: { x: normalWorld.x * penetrationDepth, y: normalWorld.y * penetrationDepth },
    };
  }

  return defaultCollisionResult;
};

/**
 * @description Старая версия проверки столкновения, используется как fallback
 */
const discreteBoxCircle = (box: BoxCollider, circle: CircleCollider): ICollisionResult => {
  const circleCenter = circle.getCenter();
  const radius = circle.radius;
  const transform = box.gameObject.transform;
  const { position, pivot, width, height } = transform;
  const { point: boxPosition, rotation } = position;

  const boxPivotWorld = { x: boxPosition.x + pivot.x, y: boxPosition.y + pivot.y };
  const circleCenterTranslated = math.subtract(circleCenter, boxPivotWorld);
  const circleCenterLocal = math.rotate(circleCenterTranslated, { x: 0, y: 0 }, -rotation);

  const closestPointLocal = {
    x: Math.max(-pivot.x, Math.min(circleCenterLocal.x, width - pivot.x)),
    y: Math.max(-pivot.y, Math.min(circleCenterLocal.y, height - pivot.y)),
  };

  const vectorToClosest = math.subtract(circleCenterLocal, closestPointLocal);
  const distanceSq = math.dot(vectorToClosest, vectorToClosest);

  if (distanceSq > radius * radius) {
    return defaultCollisionResult;
  }

  const distance = Math.sqrt(distanceSq);
  let normalLocal: Vector2;
  let penetrationDepth: number;

  if (distance > 0) {
    penetrationDepth = radius - distance;
    normalLocal = { x: vectorToClosest.x / distance, y: vectorToClosest.y / distance };
  } else {
    const dx1 = circleCenterLocal.x - (-pivot.x);
    const dx2 = (width - pivot.x) - circleCenterLocal.x;
    const dy1 = circleCenterLocal.y - (-pivot.y);
    const dy2 = (height - pivot.y) - circleCenterLocal.y;

    const minDx = Math.min(dx1, dx2);
    const minDy = Math.min(dy1, dy2);

    if (minDx < minDy) {
      penetrationDepth = minDx + radius;
      normalLocal = dx1 < dx2 ? { x: -1, y: 0 } : { x: 1, y: 0 };
    } else {
      penetrationDepth = minDy + radius;
      normalLocal = dy1 < dy2 ? { x: 0, y: -1 } : { x: 0, y: 1 };
    }
  }

  const normalWorld = math.rotate(normalLocal, { x: 0, y: 0 }, rotation);
  return {
    collided: true,
    normal: normalWorld,
    penetration: { x: normalWorld.x * penetrationDepth, y: normalWorld.y * penetrationDepth },
  };
};
