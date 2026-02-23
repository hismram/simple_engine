import { ICollisionResult } from './_collider/interfaces';
import { GameObject } from './GameObject';
import { IEngineCoreOptions } from './interfaces';

/**
 * @class EngineCore
 * @description Ядро движка
 */
export class EngineCore {
  /**
   * @private
   * @type {HTMLCanvasElement}
   * @description HTML-элемент canvas.
   */
  private canvas: HTMLCanvasElement;
  /**
   * @private
   * @type {CanvasRenderingContext2D}
   * @description Контекст
   */
  private ctx: CanvasRenderingContext2D;
  /**
   * @private
   * @type {GameObject[]}
   * @description Список игровых объектов на сцене
   */
  private _gameObjects: GameObject[] = [];
  /**
   * @private
   * @type {boolean}
   * @description Включает отладку для движка
   */
  private _debug: boolean = false;
  /**
   * @private
   * @type {number}
   * @description Идентификатор текущего кадра анимации
   */
  private animationFrameId: number = 0;
  /**
   * @private
   * @type {(() => void) | undefined}
   * @description Функция обратного вызова, вызывается перед обновлением
   */
  private _onBeforeUpdate?: () => void;
  /**
   * @private
   * @type {(() => void) | undefined}
   * @description Функция обратного вызова, вызывается перед отрисовкой
   */
  private _onBeforeDraw?: () => void;

  /**
   * @constructor
   * @param {IEngineCoreOptions} options Параметры для ядра движка
   */
  constructor({ canvasId, onBeforeUpdate, onBeforeDraw, debug }: IEngineCoreOptions) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this._onBeforeUpdate = onBeforeUpdate;
    this._onBeforeDraw = onBeforeDraw;
    this._debug = debug ?? false;
  }

  /**
   * @method addGameObjects
   * @param {GameObject[]} objects Объекты для добавления
   * @description Добавляет объекты на сцену
   */
  addGameObjects(objects: GameObject[]): void {
    if (this._debug) {
      objects.forEach((object) => (object.debug = true));
    }
    this._gameObjects = [...this._gameObjects, ...objects];
  }

  /**
   * @method removeGameObject
   * @param {GameObject} obj Объект
   * @description Удаляет обект со сцены
   */
  removeGameObject(obj: GameObject): void {
    this._gameObjects = this._gameObjects.filter((item) => item !== obj);
  }

  /**
   * @method start
   * @description Запускает игровой цикл
   */
  start(): void {
    this.gameLoop();
  }

  /**
   * @method stop
   * @description Останавливает игровой цикл
   */
  stop(): void {
    cancelAnimationFrame(this.animationFrameId);
  }

  /**
   * @method checkCollisions
   * @description Проверяет наличие столкновений между всеми игровыми объектами
   */
  checkCollisions(): void {
    const objects = this._gameObjects;

    for (let i = 0; i < objects.length; i++) {
      const a = objects[i];
      if (!a.collider || !a.isEnabled()) continue;

      for (let j = i + 1; j < objects.length; j++) {
        const b = objects[j];

        if (!b.collider || !b.isEnabled()) continue;

        const collisionResult = a.collider.isCollidingWith(b.collider);
        if (collisionResult.collided) {
          a.onCollision(b, collisionResult);
          // Инвертируем нормаль и вектор проникновения для второго объекта
          const invertedResult: ICollisionResult = {
            ...collisionResult,
            normal: collisionResult.normal ? { x: -collisionResult.normal.x, y: -collisionResult.normal.y } : null,
            penetration: collisionResult.penetration ? { x: -collisionResult.penetration.x, y: -collisionResult.penetration.y } : null,
          };
          b.onCollision(a, invertedResult);
        }
      }
    }
  }

  /**
   * @private
   * @method gameLoop
   * @param {number} [time=0] Текущее время
   * @description Основной игровой цикл
   */
  private gameLoop(time: number = 0): void {
      for (const item of this._gameObjects) {
          if (item.isEnabled()) {
              item.transform.position.previousPoint = { ...item.transform.position.point };
          }
      }
  
      this._onBeforeUpdate?.();
    for (const item of this._gameObjects) {
      if (item.isEnabled()) {
        item.update(time);
      }
    }

    this.checkCollisions();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this._onBeforeDraw?.();
    for (const item of this._gameObjects) {
      if (item.isVisible()) {
        item.draw(this.ctx);
      }
    }

    this._gameObjects = this._gameObjects.filter((item) => !item.isDestroyed());
    this.animationFrameId = requestAnimationFrame((t) => this.gameLoop(t));
  }
}
