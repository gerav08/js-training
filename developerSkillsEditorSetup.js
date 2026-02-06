

// Coding challenge #1
function printForecast(arr){
    let temperatures = "";
    for(let i=0; i<arr.length; i++){
       temperatures += `... ${arr[i]} in ${i+1} days `;
    }
    console.log(temperatures);
}

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);

// Coding challenge #2

function hoursWorked(dailyWorkHours){
  let totalHoursWorked=0;
  let dayWithMoreHoursWorked = dailyWorkHours[0];
  let indiceDelDia = 0;
  let numberOfDaysWorked = 0;

  for(let i=0; i<dailyWorkHours.length; i++){
    totalHoursWorked+=dailyWorkHours[i];
     
    if(dailyWorkHours[i]>dayWithMoreHoursWorked){
        dayWithMoreHoursWorked = dailyWorkHours[i];
        indiceDelDia = i+1;
    }

    if(dailyWorkHours[i]>0){
        numberOfDaysWorked++;
    }
  }
   const averageDailyHours = totalHoursWorked/dailyWorkHours.length;

   console.log(`Total hours worked: ${totalHoursWorked}`);
   console.log(`Average daily hours: ${averageDailyHours}`);
   console.log(`The day with more hours worked: ${indiceDelDia}`);
   console.log(`Number of days worked: ${numberOfDaysWorked}`);
   if(totalHoursWorked>=35){
    console.log("The week was full-time");
   }else {console.log("The week was not full-time");}
}

hoursWorked([7.5, 8, 6.5, 0, 8.5, 4, 0]);