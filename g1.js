alert("ROCK PAPER SESSOR GAME");


 function rand(playerChoice){
  const choices = ['rock', 'paper', 'scissors'];
  const resultElement = document.getElementById("ans");
   const computerChoice = choices[Math.floor(Math.random() * 3)];
  
   const winPhoto = document.getElementById("win-photo")


   if (playerChoice === computerChoice) {

    resultElement.innerHTML = "It's a draw!";
    winPhoto.src = "draw.png";}

    else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
            )
             {
                resultElement.innerHTML = "YOU WIN! 🎉";
                winPhoto.src = "WIN.png";
            } 
            
   else {
   resultElement.innerHTML = "You lose. 😢";
   winPhoto.src = "LOSE.png";
            }

}