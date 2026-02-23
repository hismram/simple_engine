import { IAbstractCollider, ICollisionResult } from 'Engine/_collider/interfaces';
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
  /**
   * @type {boolean | undefined}
   * @description Включает отладку для объекта
   */
  debug?: boolean;
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
   * @type {number}
   * @description Скорость вращения
   */
  rotationVelocity: number;
  /**
   * @type {Vector2}
   * @description Скорость игрового объекта
   */
  velocity: Vector2;
  /**
   * @type {Vector2}
   * @description Ускорение игрового объекта
   */
  acceleration: Vector2;

  /**
   * @description Обрабатывает столкновение с другим игровым объектом
   * @param other Другой игровой объект
   * @param result Результат столкновения
   */
  onCollision(other: IGameObject, result: ICollisionResult): void;
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
  onBeforeDraw?: () => void;
  /**
   * @type {boolean | undefined}
   * @description Включает отладку для движка
   */
  debug?: boolean;
}
