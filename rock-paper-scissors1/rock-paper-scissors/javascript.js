// const choiceArray = ["rock", "paper", "scissor"];

// function ComputerChoice(array){
//     const randomIndex = (Math.floor(Math.random()*3));
//     return array[randomIndex];
// }

// //const randomElement = ComputerChoice(choiceArray);

// function rockpaperscissor(playerSelection, computerSelection){
//     console.log("Players choice was : ", playerSelection);
//     if (playerSelection === "rock" && computerSelection === "paper"){
//         console.log("Player chose : " + playerSelection + " Computer chose : " + computerSelection + "! paper beats rock!")
//     }
//     else if (playerSelection === "rock" && computerSelection === "scissor"){
//         console.log("Player chose : " + playerSelection + " Computer chose : " + computerSelection + "! rock beats scissor!")
//     }
//     else if (playerSelection === "paper" && computerSelection === "rock"){
//         console.log("Player chose : " + playerSelection + " Computer chose : " + computerSelection + "! Paper beats Rock!")
//     }
//     else if (playerSelection === "paper" && computerSelection === "scissor"){
//         console.log("Player chose : " + playerSelection + " Computer chose : " + computerSelection + "! scissor beats paper!")
//     }
//     else if (playerSelection === "scissor" && computerSelection === "rock"){
//         console.log("Player chose : " + playerSelection + " Computer chose : " + computerSelection + "! Rock beats scissor!")
//     }
//     else if (playerSelection === "scissor" && computerSelection === "paper"){
//         console.log("Player chose : " + playerSelection + " Computer chose : " + computerSelection + "! scissor beats rock!")
//     }
//     else{
//         console.log("Tie Game, Go again!")
//     }
// }

// const RPS = ["Rock", "Paper","Scissors", "Rock", "Paper"]

// for (let i = 0; i<= 4; i++){
//     //computerSelection = randomElement;
//     const computerSelection = ComputerChoice(choiceArray);
//     console.log("Computers random choice is: ", computerSelection);
//     //const promptPlayer = prompt("rock, paper, or scissor?")
//     const promptPlayer = RPS[i];
//     const playerSelection = promptPlayer.toLowerCase();   
//     rockpaperscissor(playerSelection, computerSelection)
// }


// let c = 0;

// function ConstforLoopTesting(){
//     for (let i = 0; i < 4; i++) {
//         let myConst = i;
//         console.log(myConst);
//         const a =  c; 
//         console.log(a)
//         console.log(c)
//         c++
//     }
// }

// function LetforLoopTesting(){
//     for (let i = 0; i < 4; i++) {
//         let myConst = i;
//         console.log(myConst);
//         const a =  c; 
//         console.log(a)
//         console.log(c)
//         c++
//     }
// }


// function testBoth(){
    
// }


let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);
