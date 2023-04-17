//document.addEventListener("roll", myFunction);
let aantalEnen = 0;
let aantalTween = 0;
let aantalDrien = 0;
let aantalVieren = 0;
let aantalVijfen = 0;
let aantalZessen = 0;
let aantalTotaal = 0;
let fullHouse = 0;
let fullHouseBool = false;
let isSmallStraight = false;
let isLargeStraight = false;
let yahtzee = 0;
let yahtzeeBool = false;

function myFunction() {
  let d1 = dices[0]++ + 1;
  let d2 = dices[1]++ + 1;
  let d3 = dices[2]++ + 1;
  let d4 = dices[3]++ + 1;
  let d5 = dices[4]++ + 1;
  aantalTotaal = 0;
  //console.log(d1);
  aantalEnen = 0;
  for (let i = 0; i < 6; i++) {
    if (dices[i] == 1) {
      aantalEnen += 1;
    }
  }
  aantalTween = 0;
  for (let i = 0; i < 6; i++) {
    if (dices[i] == 2) {
      aantalTween += 2;
    }
  }

  aantalDrien = 0;
  for (let i = 0; i < 6; i++) {
    if (dices[i] == 3) {
      aantalDrien += 3;
    }
  }

  aantalVieren = 0;
  for (let i = 0; i < 6; i++) {
    if (dices[i] == 4) {
      aantalVieren += 4;
    }
  }

  aantalVijfen = 0;
  for (let i = 0; i < 6; i++) {
    if (dices[i] == 5) {
      aantalVijfen += 5;
    }
  }

  aantalZessen = 0;
  for (let i = 0; i < 6; i++) {
    if (dices[i] == 6) {
      aantalZessen += 6;
    }
  }
  aantalTotaal =
    aantalEnen +
    aantalTween +
    aantalDrien +
    aantalVieren +
    aantalVijfen +
    aantalZessen;
  if (scoresBool.aces === false) {
    document.getElementById("total1").textContent = aantalEnen;
  }
  if (scoresBool.twos === false) {
    document.getElementById("total2").textContent = aantalTween;
  }
  if (scoresBool.threes === false) {
    document.getElementById("total3").textContent = aantalDrien;
  }
  if (scoresBool.fours === false) {
    document.getElementById("total4").textContent = aantalVieren;
  }
  if (scoresBool.fives === false) {
    document.getElementById("total5").textContent = aantalVijfen;
  }
  if (scoresBool.sixes === false) {
    document.getElementById("total6").textContent = aantalZessen;
  }

  document.getElementById("total13").textContent = "0";
  //Three of a kind
  threeOfAKInd = true;
  if (aantalEnen >= 3 && scoresBool.toak === false) {
    document.getElementById("total11").textContent = aantalTotaal;
  } else if (aantalTween >= 6 && scoresBool.toak === false) {
    document.getElementById("total11").textContent = aantalTotaal;
  } else if (aantalDrien >= 9 && scoresBool.toak === false) {
    document.getElementById("total11").textContent = aantalTotaal;
  } else if (aantalVieren >= 12 && scoresBool.toak === false) {
    document.getElementById("total11").textContent = aantalTotaal;
  } else if (aantalVijfen >= 15 && scoresBool.toak === false) {
    document.getElementById("total11").textContent = aantalTotaal;
  } else if (aantalZessen >= 18 && scoresBool.toak === false) {
    document.getElementById("total11").textContent = aantalTotaal;
  } else {
    if (scoresBool.toak === false) {
      document.getElementById("total11").textContent = "0";
      threeOfAKInd = false;
    }
  }

  //Four of a kind
  fourOfAKInd = true;
  if (scoresBool.foak === false) {
    if (aantalEnen >= 4) {
      document.getElementById("total12").textContent = aantalTotaal;
    } else if (aantalTween >= 8) {
      document.getElementById("total12").textContent = aantalTotaal;
    } else if (aantalDrien >= 12) {
      document.getElementById("total12").textContent = aantalTotaal;
    } else if (aantalVieren >= 16) {
      document.getElementById("total12").textContent = aantalTotaal;
    } else if (aantalVijfen >= 20) {
      document.getElementById("total12").textContent = aantalTotaal;
    } else if (aantalZessen >= 24) {
      document.getElementById("total12").textContent = aantalTotaal;
    } else {
      document.getElementById("total12").textContent = "0";
      fourOfAKInd = false;
    }
  }

  fullHouse = 0;
  fullHouseBool = true;
  if (scoresBool.fullHouse === false) {
    if (aantalEnen == 2) {
      fullHouse = 25;
      document.getElementById("total13").textContent = fullHouse;
      threeOfAKInd = true;
    } else if (aantalTween == 4) {
      fullHouse = 25;
      document.getElementById("total13").textContent = fullHouse;
      threeOfAKInd = true;
    } else if (aantalDrien == 6) {
      fullHouse = 25;
      document.getElementById("total13").textContent = fullHouse;
      threeOfAKInd = true;
    } else if (aantalVieren == 8) {
      fullHouse = 25;
      document.getElementById("total13").textContent = fullHouse;
      threeOfAKInd = true;
    } else if (aantalVijfen == 10) {
      fullHouse = 25;
      document.getElementById("total13").textContent = fullHouse;
      threeOfAKInd = true;
    } else if (aantalZessen == 12) {
      fullHouse = 25;
      document.getElementById("total13").textContent = fullHouse;
      threeOfAKInd = true;
    } else {
      fullHouse = 0;
      fullHouseBool = false;
    }
  }
  if (scoresBool.fullHouse === true) {
    document.getElementById("total13").textContent = "V";
    document.getElementById("total13s").className = "grid-item hover tekst3";
  }

  //smalllstraight
  let dices2 = Array.from(new Set(dices));
  dices2.sort();
  isSmallStraight = false;
  let small = 0;
  for (let i = 0; i < dices2.length - 3; i++) {
    if (
      (dices2[i] === 1 &&
        dices2[i + 1] === 2 &&
        dices2[i + 2] === 3 &&
        dices2[i + 3] === 4) ||
      (dices2[i] === 2 &&
        dices2[i + 1] === 3 &&
        dices2[i + 2] === 4 &&
        dices2[i + 3] === 5) ||
      (dices2[i] === 3 &&
        dices2[i + 1] === 4 &&
        dices2[i + 2] === 5 &&
        dices2[i + 3] === 6)
    ) {
      isSmallStraight = true;
      small = 30;
      break; // exit the loop since we have found a small straight
    } else {
      isSmallStraight = false;
    }
  }
  if (scoresBool.smallStraight === false) {
    document.getElementById("total14").textContent = small;
  }

  //largestraight
  let dices3 = [dices[0], dices[1], dices[2], dices[3], dices[4], dices[5]];
  dices3.sort();
  isLargeStraight = false;
  let large = 0;
  for (let i = 0; i < dices3.length; i++) {
    if (
      (dices3[i] === 1 &&
        dices3[i + 1] === 2 &&
        dices3[i + 2] === 3 &&
        dices3[i + 3] === 4 &&
        dices3[i + 4] === 5) ||
      (dices3[i] === 2 &&
        dices3[i + 1] === 3 &&
        dices3[i + 2] === 4 &&
        dices3[i + 3] === 5 &&
        dices3[i + 4] === 6) ||
      (dices3[i] === 3 &&
        dices3[i + 1] === 4 &&
        dices3[i + 2] === 5 &&
        dices3[i + 3] === 6 &&
        dices3[i + 4] === 7)
    ) {
      isLargeStraight = true;
      large = 40;
      break; // exit the loop since we have found a small straight
    } else {
      isLargeStraight = false;
    }
  }
  if (scoresBool.largeStraight === false) {
    document.getElementById("total15").textContent = large;
  }

  //topScore(Yahtzee)
  dices4 = [dices[0], dices[1], dices[2], dices[3], dices[4], dices[5]];
  let check = dices4[0];
  let punt = 0;
  yahtzee = 0;
  for (let i = 0; i < 6; i++) {
    if (dices4[i] === check) {
      punt++;
    }
    if (punt === 5) {
      yahtzee = 50;
      yahtzeeBool = true;
    } else {
      yahtzee = 0;
      yahtzeeBool = false;
    }
  }
  if (scoresBool.yahtzee === false) {
    document.getElementById("total16").textContent = yahtzee;
  }

  //chance total points
  if (scoresBool.chance === false) {
    document.getElementById("total17").textContent = aantalTotaal;
  }
}
