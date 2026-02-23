import { EngineCore } from 'Engine/Core';
import { GameObject } from 'Engine/GameObject';
import { BoxCollider, CircleCollider } from 'Engine/collider';
import { ICollisionResult } from 'Engine/_collider/interfaces';
import { reflect } from 'Engine/mathUtils';
import './style.css';
import { Vector2 } from 'Engine/Vector2';

interface IPaddleOptions {
  x: number;
  y: number;
  ball?: Ball;
  ai?: boolean;
}

/**
 * @class PingPongGame
 * Основной класс игры "Пинг-понг".
 */
class PingPongGame {
  private canvas: HTMLCanvasElement;
  private engine: EngineCore;
  private ctx: CanvasRenderingContext2D;
  private player: Paddle;
  private computer: Paddle;
  private ball: Ball;
  private keys: { [key: string]: boolean } = {
    ArrowUp: false,
    ArrowDown: false,
  };

  /**
   * @constructor
   * @param {string} canvasId идентификатор элемента canvas
   */
  constructor(canvasId: string) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    this.canvas.width = 800;
    this.canvas.height = 600;

    this.engine = new EngineCore({
      canvasId,
      onBeforeUpdate: this._onBeforeUpdate.bind(this),
      onBeforeDraw: this._onBeforeDraw.bind(this),
      debug: false,
    });
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

    this.ball = new Ball(this.canvas.width / 2, this.canvas.height / 2);
    this.player = new Paddle({
      x: 10,
      y: this.canvas.height / 2 - 50,
    });
    this.computer = new Paddle({
      x: this.canvas.width - 20,
      y: this.canvas.height / 2 - 50,
      ai: true,
      ball: this.ball,
    });

    this.player.enable();
    this.player.setVisibility(true);
    this.computer.enable();
    this.computer.setVisibility(true);
    this.ball.enable();
    this.ball.setVisibility(true);

    this.engine.addGameObjects([this.player, this.computer, this.ball]);

    this.setupEventListeners();
  }

  /**
   * @protected
   * @description Отрисовывает фон и счет
   */
  protected _onBeforeDraw(): void {
    // Рисуем фон
    this.drawRect(0, 0, this.canvas.width, this.canvas.height, 'black');

    // Рисуем счет
    this.drawText(this.player.score.toString(), this.canvas.width / 4, this.canvas.height / 5, 'white');
    this.drawText(this.computer.score.toString(), (3 * this.canvas.width) / 4, this.canvas.height / 5, 'white');
  }

  /**
   * @protected
   * @description Обновляет движение игрока и проверяет, забит ли гол.
   */
  protected _onBeforeUpdate(): void {
    const { player, ball, keys, canvas } = this;

    if (keys.ArrowUp) {
      player.transform.position.point.y -= 8;
    }
    if (keys.ArrowDown) {
      player.transform.position.point.y += 8;
    }

    if (ball.getCenter().y + ball.radius > canvas.height || ball.getCenter().y - ball.radius < 0) {
      ball.velocity.y = -ball.velocity.y;
    }

    // Проверяем, был ли забит гол
    if (ball.getCenter().x + ball.radius < 0) {
      this.computer.score++;
      this.resetBall();
    } else if (ball.getCenter().x - ball.radius > canvas.width) {
      player.score++;
      this.resetBall();
    }
  }

  /**
   * @description Запускает игровой движок
   */
  start(): void {
    this.engine.start();
  }

  /**
   * @private
   * @description Настраивает обработчики событий мыши и клавиатуры
   */
  private setupEventListeners(): void {
    this.canvas.addEventListener('mousemove', (evt: MouseEvent) => {
      const rect = this.canvas.getBoundingClientRect();
      this.player.transform.position.point.y = evt.clientY - rect.top - this.player.transform.height / 2;
    });

    window.addEventListener('keydown', (e) => {
      if (this.keys.hasOwnProperty(e.key)) {
        this.keys[e.key] = true;
      }
    });

    window.addEventListener('keyup', (e) => {
      if (this.keys.hasOwnProperty(e.key)) {
        this.keys[e.key] = false;
      }
    });
  }

  /**
   * @private
   * @description Возвращает мяч в центр поля
   */
  private resetBall(): void {
    const { ball } = this;

    ball.transform.position.point.x = this.canvas.width / 2 - ball.radius;
        ball.transform.position.point.y = this.canvas.height / 2 - ball.radius;
    ball.speed = 5;
    ball.velocity.x = -ball.velocity.x;
  }

  /**
   * @private
   * @description Рисует прямоугольник на canvas
   * @param {number} x - Координата X
   * @param {number} y - Координата Y
   * @param {number} w - Ширина
   * @param {number} h - Высота
   * @param {string} color - Цвет
   */
  private drawRect(x: number, y: number, w: number, h: number, color: string): void {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, w, h);
  }

  /**
   * @private
   * @description Рисует текст на canvas
   * @param {string} text - Текст для отображения
   * @param {number} x - Координата X
   * @param {number} y - Координата Y
   * @param {string} color - Цвет
   */
  private drawText(text: string, x: number, y: number, color: string): void {
    this.ctx.fillStyle = color;
    this.ctx.font = '75px fantasy';
    this.ctx.fillText(text, x, y);
  }
}

