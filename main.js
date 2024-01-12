//Selectare nume jucator de catre user

let playerName = prompt("Enter your name:","User");
let nameMod = document.querySelector(".game__player-name");
nameMod.innerHTML = playerName;


let firstPlayer = document.querySelector(".game__player-1");
let secondPlayer = document.querySelector(".game__player-2");
let btnGame = document.querySelector(".game__btn");

let choseRock = document.querySelector(".game__user-chose-1");
let chosePaper = document.querySelector(".game__user-chose-2");
let choseScissors = document.querySelector(".game__user-chose-3");

let gameImgOne = document.querySelector(".game__img-1");
let gameImgTwo = document.querySelector(".game__img-2");

let borderColorFirst = document.querySelector(".game__player-1");
let borderColorSecond = document.querySelector(".game__player-2");


//atribuire o valoarea primului jucator 

choseRock.addEventListener("click", ()=>{
  firstPlayer.value = 1;
  borderColorFirst.style.background = "var(--rock-color)";
      gameImgOne.src = "img/rock.png";
  console.log(firstPlayer.value)
})

chosePaper.addEventListener("click", ()=>{
  firstPlayer.value = 2;
  gameImgOne.src = "img/paper.png";
  borderColorFirst.style.background = "var(--paper-color)";
  console.log(firstPlayer.value)
})

choseScissors.addEventListener("click", ()=>{
  firstPlayer.value = 3;
  gameImgOne.src = "img/scissors.png";
      borderColorFirst.style.background = "var(--scissors-color)";
  console.log(firstPlayer.value)
})

// pun un lister pe button de start
btnGame.addEventListener("click", function gameStart() {
  
//conditionam rezultatul in cazul in care nu este setata nici o valoare 

if(firstPlayer.value === undefined){
  alert("alege valoare")
} else {
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
  if (
    (firstPlayer.value === 1 && secondPlayer.value === 3) ||
    (firstPlayer.value === 2 && secondPlayer.value === 1) ||
    (firstPlayer.value === 3 && secondPlayer.value === 1) ||
    (firstPlayer.value === 3 && secondPlayer.value === 2)
  ) {
    gameResult.innerHTML = `Win ${playerName}!`;
  } else if (firstPlayer.value === secondPlayer.value) {
    gameResult.innerHTML = "Nobody win!";
  } else {
    gameResult.innerHTML = "Computer win!";
  }
  
  playerTwo();
});


//? 1. Posibilitatea de a alege userul (1 Foarfica,2 Pitara,3 Hartie); [DONE]


//? 2. Limitarea rundelor de joc .
//? 3. Demonstrarea vizuala a punctelor castigate.
//? 4. Anuntarea castigatorului final.

//? 5. Redenumirea corecta a jucatorilor cu posibilitatea de a modifica numele. [DOME]
