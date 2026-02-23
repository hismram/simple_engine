import { Point } from './Point';
import { Position } from './Position';

/** Данные о размерах и позиции объекта */
export type Transform = {
  /** Позиция в пространстве */
  position: Position;
  /** Точка привязки, центр вращения */
  pivot: Point;
  /** Ширина */
  width: number;
  /** Высота */
  height: number;
  /** Радиус для круглых обектов */
  radius?: number;
};
