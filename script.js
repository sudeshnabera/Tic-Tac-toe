//access all the buttoms of game bords and resate button
let boxes =document.querySelectorAll(".box")
let resetBtn = document.getElementById('resetgame');
let newGameBtn = document.getElementById('new_btn')
let msgContainer = document.querySelector('.msg-containr')
let msg = document.getElementById('msg')
let turnO = true; //

const winPatterns = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]

] ; //add wining patterns  in 2d array
console.log("Box",boxes)
boxes.forEach((box)=>{
    // console.log("Box",box)
    box.addEventListener('click', ()=>{
        console.log("Button click");
        if (turnO) { //if turn of palyer O then this conditon will execute
            box.innerHTML='O'
            turnO =false
        }else{ //if turn of palyer X then this conditon will execute
            box.innerHTML='X'
            turnO =true
        }
       box.disabled = true; //when first players click blox it desable the blox besause the players does not click second time on tis button
       checkWinner()
    });
});  //Add event listener for every button 

function checkWinner(){
    console.log("checkWinner calld");
    for(let pattern of winPatterns){ // to access the position
        let value1 = boxes[pattern[0]].innerText;
        let value2 = boxes[pattern[1]].innerText;
        let value3 = boxes[pattern[2]].innerText;

        if(value1 != '' && value2 != '' && value3 != '' ){
            if(value1 === value2 && value2 === value3){
                showWinner(value1);
            } 
        }
    }
}

function showWinner(winner){
    msg.innerText=`Winner ${winner}!, You Won the Game` ;
    msgContainer.classList.remove('hide');
    for(let box of boxes){
        box.disabled = true; 
    }
}

function resetGame(){
    console.log("Resate game");
    turnO =true;
    for(let box of boxes){
        box.innerText="";
        box.disabled = false; 
    }
    msgContainer.classList.add('hide');
};

function startGame(){
    console.log("Start game");
    turnO =true;
    for(let box of boxes){
        box.innerText="";
        box.disabled = false; 
    };
    msgContainer.classList.add('hide');

};