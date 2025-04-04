export class Devil {
    constructor(num) {
        this.hole = (index) => document.querySelector(`#hole${index}`);
        this.holes = document.querySelectorAll('.hole')
        this.index = num
        this.oldIndex = undefined
    }

    getRandomNumber(){
        const options = [];
        for (let num = 1; num <= 16; num++) {
            if (num !== this.oldIndex) {
                options.push(num);
            }
        }
        const randomIndex = Math.floor(Math.random() * options.length);
        return options[randomIndex];
    }

    appearDevil(){
        this.hole(this.index).className = "hole hole_has-devil";
    }

    spawnDevil() {
        this.oldIndex = this.index;
        this.index = this.getRandomNumber()
        this.hole(this.index).className = "hole hole_has-devil";
        this.hole(this.oldIndex).className = "hole";
        console.log(this.index)
        console.log(this.hole(this.index).classList)
        console.log(this.oldIndex)
        console.log(this.hole(this.oldIndex).classList)
    }
}
