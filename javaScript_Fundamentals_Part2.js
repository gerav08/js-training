"use strict";

// Coding Challenge #1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
//const DolphinsAvg = calcAverage(44, 23, 71);
//const KoalasAvg = calcAverage(65, 54, 49);

const DolphinsAvg = calcAverage(85, 54, 41);
const KoalasAvg = calcAverage(23, 34, 27);

const checkWinner = function (DolphinsAvg, KoalasAvg) {

    if (DolphinsAvg >= 2 * KoalasAvg) { console.log(`Dolphins win (${DolphinsAvg} vs. ${KoalasAvg})`) }
    else if (KoalasAvg >= 2 * DolphinsAvg) { console.log(`Koalas win (${KoalasAvg} vs. ${DolphinsAvg})`) }
    else { console.log("No team wins..."); }
}

checkWinner(DolphinsAvg, KoalasAvg);