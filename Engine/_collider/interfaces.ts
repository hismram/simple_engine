import { Vector2 } from 'Engine/Vector2';
import { ColliderType } from './types';
import { IGameObject } from 'Engine/interfaces';

/**
 * @description Интерфейс для абстрактного коллайдера
 */
export interface IAbstractCollider {
    /**
     * @description Тип коллайдера
     */
    type: ColliderType;
    /**
     * @description Игровой объект, к которому привязан коллайдер
     */
    gameObject: IGameObject;
    /**
     * @description Проверяет, сталкивается ли этот коллайдер с другим
     * @param other Другой коллайдер
     * @returns true, если есть столкновение, иначе false
     */
    isCollidingWith(other: IAbstractCollider): boolean;
}

/**
 * @description Интерфейс для прямоугольного коллайдера
 * @extends IAbstractCollider
 */
export interface IBoxCollider extends IAbstractCollider {
    /**
     * @description Ширина коллайдера
     */
    width: number;
    /**
     * @description Высота коллайдера
     */
    height: number;
}

/**
 * @description Интерфейс для круглого коллайдера
 * @extends IAbstractCollider
 */
export interface ICircleCollider extends IAbstractCollider {
    /**
     * @description Радиус коллайдера
     */
    radius: number;

    /**
     * @description Возвращает центр коллайдера
     * @returns Координаты центра
     */
    getCenter(): Vector2;
}
