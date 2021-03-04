const scoreBoard = document.querySelector("#gameScore");
const result = document.querySelector("#resultDisplay");
window.random=[0,0,0,0,0,0,0,0,0,0];

let bomb = [];
const randomBombs=()=>{
    while (bomb.length < 10) {
        let n = Math.floor(Math.random() * 81) + 1;
        if (bomb.indexOf(n) === -1) {
           bomb.push(n);
        }
     }
     for (let i = 0; i < bomb.length; i++) {
        random[i] = bomb[i];
     }
}

const cellFormed=()=>{
    const cell = document.querySelector(".cell");
    for(var i=1;i<=81;i++){
        var element = document.createElement("div");
        element.setAttribute("id", `cell_${i}`);
        element.setAttribute("class", `gridCell`);
        element.setAttribute("onclick", `cellClicked(${i-1})`);
        cell.append(element);
    }   
}

const cellClicked=(num)=>{
    const gridCell = document.querySelectorAll(".gridCell");
    if(!random.includes(num)){
        scoreBoard.innerHTML = scoreBoard.innerHTML == "" ? 1 : Number(scoreBoard.innerHTML)+1;
        gridCell[num].classList.add("nobomb");
        gridCell[num].removeAttribute("onclick");
        if(Number(scoreBoard.innerHTML) >= 20){
            document.querySelectorAll(".gridCell").forEach((gridCell) => (gridCell.style.cursor = "not-allowed" , gridCell.removeAttribute("onclick")));
            result.innerHTML="You Win the Game!!!";
        }
    }else{
        result.innerHTML="Game-Over";
        for(let i=0;i<10;i++){
            gridCell[random[i]].classList.add("bomb");
            gridCell[random[i]].removeAttribute("onclick");
        }
        document.querySelectorAll(".gridCell").forEach((gridCell) => (gridCell.style.cursor = "not-allowed" , gridCell.removeAttribute("onclick")));
    }
}

function reset(){
    randomBombs();
    const myNode = document.getElementById("container");
    myNode.innerHTML ="";
    cellFormed();
    scoreBoard.innerHTML = "";
    result.innerHTML = "";
}

randomBombs();
cellFormed();