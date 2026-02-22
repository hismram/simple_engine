import { BoxCollider } from './Box';
import { CircleCollider } from './Circle';
import { IAbstractCollider, IBoxCollider } from './interfaces';
import { ColliderType } from './types';

/**
 * @description Проверяет столкновение между двумя коллайдерами
 * @param a Первый коллайдер
 * @param b Второй коллайдер
 * @returns true, если есть столкновение, иначе false
 * @throws Ошибка, если не найдена функция для обработки столкновения
 */
export const checkCollision = (a: IAbstractCollider, b: IAbstractCollider): boolean => {
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

/**
 * @description Проверяет столкновение между двумя прямоугольными коллайдерами
 * @param a Первый коллайдер
 * @param b Второй коллайдер
 * @returns true, если есть столкновение, иначе false
 */
const boxBox = (a: IBoxCollider, b: IBoxCollider): boolean => {
  const transformA = a.gameObject.transform;
  const transformB = b.gameObject.transform;
  return (
    transformA.x < transformB.x + b.width &&
    transformA.x + a.width > transformB.x &&
    transformA.y < transformB.y + b.height &&
    transformA.y + a.height > transformB.y
  );
};

/**
 * @description Проверяет столкновение между двумя круглыми коллайдерами
 * @param a Первый коллайдер
 * @param b Второй коллайдер
 * @returns true, если есть столкновение, иначе false
 */
export const circleCircle = (a: CircleCollider, b: CircleCollider): boolean => {
  const centerA = a.getCenter();
  const centerB = a.getCenter();

  const dx = centerA.x - centerB.x;
  const dy = centerA.y - centerB.y;

  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance < a.radius + b.radius;
};

/**
 * @description Проверяет столкновение между прямоугольным и круглым коллайдерами
 * @param box Прямоугольный коллайдер
 * @param circle Круглый коллайдер
 * @returns true, если есть столкновение, иначе false
 */
export const boxCircle = (box: BoxCollider, circle: CircleCollider): boolean => {
  const center = circle.getCenter();

  const rect = {
    x: box.gameObject.transform.x,
    y: box.gameObject.transform.y,
    width: box.gameObject.transform.width,
    height: box.gameObject.transform.height,
  };

  const closesetX = Math.max(rect.x, Math.min(center.x, rect.x + rect.width));
  const closesetY = Math.max(rect.y, Math.min(center.y, rect.y + rect.height));

  const dx = center.x - closesetX;
  const dy = center.y - closesetY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  return distance < circle.radius;
};
