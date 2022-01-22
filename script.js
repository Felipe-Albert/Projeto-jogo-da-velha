let squares = document.querySelectorAll(".square");

let score = document.querySelectorAll(".score");

let button = document.getElementById("button");

let scoreO = 0;
let scoreX = 0;
let scoreE = 0;

document.addEventListener("DOMContentLoaded", () => {

    squares.forEach((square) => {
        square.addEventListener("click", handleClick);
    })
})

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {

        setTimeout(resetGame, 1000);

        updateResult(playerTime);

    } else if ((countTurn0 >= 5 || countTurn1 >= 5) && !gameOver) {

        scoreE++;
        score[2].innerHTML = + scoreE;
        setTimeout(resetGame, 1000);
    }
    updateSquares()
}

function updateResult(playerTime) {



    playerTime == 0? scoreX ++ : scoreO ++;
    score[0].innerHTML = + scoreX;
    score[1].innerHTML = + scoreO;

}

function resetGame(){

    reset ()
    squares.forEach((square)=>{

        square.innerHTML = ''
        
    })
    updateSquares()
}


function updateSquares(){

    squares.forEach((square)=>{

        let postion = square.id
        let symbol = board[postion]

        if(symbol != ''){
            square.innerHTML = `<div class ='${symbol}''></div>`
        }
    })
}

function resetScore() {

    score[0].innerHTML = "0";
    score[1].innerHTML = "0";
    score[2].innerHTML = "0";

}

button.addEventListener ("click", resetScore);