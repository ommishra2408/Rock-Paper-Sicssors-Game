let userScore = 0;
let computerScore = 0;

function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (userChoice === computerChoice) {
    result = `It's a draw! You both chose ${userChoice}.`;
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = `You win! 🎉 ${capitalize(userChoice)} beats ${computerChoice}.`;
    userScore++;
  } else {
    result = `You lose 😢 ${capitalize(computerChoice)} beats ${userChoice}.`;
    computerScore++;
  }

  document.getElementById("result").innerHTML = `
    <p>${result}</p>
    <p><span class="highlight">You:</span> ${userChoice} | 
       <span class="highlight">Computer:</span> ${computerChoice}</p>
  `;

  document.getElementById("score").innerText = `You: ${userScore} | Computer: ${computerScore}`;
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
