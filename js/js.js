

window.addEventListener("load", () => {
  let welcomeUser = document.getElementById('welcome-user');
  const params = new URL(document.location).searchParams;
  const name = params.get('name');
  welcomeUser.innerHTML = name;

  const computerChoiceDisplay = document.getElementById('computer-choice');
  const userChoiceDisplay = document.getElementById('user-choice');
  const resultDisplay = document.getElementById('result');
  const btns = document.querySelectorAll('button');
  let computerChoice;
  let userChoice;
  let result;


  btns.forEach(btn => {
    btn.addEventListener('click', (e)=> {
      userChoice = e.target.id;
      userChoiceDisplay.innerHTML = userChoice;
      generateComputerChoice();
      getResult ();
    });
  });

  function generateComputerChoice (){
    const randm = Math.floor(Math.random()*btns.length)+1;
      
      if (randm === 1){
        computerChoice = "rock";
      }
      if (randm === 2) {
        computerChoice = "paper";
      }
      if(randm === 3){
        computerChoice = "scissors";
      }
      computerChoiceDisplay.innerHTML = computerChoice;
  };

  function getResult() {
    if (userChoice === computerChoice) {
      result = 'You tied';
    } else if (
      (computerChoice === 'rock' && userChoice === 'paper') ||
      (computerChoice === 'paper' && userChoice === 'scissors') ||
      (computerChoice === 'scissors' && userChoice === 'rock')
    ) {
      result = 'You win!';
    } else {
      result = 'You lose!';
    }
    resultDisplay.innerHTML = result;
  }

});
  
  
  




