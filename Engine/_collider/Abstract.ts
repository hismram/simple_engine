import { IAbstractCollider } from './interfaces';
import { IGameObject } from 'Engine/interfaces';
import { ColliderType } from './types';

/**
 * @description Абстрактный класс коллайдера
 * @implements IAbstractCollider
 */
export abstract class Abstract implements IAbstractCollider {
    /**
     * @description Тип коллайдера
     */
    abstract type: ColliderType;

    /**
     * @param gameObject Игровой объект, к которому привязан коллайдер
     */
    constructor(
        public gameObject: IGameObject
    ) {
        this.gameObject.collider = this;
    }

    /**
     * @description Проверяет, сталкивается ли этот коллайдер с другим
     * @param other Другой коллайдер
     * @returns true, если есть столкновение, иначе false
     */
    abstract isCollidingWith(other: IAbstractCollider): boolean;
}
