const diceImages = [
  "dice1.png",
  "dice2.png",
  "dice3.png",
  "dice4.png",
  "dice5.png",
  "dice6.png",
];
let gameStarted;
let klik = false;
let dices = [0, 0, 0, 0, 0];
let scoreNormal = [0, 0, 0, 0, 0, 0];
let eenVast = false;
let tweeVast = false;
let drieVast = false;
let vierVast = false;
let vijfVast = false;

let reRoll = 0;
let reRollBaar = true;
let rollCount = 2;

document.getElementById("roll").onclick = rolling;

function rolling() {
  gameStarted = true;

  if (reRoll == 3) {
    reRollBaar = false;
  }
  if (reRollBaar == true) {
    klik = true;
    document.getElementById("rollsLeft").innerHTML =
      "Roll's left = " + rollCount;
    reRoll++;
    rollCount -= 1;

    if (eenVast == false) {
      let random = [Math.floor(Math.random() * 6)];
      dices[0] = random;
      const diceImage = "img/" + diceImages[dices[0]];
      document.getElementById("dice1").src = diceImage;
      document.getElementById("dice1").style.border = "5px dashed white";
    } else {
      dices[0]-- - 1;
      const diceImage = "img/" + diceImages[dices[0]];
      document.getElementById("dice1").src = diceImage;
    }

    //
    if (tweeVast == false) {
      let random = [Math.floor(Math.random() * 6)];
      dices[1] = random;
      const diceImage = "img/" + diceImages[dices[1]];
      document.getElementById("dice2").src = diceImage;
      document.getElementById("dice2").style.border = "5px dashed white";
    } else {
      dices[1]-- - 1;
      const diceImage = "img/" + diceImages[dices[1]];
      document.getElementById("dice2").src = diceImage;
    }
    if (drieVast == false) {
      let random = [Math.floor(Math.random() * 6)];
      dices[2] = random;
      const diceImage = "img/" + diceImages[dices[2]];
      document.getElementById("dice3").src = diceImage;
      document.getElementById("dice3").style.border = "5px dashed white";
    } else {
      dices[2]-- - 1;
      const diceImage = "img/" + diceImages[dices[2]];
      document.getElementById("dice3").src = diceImage;
    }
    if (vierVast == false) {
      let random = [Math.floor(Math.random() * 6)];
      dices[3] = random;
      const diceImage = "img/" + diceImages[dices[3]];
      document.getElementById("dice4").src = diceImage;
      document.getElementById("dice4").style.border = "5px dashed white";
    } else {
      dices[3]-- - 1;
      const diceImage = "img/" + diceImages[dices[3]];
      document.getElementById("dice4").src = diceImage;
    }
    if (vijfVast == false) {
      let random = [Math.floor(Math.random() * 6)];
      dices[4] = random;
      const diceImage = "img/" + diceImages[dices[4]];
      document.getElementById("dice5").src = diceImage;
      document.getElementById("dice5").style.border = "5px dashed white";
    } else {
      dices[4]-- - 1;
      const diceImage = "img/" + diceImages[dices[4]];
      document.getElementById("dice5").src = diceImage;
    }

    myFunction();
  }
}

document.getElementById("dice1").addEventListener("click", function () {
  vastZet("dice1");
});
document.getElementById("dice2").addEventListener("click", function () {
  vastZet("dice2");
});
document.getElementById("dice3").addEventListener("click", function () {
  vastZet("dice3");
});
document.getElementById("dice4").addEventListener("click", function () {
  vastZet("dice4");
});
document.getElementById("dice5").addEventListener("click", function () {
  vastZet("dice5");
});
function vastZet(dice) {
  if (gameStarted) {
    if (reRoll < 3) {
      let border = true;
      switch (dice) {
        case "dice1":
          eenVast = !eenVast;
          border = eenVast;
          break;
        case "dice2":
          tweeVast = !tweeVast;
          border = tweeVast;
          break;
        case "dice3":
          drieVast = !drieVast;
          border = drieVast;
          break;
        case "dice4":
          vierVast = !vierVast;
          border = vierVast;
          break;
        case "dice5":
          vijfVast = !vijfVast;
          border = vijfVast;
          break;
      }
      if (border) {
        document.getElementById(dice).style.border = "5px solid blue";
      } else {
        document.getElementById(dice).style.border = "5px dashed white";
      }
    }
  }
}
