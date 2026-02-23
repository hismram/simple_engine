import { Point } from './Point';
import { Vector2 } from './Vector2';

export const subtract = (a: Point, b: Point): Vector2 => ({
    x: a.x - b.x,
    y: a.y - b.y
});


export const dot = (a: Point | Vector2, b: Point | Vector2): number => (
    a.x * b.x + a.y * b.y
);

export const rotate = (point: Point, center: Point, angle: number): Point => {
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);

    const dx = point.x - center.x;
    const dy = point.y - center.y;

    return {
        x: dx * cos - dy * sin,
        y: dx * sin + dy * cos
    };
}

export const reflect = (vector: Vector2, normal: Vector2): Vector2 => {
    const dotProduct = dot(vector, normal);
    return {
        x: vector.x - 2 * dotProduct * normal.x,
        y: vector.y - 2 * dotProduct * normal.y
    };
};

export const add = (a: Point, b: Vector2): Point => ({
    x: a.x + b.x,
    y: a.y + b.y
});

export const multiply = (vector: Vector2, scalar: number): Vector2 => ({
    x: vector.x * scalar,
    y: vector.y * scalar
});

export const normalize = (vector: Vector2): Vector2 => {
    const length = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
    if (length === 0) return { x: 0, y: 0 };
    return {
        x: vector.x / length,
        y: vector.y / length
    };
};