import {Devil} from './devil'

class DevilGame {
    constructor() {
        this.score = 0;
        this.missed = 0;
        this.maxMissed = 5;
        this.intervalTime = 1000;
        this.devil = new Devil(Math.floor(1 + Math.random() * 16));
    }

    startGame() {
        this.devil.appearDevil();
        [...this.devil.holes].forEach((element) => {
            element.onclick = () => {
                if (element.classList.contains('hole_has-devil')) {
                    this.addToScore()
                } else {
                    this.addToMissed()
                }
            }
        })
        this.intervalId = setInterval(
            () => this.devil.spawnDevil(), this.intervalTime
        );
    }

    addToScore() {
        this.score++;
        document.getElementById('dead').textContent = this.score;
    }

    addToMissed() {
        this.missed++;
        document.getElementById('lost').textContent = this.missed;
        if (this.missed === this.maxMissed) {
            this.endGame();
        }
    }

    endGame() {
        clearInterval(this.intervalId);
        alert(
            `Игра окончена!
Побито: ${this.score}. Промахов: ${this.missed}.
Нажмите OK, чтобы перезапустить.`
        );
        this.restartGame();
    }

    updateDeadCount() {
        document.getElementById('dead').textContent = this.score;
    }

    updateLostCount() {
        document.getElementById('lost').textContent = this.missed;
    }

    restartGame() {
        this.score = 0;
        this.missed = 0;
        this.updateDeadCount();
        this.updateLostCount();
        this.startGame();
    }
}

window.onload = () => {
    let game = new DevilGame();
    game.startGame()
};
