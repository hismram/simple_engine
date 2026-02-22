import { Vector2 } from 'Engine/Vector2';
import { Abstract } from './Abstract';
import { IAbstractCollider, ICircleCollider } from './interfaces';
import { IGameObject } from 'Engine/interfaces';
import { checkCollision } from './Utils';
import { ColliderType } from './types';

/**
 * @description Круглый коллайдер
 * @extends Abstract
 * @implements ICircleCollider
 */
export class CircleCollider extends Abstract implements ICircleCollider {
    /**
     * @description Тип коллайдера
     */
    readonly type: ColliderType = ColliderType.Circle;
    /**
     * @description Радиус коллайдера
     */
    radius: number;

    /**
     * @param gameObject Игровой объект, к которому привязан коллайдер
     * @param radius Радиус коллайдера
     */
    constructor(
        public gameObject: IGameObject,
        radius: number
    ) {
        super(gameObject);

        this.radius = radius;
    }

    /**
     * @description Возвращает центр коллайдера
     * @returns Координаты центра
     */
    getCenter(): Vector2 {
        return {
            x: this.gameObject.transform.x + this.radius,
            y: this.gameObject.transform.y + this.radius
        }
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
