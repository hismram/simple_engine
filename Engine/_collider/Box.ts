import { IGameObject } from 'Engine/interfaces';
import { Abstract as AbstractCollider } from './Abstract';
import { IAbstractCollider, IBoxCollider } from './interfaces';
import { checkCollision } from './Utils';
import { ColliderType } from './types';

/**
 * @description Прямоугольный коллайдер
 * @extends AbstractCollider
 * @implements IBoxCollider
 */
export class BoxCollider extends AbstractCollider implements IBoxCollider {
    /**
     * @description Ширина коллайдера
     */
    public width: number;
    /**
     * @description Высота коллайдера
     */
    public height: number;
    /**
     * @description Тип коллайдера
     */
    public type: ColliderType = ColliderType.Box;

    /**
     * @param gameObject Игровой объект, к которому привязан коллайдер
     * @param width Ширина коллайдера, по умолчанию ширина обекта
     * @param height Высота коллайдера, по умолчанию высота объекта
     */
    constructor(
        public gameObject: IGameObject,
        width?: number,
        height?: number
    ) {
        super(gameObject);

        this.width = width ?? gameObject.transform.width;
        this.height = height ?? gameObject.transform.height;
    }

    /**
     * @description Проверяет, сталкивается ли этот коллайдер с другим
     * @param other Другой коллайдер
     * @returns true, если есть столкновение, иначе false
     */
    isCollidingWith(other: IAbstractCollider): boolean {
        return checkCollision(this, other);
    }

}
