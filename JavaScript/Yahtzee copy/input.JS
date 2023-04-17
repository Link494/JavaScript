let scores = {
  /*0*/ aces: 0,
  /*0*/ twos: 0,
  /*0*/ threes: 0,
  /*0*/ fours: 0,
  /*0*/ fives: 0,
  /*0*/ sixes: 0,
  /*0*/ totalPoints: 0,
  /*0*/ extraBonus: 0,
  /*0*/ total: 0,
  //part2
  toak: 0,
  foak: 0,
  fullHouse: 0,
  smallStraight: 0,
  largeStraight: 0,
  yahtzee: 0,
  chance: 0,
  totalPoints2: 0,
  allTotal: 0,
};
let scoresBool = {
  /*0*/ aces: false,
  /*0*/ twos: false,
  /*0*/ threes: false,
  /*0*/ fours: false,
  /*0*/ fives: false,
  /*0*/ sixes: false,
  /*0*/ totalPoints: false,
  /*0*/ extraBonus: false,
  /*0*/ total: false,
  //part2
  toak: false,
  foak: false,
  fullHouse: false,
  smallStraight: false,
  largeStraight: false,
  yahtzee: false,
  chance: false,
};
let totalUitrekenen = 0;
let totalUitrekenen2 = 0;
function next() {
  eenVast = false;
  tweeVast = false;
  drieVast = false;
  vierVast = false;
  vijfVast = false;
  document.getElementById("dice1").style.border = "5px dashed white";
  document.getElementById("dice2").style.border = "5px dashed white";
  document.getElementById("dice3").style.border = "5px dashed white";
  document.getElementById("dice4").style.border = "5px dashed white";
  document.getElementById("dice5").style.border = "5px dashed white";
  klik = false;
  dices[0] = 0;
  dices[1] = 0;
  dices[2] = 0;
  dices[3] = 0;
  dices[4] = 0;
  console.log(dices);
  document.getElementById("dice1").src = "img/vraagteken.png";
  document.getElementById("dice2").src = "img/vraagteken.png";
  document.getElementById("dice3").src = "img/vraagteken.png";
  document.getElementById("dice4").src = "img/vraagteken.png";
  document.getElementById("dice5").src = "img/vraagteken.png";
  reRoll = 0;
  reRollBaar = true;
  rollCount = 2;

  for (let i = 0; i < 20; i++) {
    let aantal = i.toString();
    let element = document.getElementById("total" + aantal);
    if (element) {
      element.textContent = "";
    }
  }
  if (totalUitrekenen === 6) {
    scores.totalPoints =
      scores.aces +
      scores.twos +
      scores.threes +
      scores.fours +
      scores.fives +
      scores.sixes;
    document.getElementById("Total7").textContent = scores.totalPoints;

    if (scores.totalPoints >= 63) {
      document.getElementById("total8").textContent = "V";
      document.getElementById("total8s").className = "grid-item hover tekst";
      scores.extraBonus = 35;
      document.getElementById("Total8").textContent = scores.extraBonus;
    } else {
      document.getElementById("total8").textContent = "X";
      document.getElementById("total8s").className = "grid-item hover tekst2";
      scores.extraBonus = 0;
      document.getElementById("Total8").textContent = scores.extraBonus;
    }
    document.getElementById("total19").textContent = "V";
    document.getElementById("total19s").className = "grid-item hover tekst";

    scores.total = scores.totalPoints + scores.extraBonus;
    document.getElementById("Total9").textContent = scores.total;
    document.getElementById("Total19").textContent = scores.total;
    scoresBool.total = true;
  }
  if (totalUitrekenen2 === 7) {
    scores.totalPoints2 =
      scores.toak +
      scores.foak +
      scores.fullHouse +
      scores.smallStraight +
      scores.largeStraight +
      scores.yahtzee +
      scores.chance;
    document.getElementById("total18").textContent = "V";
    document.getElementById("total18s").className = "grid-item hover tekst";
    document.getElementById("Total18").textContent = scores.totalPoints2;
  }
  gameStarted = false;

  lichtBlauw();
  end();
}

