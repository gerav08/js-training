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

// Coding Challenge #3

const object1 = {"fullName" : "Mark Miller", mass : 78, height : 1.69, 
    BMI : function calcBMI(){ return this.mass/(this.height*this.height);}};

const object2 = {"fullName" : "John Smith", mass : 92, height : 1.95,
     BMI : function calcBMI(){return this.mass/(this.height*this.height);}};

if(object1.BMI()>object2.BMI()){
    console.log(`${object1.fullName}'s BMI (${object1.BMI()}) is higher than ${object2.fullName}'s (${object2.BMI()})`);
}else{
    console.log(`${object2.fullName}'s BMI (${object2.BMI()}) is higher than ${object1.fullName}'s (${object1.BMI()})`);
}


// Coding Challenge #4

const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2 = [];
const totals = [];

function calcTip2(bills2){
    
    for(let i=0;i<bills2.length;i++){
     tips2.push((bills2[i]>=50 && bills2[i]<=300) ? bills2[i]*15/100 : bills2[i]*20/100); 
     totals.push(bills2[i]+tips2[i]);
    }

    return tips2, totals;
}

function calcAverage2(arr){
  let sum = 0;

  for(let i=0;i<arr.length;i++){
     sum+=arr[i];
  }

  return sum/arr.length;
}

calcTip2(bills2);
console.log(calcAverage2(totals));