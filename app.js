 let computer=0;
 let player=0;
 const scoreboard = document.querySelector(".scoreboard")
const comp =document.getElementById("comp");
const resulter=document.getElementById("resulter");
const players =document.getElementById("player");
const rock_div= document.getElementById("r");
const paper_div= document.getElementById("p");
const scissors_div= document.getElementById("s");

const emojiMap = {
    "r": "✊",  
    "p": "✋",  
    "s": "✌"   
};

function getComputerChoice(){
const choices=["r","p","s"];
const choice = Math.floor(Math.random()*choices.length);
return choices [choice];

}
function convertToWord(letter){
 if (letter === "r") return"rock";
 if (letter === "p") return "paper";
  return "scissors";  
}

function updateEmojis(computerChoice, userchoice) {
    document.getElementById("computer-emoji").innerHTML = emojiMap[computerChoice];
    document.getElementById("player-emoji").innerHTML = emojiMap[userchoice];}


function win(computerChoice,userchoice){
 player++;
 document.getElementById("computer").innerHTML = "computer:" + computer;
 document.getElementById("player").innerHTML= "player:" + player;
 resulter.innerHTML =convertToWord (computerChoice )+ " beats "+ convertToWord(userchoice )+".you win!";

 
    
}

function lose(computerChoice,userchoice){
    computer++;
 document.getElementById("computer").innerHTML =  "computer:" + computer;
 document.getElementById("player").innerHTML= "player:" +player;
 resulter.innerHTML =convertToWord (computerChoice )+ " looses "+ convertToWord(userchoice )+".you lost!";

      
  }

  function draw(computerChoice,userchoice){
    document.getElementById("computer").innerHTML = "computer:" +computer;
    document.getElementById("player").innerHTML= "player:"+ player;
    resulter.innerHTML = "Both chose " + convertToWord(computerChoice) + ". It's a draw!";

      
  }

function game(userchoice){
    const computerChoice=getComputerChoice();
    updateEmojis(computerChoice, userchoice);
    switch (userchoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(computerChoice,userchoice);
            break;
            case "rp":
            case "ps":
            case "sr":
            lose(computerChoice,userchoice);
               break;
               case "rr":
                case"pp":
                case"ss":
            draw(computerChoice,userchoice);
                break;
            }
    }



function main(){
rock_div.addEventListener("click",function(){
  game("r");
    
})

paper_div.addEventListener("click",function(){
   game("p");
     
 })

 scissors_div.addEventListener("click",function(){
    game("s");
     
 })
}
main();











// function computerChoice(){
//     const choices=["rock", "paper", "scissors"];
//     const choice = Math.floor(Math.random()*choices.length);
    // if else  for checking the results of the choice function call


    //return the choice.


// console.log(computerChoice());



































// const modifyEvent=(emoji)=>{
// document.querySelector("#player-emoji").innerHTML=emoji;
// }
