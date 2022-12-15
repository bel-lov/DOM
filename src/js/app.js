// document.addEventListener('DOMContentLoaded', () => {
export default class NewField {
    constructor(board) {
        this.board = board;
    }

    newPlay() {
        const plaingField = document.querySelector('.board');
        for (let i = 0; i < this.board ** 2; i++) {
            let cell = document.createElement('div');
            cell.classList.add('block')
            plaingField.prepend(cell);
            // plaingField.appendChild(cell);
        }
    }
}
// })

const play = new NewField(4);
play.newPlay();

