// document.addEventListener('DOMContentLoaded', () => {
export default class NewField {
    constructor(board) {
        this.board = board;
    }

    addNewblock() {
        const plaingField = document.querySelector('.board');
        for (let i = 0; i < this.board; i++) {
            let cell = document.createElement('div');
            cell.classList.add('block')
            // block.prepend(elem);
            plaingField.appendChild(cell);
            //         const item = document.createElement('div')
            //         item.textContent = el
            //         item.classList.add("block")//к новому элементу списка добавляет класс
            //         // item.setAttribute('class', 'news-item');//к новому элементу списка добавляет класс или любой другой атрибут
            //         // item.setAttribute('href', 'https://learn.javascript.ru/attributes-and-custom-properties');//Любочка посмотри что такое атрибут
            //         // item.dataset.id = + (new Date())

            //         this.elem.insertBefore(item, this.elem.querySelector('.block'))
            //         // this._element.innerHTML += `<li>${title}</li>`;
            //         // this.deleteLastNews()
            //     }
        }
    }
}
// })

const a = new Board(4);
a.addNewblock();

console.log('dfkjfgbjk')