const choiceArray = ["rock", "paper", "scissor"];

function ComputerChoice(array){
    const randomIndex = (Math.floor(Math.random()*3));
    return array[randomIndex];
}

const randomElement = ComputerChoice(choiceArray);

function rockpaperscissor(playerSelection, computerSelection){
    console.log("Computers random choice is: ", computerSelection);
    console.log("Players choice was :        ", playerSelection);
    if (playerSelection === "rock" && computerSelection === "paper"){
      computer_score += 1;  
      console.log("Player loses!")
    }
    else if (playerSelection === "rock" && computerSelection === "scissor"){
      player_score += 1;
      console.log("Player wins!")
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
      player_score += 1;
      console.log("Player wins!")
    }
    else if (playerSelection === "paper" && computerSelection === "scissor"){
      computer_score += 1;
      console.log("Player loses!")
    }
    else if (playerSelection === "scissor" && computerSelection === "rock"){
      computer_score += 1;
      console.log("Player loses!")
    }
    else if (playerSelection === "scissor" && computerSelection === "paper"){
      player_score += 1;
      console.log("Player wins!")
    }
    else{
      console.log("Tie Game, Go again!");
    }
}

function select_rock(){
  const rock = document.querySelector("#rock");
  rock.addEventListener('click', e => {
    set_player_rock();
    works_this_way(promptPlayer);
  } )
}

function select_paper(){
  const paper = document.querySelector("#paper");
  paper.addEventListener('click', e => {
    set_player_paper();
    works_this_way(promptPlayer);
  } )
}

function select_scissor(){
  const scissor = document.querySelector("#scissor");
  scissor.addEventListener('click', e => {
    set_player_scissor();
    works_this_way(promptPlayer);
  } )

}

function set_player_rock(){
  promptPlayer = "rock";
  player_array.push("rock")
  return promptPlayer;
}
function set_player_paper(){
  promptPlayer = "paper";
  player_array.push("paper")
  return promptPlayer;
}
function set_player_scissor(){
  promptPlayer = "scissor";
  player_array.push("scissor")
  return promptPlayer;
}

function game_win_logic(player_score, computer_score){
  if (player_score===5){
    console.log("Player has reached 5 points and wins!")
  }
  else if (computer_score ===5){
    console.log("Computer has reached 5 points and wins!")
  }
}

function works_this_way(promptPlayer){
    const computerSelection = ComputerChoice(choiceArray);
    const playerSelection = promptPlayer;  
    rockpaperscissor(playerSelection, computerSelection)
    game_win_logic(player_score, computer_score)
    updateScoreDisplay() 
}

function updateScoreDisplay() {
  const playerScoreDisplay = document.querySelector('#playerScore');
  const computerScoreDisplay = document.querySelector('#computerScore');

  playerScoreDisplay.textContent = `Player Score: ${player_score}`;
  computerScoreDisplay.textContent = `Computer Score: ${computer_score}`;

}

let player_score = 0;
let computer_score = 0;

let promptPlayer;
let player_array = []

select_rock();
select_paper();
select_scissor();