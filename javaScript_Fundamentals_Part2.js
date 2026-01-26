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

// Coding Challenge #2

const bills = [125, 30, 44];
const tips = [];

function calcTip(bills){
    
    for(let i=0;i<bills.length;i++){
     tips.push((bills[i]>=50 && bills[i]<=300) ? bills[i]*15/100 : bills[i]*20/100); 
    }

    return tips;
}

calcTip(bills);

const total = [];

for(let i=0;i<bills.length;i++){
    total.push(bills[i]+tips[i]);
}

console.log(bills, tips, total);