import { IAbstractCollider } from 'Engine/collider';
import { IGameObject, IGameObjectOptions } from './interfaces';
import { Transform } from './Transform';
import { Vector2 } from './Vector2';

/**
 * @class GameObject
 * @description Базовый класс для всех игровых объектов
 */
export class GameObject implements IGameObject {
    /**
     * @private
     * @type {boolean}
     * @description Уничтожен ли объект
     */
    private _destroyed: boolean = false;
    /**
     * @private
     * @type {boolean}
     * @description Видимость на сцена
     */
    private _visibility: boolean = false;
    /**
     * @private
     * @type {boolean}
     * @description Активация, неактивированные обекты не участвуют в расчетах
     */
    private _enabled: boolean = false;

    /**
     * @type {(IAbstractCollider | null)}
     * @description Коллайдер объекта
     */
    collider: IAbstractCollider | null = null;
    /**
     * @type {Transform}
     * @description Позиция и размеры объекта
     */
    transform: Transform;
    /**
     * @type {Vector2}
     * @description Скорость объекта
     */
    velocity: Vector2 = { x: 0, y: 0 };
    /**
     * @type {Vector2}
     * @description Ускорение объекта
     */
    acceleration: Vector2 = { x: 0, y: 0 };

    /**
     * @constructor
     * @param {IGameObjectOptions} Конфигурация
     */
    constructor({ transform }: IGameObjectOptions) {
        this.transform = transform;
    }

    /**
     * @method enable
     * @description Включает объект
     */
    enable(): void {
        this._enabled = true;
    }

    /**
     * @method disable
     * @description Выключает объект
     */
    disable(): void {
        this._enabled = false;
    }

    /**
     * @method destroy
     * @description Помечает объект как уничтоженный
     */
    destroy(): void {
        this._destroyed = true;
    }

    /**
     * @method isEnabled
     * @returns {boolean}
     * @description Возвращает, активен ли объект
     */
    isEnabled(): boolean {
        return this._enabled;
    }

    /**
     * @method isDestroyed
     * @returns {boolean}
     * @description Возвращает, уничтожен ли объект
     */
    isDestroyed(): boolean {
        return this._destroyed;
    }

    /**
     * @method isVisible
     * @returns {boolean}
     * @description Возвращает, видим ли объект
     */
    isVisible(): boolean {
        return this._visibility;
    }

    /**
     * @method setVisibility
     * @param {boolean} visibility
     * @description Устанавливает видимость объекта
     */
    setVisibility(visibility: boolean): void {
        this._visibility = visibility;
    }

    /**
     * @method update
     * @param {number} deltaTime
     * @description Вызывается каждый кадр
     */
    update(deltaTime: number): void {
        this.velocity.x += this.acceleration.x;
        this.velocity.y += this.acceleration.y;
    }

    /**
     * @method draw
     * @param {CanvasRenderingContext2D} ctx
     * @description Вызывается для отрисовки объекта
     */
    draw(ctx: CanvasRenderingContext2D): void { }

    /**
     * @method onCollision
     * @param {GameObject} other
     * @description Вызывается при столкновении с другим объектом.
     */
    onCollision(other: GameObject): void { }
}