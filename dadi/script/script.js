// ecco il codice per "estrarre" un numero random tra 1 e 10:
const numero = Math.floor(Math.random() * 10 + 1);
const min = 1;
const max = 10;

const randomNumber1 = Math.floor(Math.random() * 10 + 1);
const randomNumber2 = Math.floor(Math.random() * 10 + 1);

const h2 = document.getElementById("message"); 
const button = document.getElementById("play-button");
const divYou = document.getElementById("you");
const divCpu = document.getElementById("cpu");

button.addEventListener("click",
function () {
  console.log(divYou.innerHTML = randomNumber1);
  console.log(divCpu.innerHTML = randomNumber2);
  
  

  if (randomNumber1 > randomNumber2) {
    console.log(h2.innerHTML = "Hai vinto");

  } else if (randomNumber1 === randomNumber2) {
   console.log(h2.innerHTML = "Pareggio");
  
  }else {
    console.log(h2.innerHTML = "Hai perso");
  }

 }

)



