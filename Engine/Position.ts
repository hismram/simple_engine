import { Point } from './Point';

/** 
 * Сведения о положении обекта в пространстве
 */
export type Position = {
    /**
     * Координаты обекта
     */
    point: Point;
    /**
     * Угол поворота объекта
     */
    rotation: number;
    /**
     * Предыдущие координаты обекта
     */
    previousPoint?: Point;
}