/**
 * @class Paddle
 * @extends GameObject
 * @description Представляет ракетку игрока.
 */
class Paddle extends GameObject {
  public color: string;
  public score: number = 0;
  private _ball: Ball | null;
  private _ai: boolean;

  /**
   * @constructor
   * @param {IPaddleOptions} options - Опции для создания ракетки.
   */
  constructor({ x, y, ball, ai }: IPaddleOptions) {
    super({
          transform: {
            position: {
              point: { x, y },
              rotation: 0,
            },
            pivot: { x: 5, y: 50 },
            width: 10,
            height: 100,
          },
        });

    this.collider = new BoxCollider(this);
    this._ball = ball ?? null;
    this._ai = ai ?? false;
    this.color = 'white';
  }

  /**
   * @public
   * @description Отрисовывает ракетку
   * @param {CanvasRenderingContext2D} ctx - Контекст рендеринга
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    const { position, pivot, width, height } = this.transform;
        const { point, rotation } = position;
    
        ctx.save();
        ctx.translate(point.x + pivot.x, point.y + pivot.y);
            ctx.rotate(rotation);
        
            ctx.fillStyle = this.color;
            ctx.fillRect(-pivot.x, -pivot.y, width, height);
        
            // Рисуем коллайдер для отладки
            if (this.debug && this.collider) {
              ctx.strokeStyle = 'red';
              ctx.lineWidth = 1;
              const box = this.collider as BoxCollider;
              ctx.strokeRect(-pivot.x, -pivot.y, box.width, box.height);
            }
        
            ctx.restore();
  }

  /**
   * @public
   * @description Обновляет позицию ракетки (для ИИ).
   * @param {number} _time - Дельта времени (не используется).
   */
  public update(_time: number): void {
    if (this._ai && this._ball) {
      this.transform.position.point.y += (this._ball.getCenter().y - (this.transform.position.point.y + this.transform.height / 2)) * 0.1;
    }
  }
}

/**
 * @class Ball
 * @extends GameObject
 * @description Представляет игровой мяч
 */
class Ball extends GameObject {
  public radius: number;
  public speed: number = 5;
  public color: string = 'white';

  /**
   * @constructor
   * @param {number} x - Начальная координата X
   * @param {number} y - Начальная координата Y
   */
  constructor(x: number, y: number) {
    const radius = 10;

    const transform = {
      position: {
              point: { x: x - radius, y: y - radius },
              rotation: 0,
            },
            pivot: { x: radius, y: radius },
      width: radius * 2,
      height: radius * 2,
    };

    super({ transform });
    this.collider = new CircleCollider(this, radius);
    this.radius = radius;
    this.velocity = { x: 5, y: 5 };
  }

  /**
   * @public
   * @description Обрабатывает столкновение с другими игровыми объектами
   * @param {GameObject} other - Другой игровой объект, участвующий в столкновении
   */
  onCollision(other: GameObject, result: ICollisionResult): void {
    if (other instanceof Paddle && result.normal) {
      // 1. Разрешение проникновения
      if (result.penetration) {
        this.transform.position.point.x += result.penetration.x;
        this.transform.position.point.y += result.penetration.y;
      }

      // 2. Отражение скорости
      const newVelocity = reflect(this.velocity, result.normal);
      this.velocity = newVelocity;

      // 3. Увеличение скорости для динамики
      this.speed += 0.1;
      const magnitude = Math.sqrt(this.velocity.x * this.velocity.x + this.velocity.y * this.velocity.y);
      this.velocity.x = (this.velocity.x / magnitude) * this.speed;
      this.velocity.y = (this.velocity.y / magnitude) * this.speed;
    }
  }

  /**
   * @public
   * @description Возвращает координаты центра мяча
   * @returns {Vector2} Координаты центра
   */
  public getCenter(): Vector2 {
    return {
      x: this.transform.position.point.x + this.radius,
            y: this.transform.position.point.y + this.radius,
    };
  }

  /**
   * @public
   * @description Отрисовывает мяч на canvas
   * @param {CanvasRenderingContext2D} ctx - Контекст рендеринга
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    const centerX = this.transform.position.point.x + this.radius;
        const centerY = this.transform.position.point.y + this.radius;

    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(centerX, centerY, this.radius, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();

    // Рисуем коллайдер для отладки
    if (this.debug && this.collider) {
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, this.radius, 0, Math.PI * 2, false);
      ctx.stroke();
    }

    if (this.debug) {
      console.log(`ball: ${JSON.stringify(this.transform)}`);
    }
  }

  /**
   * @public
   * @description Обновляет позицию мяча на основе его скорости
   * @param {number} _deltaTime - Дельта времени (не используется)
   */
  // Этот метод больше не нужен, так как GameObject.update теперь делает то же самое
    // update(_deltaTime: number): void {
    //   this.transform.position.point.x += this.velocity.x;
    //   this.transform.position.point.y += this.velocity.y;
    // }
}

/**
 * @description IIFE для запуска игры
 */
((): void => {
  const game = new PingPongGame('gameCanvas');
  game.start();
})();
