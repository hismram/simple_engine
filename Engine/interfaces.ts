import { IAbstractCollider } from 'Engine/collider';
import { Transform } from './Transform';
import { Vector2 } from './Vector2';

/**
 * @interface IGameObjectOptions
 * @description Параметры для создания игрового объекта
 */
export interface IGameObjectOptions {
    /**
     * @type {Transform}
     * @description Трансформация игрового объекта
     */
    transform: Transform;
}

/**
 * @interface IGameObject
 * @description Интерфейс игрового объекта
 */
export interface IGameObject {
    /**
     * @type {(IAbstractCollider | null)}
     * @description Коллайдер игрового объекта
     */
    collider: IAbstractCollider | null;
    /**
     * @type {Transform}
     * @description Позиция и размеры
     */
    transform: Transform;
    /**
     * @type {Vector2}
     * @description Скорость игрового объекта
     */
    velocity: Vector2;
    /**
     * @type {Vector2}
     * @description Ускорение игрового объекта
     */
    acceleration: Vector2
}

/**
 * @interface IEngineCoreOptions
 * @description Параметры для ядра движка
 */
export interface IEngineCoreOptions {
    /**
     * @type {string}
     * @description Идентификатор HTML-элемента canvas
     */
    canvasId: string;
    /**
     * @type {(() => void) | undefined}
     * @description Функция обратного вызова, вызываемая перед обновлением
     */
    onBeforeUpdate?: () => void;
    /**
     * @type {(() => void) | undefined}
     * @description Функция обратного вызова, вызываемая перед отрисовкой
     */
    onBeforeDraw?: () => void
}