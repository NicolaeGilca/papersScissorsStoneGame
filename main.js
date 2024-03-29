//Selectare nume jucator de catre user
let playerName = prompt("Enter your name:","User");
let nameMod = document.querySelector(".game__player-name");
nameMod.innerHTML = playerName;

//declararea variabilelor principale 
let firstPlayer = document.querySelector(".game__player-1");
let secondPlayer = document.querySelector(".game__player-2");
const btnGame = document.querySelector(".game__btn");

//declararea variabilelor secundare 
const choseRock = document.querySelector(".game__user-chose-1");
const chosePaper = document.querySelector(".game__user-chose-2");
const choseScissors = document.querySelector(".game__user-chose-3");

let gameImgOne = document.querySelector(".game__img-1");
let gameImgTwo = document.querySelector(".game__img-2");

let borderColorFirst = document.querySelector(".game__player-1");
let borderColorSecond = document.querySelector(".game__player-2");


//atribuire o valoarea primului jucator 
choseRock.addEventListener("click", ()=>{
  firstPlayer.value = 1;
  borderColorFirst.style.background = "var(--rock-color)";
      gameImgOne.src = "img/rock.png";
 
})

chosePaper.addEventListener("click", ()=>{
  firstPlayer.value = 2;
  gameImgOne.src = "img/paper.png";
  borderColorFirst.style.background = "var(--paper-color)";
  
})

choseScissors.addEventListener("click", ()=>{
  firstPlayer.value = 3;
  gameImgOne.src = "img/scissors.png";
      borderColorFirst.style.background = "var(--scissors-color)";
  
})

//adaugarea scorului pentru fiecare jucator si numarul de runde 
let scoreUser = 0;
let scoreComputer = 0;
let rounds = 1;


//butonul de start [onclick in HTML]
function gameStart() {

  //declararea rundei 
  document.getElementById("rounds").innerHTML = `Round: ${rounds}`
  rounds++;


//conditionam rezultatul in cazul in care nu este setata nici o valoare 
if(firstPlayer.value === undefined){
  alert("Select Rock, Paper or Scissors!")
} else {
  //jucatorul 2 primeste valoare random
  secondPlayer.value = Math.floor(Math.random() * 3 + 1);

}
  //in caz random pentru - firstPlayer = Math.floor(Math.random() * 3 + 1);

  function playerTwo() {

    //fiecare numar are imagiena lui
    if (secondPlayer.value === 1) {
      gameImgTwo.src = "img/rock-second.png";
      borderColorSecond.style.background = "var(--rock-color)";
    } else if (secondPlayer.value === 2) {
      gameImgTwo.src = "img/paper-second.png";
      borderColorSecond.style.background = "var(--paper-color)";
    } else if (secondPlayer.value === 3) {
      gameImgTwo.src = "img/scissors-second.png";
      borderColorSecond.style.background = "var(--scissors-color)";
    }
  }

  //conditiile jocului
  let gameResult = document.querySelector(".game__result");
  let gameScoreUser = document.querySelector(".game__score-user");
  let gameScoreComputer = document.querySelector(".game__score-computer")

  if (
    (firstPlayer.value === 1 && secondPlayer.value === 3) ||
    (firstPlayer.value === 2 && secondPlayer.value === 1) ||
    (firstPlayer.value === 3 && secondPlayer.value === 2)
  ) {
  //in caz de castiga nr1

    gameResult.innerHTML = `Win ${playerName}!`;
    gameScoreUser.innerHTML += "<div class='plusOnePoint'></div>";
    scoreUser++;

    if(scoreUser === 5) {
       gameResult.innerHTML = `${playerName} are the final winner!`;

      //reload page function
  btnGame.onclick = function reloadPage() {
  window.location.reload();
  }

    }
  //in caz de elgalitatate

  } else if (firstPlayer.value === secondPlayer.value) {
    gameResult.innerHTML = "Nobody win!";
  
  } else {
    //in caz de castiga nr2

    gameResult.innerHTML = "Computer win!";
    gameScoreComputer.innerHTML += "<div class='plusOnePoint'></div>"
    scoreComputer++;

    if(scoreComputer === 5) {
      gameResult.innerHTML = `Computer are the final winner!`;
      //reload page function
btnGame.onclick = function reloadPage() {
  window.location.reload();
  }

    }
  }

  if (scoreComputer === 5 || scoreUser === 5) {
    btnGame.innerHTML = "Play again";
    reloadPage()
  }

  console.log(scoreUser);
  console.log(scoreComputer);

  playerTwo();
};


//? 1. Posibilitatea de a alege userul (1 Foarfica,2 Pitara,3 Hartie); [DONE]


//? 2. Limitarea rundelor de joc . [DONE]
//? 3. Demonstrarea vizuala a punctelor castigate. [DONE]
//? 4. Anuntarea castigatorului final. [DONE]
//? 5. Redenumirea corecta a jucatorilor cu posibilitatea de a modifica numele. [DOME]
//  6. Reincarcarea paginii.