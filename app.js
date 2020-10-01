import * as myFunc from './index_mine.js';

const board = document.querySelector(".board");
const boardLetters = document.querySelector(".letters");
const boardNumbers = document.querySelector(".numbers");

let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
let index = 0;
let black = false;
let num = 1;


for (let i = 0; i < 8; i++) {
    let letter = document.createElement("li");
    letter.textContent = letters[i];
    boardLetters.appendChild(letter);

    let numbers = document.createElement("li");
    numbers.textContent = num++;
    boardNumbers.appendChild(numbers);
}

for (let i = 1; i <= 64; i++) {
    const sqaure = document.createElement("div");
    if (black) {
        sqaure.classList.add("square");
        sqaure.classList.add("black");
        index++;
        black = !black;
    } else {
        sqaure.classList.add("square");
        sqaure.classList.add("white");
        index++;
        black = !black;
    }
    board.appendChild(sqaure);
    if (index === 8) {
        black = !black;
        index = 0;
    }
}
const button = document.getElementById('button');
// const allFields = document.querySelectorAll('.square');

button.addEventListener("click", function () {
    let o = document.querySelectorAll('.square')
    // o[1].appendChild(img)

    let result = myFunc.solve();
    result.flat().forEach((x, index) => {
        [...x.split(" ")].forEach((x, index1) => {
            if (x === "*") {
                let img = document.createElement('img')
                img.src = './views/figure.png'
                img.classList.add('element');
                console.log(`${"*"} - ${index*8 + index1}`)
                o[index*8 + index1].appendChild(img)
            }
        })
    })
})