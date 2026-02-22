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
  constructor({ canvasId, onBeforeUpdate, onBeforeDraw }: IEngineCoreOptions) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this._onBeforeUpdate = onBeforeUpdate;
    this._onBeforeDraw = onBeforeDraw;
  }

  /**
   * @method addGameObjects
   * @param {GameObject[]} objects Объекты для добавления
   * @description Добавляет объекты на сцену
   */
  addGameObjects(objects: GameObject[]): void {
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

        if (a.collider.isCollidingWith(b.collider)) {
          a.onCollision(b);
          b.onCollision(a);
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
