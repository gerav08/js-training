//Coding Challenge 1

let markMass=78;
let markHeight=1.69;
let johnMass=92;
let johnHeight =1.95;
let markHigherBMI;

console.log(markMass/(markHeight**2));
console.log(johnMass/(johnHeight**2));

if (markMass/(markHeight**2) > johnMass/(johnMass**2))
  markHigherBMI=true;
else
  markHigherBMI=false;

console.log(markHigherBMI)

 markMass = 95;
 markHeight=1.88;
 johnMass=85;
 johnHeight=1.76;

 console.log(markMass/(markHeight**2));
 console.log(johnMass/(johnMass**2));
 if (markMass/(markHeight**2)< johnMass/(johnHeight**2))
  markHigherBMI=false;
else
  markHigherBMI=true;

console.log(markHigherBMI);


// Coding Challenge #2

if(markHigherBMI==true)
 console.log(`Mark's BMI(${markMass/(markHeight**2)}) is higher than John's(${johnMass/(johnHeight**2)})!`);
else
    console.log(`John's BMI(${johnMass/(johnHeight**2)}) is higher than Mark's(${markMass/(markHeight**2)})`);


// Coding Challenge #3

let dolphinScoreAverage;
let koalaScoreAverage;

//Data 1

dolphinScoreAverage=(96+108+89)/3;
koalaScoreAverage=(88+91+110)/3;

if (dolphinScoreAverage>koalaScoreAverage)
    if(dolphinScoreAverage>=100)
        console.log("Dolphins are the winners!")
    else
        console.log("No one wins!")
else
    if(koalaScoreAverage>=100)
        console.log("Koalas are the winners!")
    else 
        console.log("No one wins!") 


// Data Bonus 1

dolphinScoreAverage=(97+112+101)/3;
koalaScoreAverage=(109+95+123)/3;

if (dolphinScoreAverage>koalaScoreAverage)
    if(dolphinScoreAverage>=100)
        console.log("Dolphins are the winners!")
    else
        console.log("No one wins!")
else
    if(koalaScoreAverage>=100)
        console.log("Koalas are the winners!")
    else 
        console.log("No one wins!") 


    // Data Bonus 2

dolphinScoreAverage=(97+112+101)/3;
koalaScoreAverage=(109+95+106)/3;

if (dolphinScoreAverage>koalaScoreAverage)
    if(dolphinScoreAverage>=100)
        console.log("Dolphins are the winners!")
    else
        console.log("No one wins!")
else
    if(koalaScoreAverage>=100)
        console.log("Koalas are the winners!")
    else 
        console.log("No one wins!") 


    // Coding Challenge #4

    const bill = 275;
    const tip = bill >=50 && bill<=300 ? Number(15/100)*Number(bill) : Number(20/100)*Number(bill);

   console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${Number(bill)+Number(tip)}`);