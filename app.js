let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;

// to guess random color
let color=["yellow","red","green","purple"];


// to start the game
document.addEventListener("keypress",()=>{
    if(started==false){
        // console.log("gamestared");
        started=true;

        nextLevel();
    }
})


// to flash the random btn
function randomBtn(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },200);
}

// checking the seq of game and user
function checkans(indx){
    if(userSeq[indx]===gameSeq[indx]){
        if(userSeq.length === gameSeq.length){
            // setTimeout(nextLevel(),1000);
            nextLevel();
        }
    }else{
        h2.innerHTML=`Game over. your score was <b>${level}</b> <br>
        Press any key to start the game `;
        reset();
        let body=document.querySelector("body");
        body.classList.add("gameover");
        setTimeout(()=>{
            body.classList.remove("gameover");            
        },100);

    }
}

// to display highest score 
let higheScoreDisplay=document.querySelector("#highestScore")
let highestScore=[];
let highestNo=0;
function highScore(){
for(num of highestScore){
if(num>highestNo){
    highestNo=num;
}
}
higheScoreDisplay.innerHTML=`Your highScore is <b>${highestNo}</b>`; 
}


// to level up
let h2=document.querySelector("h2");
function nextLevel(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let rndIdx=Math.floor(Math.random()*3);
    let rdncolor=color[rndIdx];
    gameSeq.push(rdncolor);
    let rndbtn=document.querySelector(`.${rdncolor}`);
    randomBtn(rndbtn);
    highestScore.push(level);
    highScore();
}




// adding event listener to btn
let btns=document.querySelectorAll(".box");
function btnPress(){
    let btn = this;
    randomBtn(btn);
    let usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);

    checkans(userSeq.length-1);
}
for(btn of btns){
    btn.addEventListener("click",btnPress)
}

// to reset everthing
function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}