//Aces input
document.getElementById("total1s").addEventListener("click", function () {
  if (klik === true) {
    if (scoresBool.aces === false) {
      scores.aces = aantalEnen;
      document.getElementById("Total1").textContent = scores.aces;
      scoresBool.aces = true;
      totalUitrekenen++;

      next();
    }
  }
});
//twos input
document.getElementById("total2s").addEventListener("click", function () {
  if (klik === true) {
    if (scoresBool.twos === false) {
      scores.twos = aantalTween;
      document.getElementById("Total2").textContent = scores.twos;
      scoresBool.twos = true;
      totalUitrekenen++;

      next();
    }
  }
});
//threes input
document.getElementById("total3s").addEventListener("click", function () {
  if (klik === true) {
    if (scoresBool.threes === false) {
      scores.threes = aantalDrien;
      document.getElementById("Total3").textContent = scores.threes;
      scoresBool.threes = true;
      totalUitrekenen++;

      next();
    }
  }
});
//fours input
document.getElementById("total4s").addEventListener("click", function () {
  if (klik === true) {
    if (scoresBool.fours === false) {
      scores.fours = aantalVieren;
      document.getElementById("Total4").textContent = scores.fours;
      scoresBool.fours = true;
      totalUitrekenen++;

      next();
    }
  }
});
//fives input
document.getElementById("total5s").addEventListener("click", function () {
  if (klik === true) {
    if (scoresBool.fives === false) {
      scores.fives = aantalVijfen;
      document.getElementById("Total5").textContent = scores.fives;
      scoresBool.fives = true;
      totalUitrekenen++;

      next();
    }
  }
});
//sixes input
document.getElementById("total6s").addEventListener("click", function () {
  if (klik === true) {
    if (scoresBool.sixes === false) {
      scores.sixes = aantalZessen;
      document.getElementById("Total6").textContent = scores.sixes;
      scoresBool.sixes = true;
      totalUitrekenen++;

      next();
    }
  }
});
//part 2
//three of a kind input
document.getElementById("total11s").addEventListener("click", function () {
  if (klik === true) {
    if (scoresBool.toak === false) {
      if (threeOfAKInd === true) {
        scores.toak = aantalTotaal;
      } else {
        scores.toak = 0;
      }
      document.getElementById("Total11").textContent = scores.toak;
      scoresBool.toak = true;
      totalUitrekenen2++;

      next();
    }
  }
});
//four of a kind input
document.getElementById("total12s").addEventListener("click", function () {
  if (klik === true) {
    if (scoresBool.foak === false) {
      if (fourOfAKInd === true) {
        scores.foak = aantalTotaal;
      } else {
        scores.foak = 0;
      }
      document.getElementById("Total12").textContent = scores.foak;
      scoresBool.foak = true;
      totalUitrekenen2++;

      next();
    }
  }
});
//full house input
document.getElementById("total13s").addEventListener("click", function () {
  if (klik === true) {
    if (scoresBool.fullHouse === false) {
      if (fullHouseBool === true) {
        scores.fullHouse = 25;
      } else {
        scores.fullHouse = 0;
      }
      document.getElementById("Total13").textContent = scores.fullHouse;
      scoresBool.fullHouse = true;
      totalUitrekenen2++;

      next();
    }
  }
});
//small straight input
document.getElementById("total14s").addEventListener("click", function () {
  if (klik === true) {
    if (scoresBool.smallStraight === false) {
      if (isSmallStraight === true) {
        scores.smallStraight = 30;
      } else {
        scores.smallStraight = 0;
      }
      document.getElementById("Total14").textContent = scores.smallStraight;
      scoresBool.smallStraight = true;
      totalUitrekenen2++;

      next();
    }
  }
});
//large straight input
document.getElementById("total15s").addEventListener("click", function () {
  if (klik === true) {
    if (scoresBool.largeStraight === false) {
      if (isLargeStraight === true) {
        scores.largeStraight = 40;
      } else {
        scores.largeStraight = 0;
      }
      document.getElementById("Total15").textContent = scores.largeStraight;
      scoresBool.largeStraight = true;
      totalUitrekenen2++;

      next();
    }
  }
});
//yahtzee input
document.getElementById("total16s").addEventListener("click", function () {
  if (klik === true) {
    if (scoresBool.yahtzee === false) {
      if (yahtzeeBool === true) {
        scores.yahtzee = 50;
      } else {
        scores.yahtzee = 0;
      }
      document.getElementById("Total16").textContent = scores.yahtzee;
      scoresBool.yahtzee = true;
      totalUitrekenen2++;

      next();
    }
  }
});
//chance input
document.getElementById("total17s").addEventListener("click", function () {
  if (klik === true) {
    if (scoresBool.chance === false) {
      scores.chance = aantalTotaal;

      document.getElementById("Total17").textContent = scores.chance;
      scoresBool.chance = true;
      totalUitrekenen2++;

      next();
    }
  }
});

