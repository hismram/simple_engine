import { EngineCore } from 'Engine/Core';
import { GameObject } from 'Engine/GameObject';
import { BoxCollider, CircleCollider } from 'Engine/collider';
import './style.css';
import { Vector2 } from 'Engine/Vector2';

interface IPaddleOptions {
    x: number,
    y: number,
    ball?: Ball,
    ai?: boolean
}

class PingPongGame {
    private canvas: HTMLCanvasElement;
    private engine: EngineCore;
    private ctx: CanvasRenderingContext2D;
    private player: Paddle;
    private computer: Paddle;
    private ball: Ball;
    private keys: { [key: string]: boolean } = {
        ArrowUp: false,
        ArrowDown: false
    };

    constructor(canvasId: string) {
        this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this.canvas.width = 800;
        this.canvas.height = 600;

        this.engine = new EngineCore({
            canvasId,
            onBeforeUpdate: this._onBeforeUpdate.bind(this),
            onBeforeDraw: this._onBeforeDraw.bind(this)
        });
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

        this.ball = new Ball(this.canvas.width / 2, this.canvas.height / 2);
        this.player = new Paddle({
            x: 0,
            y: this.canvas.height / 2 - 50
        });
        this.computer = new Paddle({
            x: this.canvas.width - 10,
            y: this.canvas.height / 2 - 50,
            ai: true,
            ball: this.ball
        });

        this.player.enable();
        this.player.setVisibility(true);
        this.computer.enable();
        this.computer.setVisibility(true);
        this.ball.enable();
        this.ball.setVisibility(true);

        this.engine.addGameObjects([
            this.player, this.computer, this.ball
        ]);

        this.setupEventListeners();
    }

    protected _onBeforeDraw(): void {
        // Очистку canvas теперь делает движок, так что она не нужна
        // 1. Рисуем фон
        this.drawRect(0, 0, this.canvas.width, this.canvas.height, 'black');

        // 2. Рисуем счет
        this.drawText(this.player.score.toString(), this.canvas.width / 4, this.canvas.height / 5, 'white');
        this.drawText(this.computer.score.toString(), 3 * this.canvas.width / 4, this.canvas.height / 5, 'white');
    }

    protected _onBeforeUpdate(): void {
        const { player, ball, keys, canvas } = this;

        if (keys.ArrowUp) {
            player.transform.y -= 8;
        }
        if (keys.ArrowDown) {
            player.transform.y += 8;
        }

        if (ball.getCenter().y + ball.radius > canvas.height || ball.getCenter().y - ball.radius < 0) {
            ball.velocity.y = -ball.velocity.y;
        }

        // 3. Проверяем, был ли забит гол
        if (ball.getCenter().x - ball.radius < 0) {
            this.computer.score++;
            this.resetBall();
        } else if (ball.getCenter().x + ball.radius > canvas.width) {
            player.score++;
            this.resetBall();
        }
    }

    start() {
        this.engine.start();
    }

    private setupEventListeners() {
        this.canvas.addEventListener("mousemove", (evt: MouseEvent) => {
            let rect = this.canvas.getBoundingClientRect();
            this.player.transform.y = evt.clientY - rect.top - this.player.transform.height / 2;
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

    private resetBall() {
        const { ball } = this;

        ball.transform.x = this.canvas.width / 2 - ball.radius;
        ball.transform.y = this.canvas.height / 2 - ball.radius;
        ball.speed = 5;
        ball.velocity.x = -ball.velocity.x;
    }

    private drawRect(x: number, y: number, w: number, h: number, color: string) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, w, h);
    }

    private drawText(text: string, x: number, y: number, color: string) {
        this.ctx.fillStyle = color;
        this.ctx.font = '75px fantasy';
        this.ctx.fillText(text, x, y);
    }
}

class Paddle extends GameObject {
    public color: string;
    public score: number = 0;
    private _ball: Ball | null;
    private _ai: boolean;

    constructor({
        x, y, ball, ai
    }: IPaddleOptions) {
        super({
            transform: { x, y, width: 10, height: 100 }
        });

        this.collider = new BoxCollider(this);
        this._ball = ball ?? null;
        this._ai = ai ?? false;
        this.color = 'white';
    }

    public draw(ctx: CanvasRenderingContext2D) {
        const { x, y, width, height } = this.transform;
        ctx.fillStyle = this.color;
        ctx.fillRect(x, y, width, height);
    }

    public update(time: number) {
        if (this._ai && this._ball) {
            this.transform.y += ((this._ball.getCenter().y - (this.transform.y + this.transform.height / 2))) * 0.1;
        }
    }
}

class Ball extends GameObject {
    public radius: number;
    public speed: number = 5;
    public color: string = 'white';

    constructor(x: number, y: number) {
        const radius = 10;

        const transform = {
            x: x - radius,
            y: y - radius,
            width: radius * 2,
            height: radius * 2
        };

        super({ transform });
        this.collider = new CircleCollider(this, radius);
        this.radius = radius;
        this.velocity = { x: 5, y: 5 };
    }

    onCollision(other: GameObject): void {
        if (other instanceof Paddle) {
            let collidePoint = (this.getCenter().y - (other.transform.y + other.transform.height / 2));

            collidePoint = collidePoint / (other.transform.height / 2);

            let angleRad = (Math.PI / 4) * collidePoint;
            let direction = (this.transform.x < 400) ? 1 : -1;

            this.velocity.x = direction * this.speed * Math.cos(angleRad);
            this.velocity.y = this.speed * Math.sin(angleRad);

            this.speed += 0.1;
        }
    }

    public getCenter(): Vector2 {
        return {
            x: this.transform.x + this.radius,
            y: this.transform.y + this.radius
        }
    }

    public draw(ctx: CanvasRenderingContext2D) {
        const centerX = this.transform.x + this.radius;
        const centerY = this.transform.y + this.radius;

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(centerX, centerY, this.radius, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
    }

    update(deltaTime: number): void {
        this.transform.x += this.velocity.x;
        this.transform.y += this.velocity.y;
    }
}

(() => {
    const game = new PingPongGame('gameCanvas');
    game.start();
})();
