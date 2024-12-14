let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;
let btns=["yellow","red","purple","green"];
let h4=document.querySelector("h4");
document.addEventListener("keypress",function(){

    if(started==false)
    {
        console.log("game is started");
        started=true;
    }
    levelUp();
    
 });
 function gameFlash(btn){
     btn.classList.add("gameflash");
     setTimeout(function(){
        btn.classList.remove("gameflash");
     },400);
    }
     function userFlash(btn){
        btn.classList.add("userFlash");
        setTimeout(function(){
           btn.classList.remove("userFlash");
        },400);

 }
 function levelUp(){
    level++;
    h4.innerText=`Level  ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randCol=btns[randIdx];
    let randBtn=document.querySelector(`.${randCol}`);
    console.log(randIdx);
    console.log(randCol);
    console.log(randBtn);

    gameFlash(randBtn);

 }
 function btnPress(){
    console.log(this);
    let btn=this;
    userFlash(btn);
 }
 let allBtn=document.querySelectorAll(".btn");
 for(btn of allBtn){
    btn.addEventListener("click",btnPress);
 }