//vakjes verkleuren na input
function lichtBlauw() {
  if (scoresBool.aces === true) {
    document.getElementById("total1").textContent = "V";
    document.getElementById("total1s").className = " grid-item hover tekst3";
  }
  if (scoresBool.twos === true) {
    document.getElementById("total2").textContent = "V";
    document.getElementById("total2s").className = "grid-item hover tekst3";
  }
  if (scoresBool.threes === true) {
    document.getElementById("total3").textContent = "V";
    document.getElementById("total3s").className = "grid-item hover tekst3";
  }
  if (scoresBool.fours === true) {
    document.getElementById("total4").textContent = "V";
    document.getElementById("total4s").className = "grid-item hover tekst3";
  }
  if (scoresBool.fives === true) {
    document.getElementById("total5").textContent = "V";
    document.getElementById("total5s").className = "grid-item hover tekst3";
  }
  if (scoresBool.sixes === true) {
    document.getElementById("total6").textContent = "V";
    document.getElementById("total6s").className = "grid-item hover tekst3";
  }
  if (scoresBool.total === true) {
    document.getElementById("total9").textContent = "V";
    document.getElementById("total9s").className = "grid-item hover tekst3";
  }
  if (scoresBool.toak === true) {
    document.getElementById("total11").textContent = "V";
    document.getElementById("total11s").className = "grid-item hover tekst3";
  }
  if (scoresBool.foak === true) {
    document.getElementById("total12").textContent = "V";
    document.getElementById("total12s").className = "grid-item hover tekst3";
  }
  if (scoresBool.fullHouse === true) {
    document.getElementById("total13").textContent = "V";
    document.getElementById("total13s").className = "grid-item hover tekst3";
  }
  if (scoresBool.smallStraight === true) {
    document.getElementById("total14").textContent = "V";
    document.getElementById("total14s").className = "grid-item hover tekst3";
  }
  if (scoresBool.largeStraight === true) {
    document.getElementById("total15").textContent = "V";
    document.getElementById("total15s").className = "grid-item hover tekst3";
  }
  if (scoresBool.yahtzee === true) {
    document.getElementById("total16").textContent = "V";
    document.getElementById("total16s").className = "grid-item hover tekst3";
  }
  if (scoresBool.chance === true) {
    document.getElementById("total17").textContent = "V";
    document.getElementById("total17s").className = "grid-item hover tekst3";
  }
}

function end() {
  if (totalUitrekenen === 6 && totalUitrekenen2 === 7) {
    scores.allTotal = scores.totalPoints + scores.totalPoints2;
    document.getElementById("Total20").textContent = scores.allTotal;
    document.getElementById("total20").textContent = "V";
    document.getElementById("total20s").className = "grid-item hover tekst4";
    reRollBaar = false;
  }
}
