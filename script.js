const boxEl = document.querySelectorAll('.box');
const winner = document.getElementById('winner');
const restart = document.getElementById('restart');

let boxIndex = ['','','','','','','','',''];
let indexForChange = 1;
const winConditions = [
    [0,1,2],[3,4,5],
    [6,7,8],[0,3,6],
    [1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]
let isGameOn = true

boxEl.forEach(box=>{
    box.addEventListener('click',()=>{
        if(indexForChange%2==0 && box.textContent=="" && isGameOn){
            box.textContent = "O"
            boxIndex[box.getAttribute('index')]='O'
            winner.textContent= "X's turn"
            indexForChange++
            checkAndColor()
        }
        else if(indexForChange%2!=0 && box.textContent=="" && isGameOn){
            box.textContent = "X"
            boxIndex[[box.getAttribute('index')]]='X'
            winner.textContent= "O's turn"
            indexForChange++
            checkAndColor()
        }
    })
})

function reset(){
    boxIndex = ['','','','','','','','',''];
    boxEl.forEach(box=>{
        box.textContent=''
    })
    winner.textContent= ''
    boxEl.forEach(el=>{
        el.classList.remove('win')
    })
    isGameOn=true
    indexForChange=1
}

restart.addEventListener('click',reset)

function checkAndColor(){
    let winEl=[]
    winConditions.forEach(elements=>{
        if(elements.every(el=>boxIndex[el]=='X')){
            winEl = [...elements]
            winner.textContent="'X' is the winner"
            isGameOn=false
        }
        else if(elements.every(el=>boxIndex[el]=="O")){
            winEl = [...elements]  
            winner.textContent="'O' is the winner"
            isGameOn=false     
        }
        for(let j=0; j<winEl.length;j++){
                boxEl[winEl[j]].classList.add('win')
        }
        if(boxIndex.every(el=>el!='')&& isGameOn==true) winner.textContent='Match draw, Please Restart'
    })
}