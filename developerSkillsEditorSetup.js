


function printForecast(arr){
    let temperatures = "";
    for(let i=0; i<arr.length; i++){
       temperatures += `... ${arr[i]} in ${i+1} days `;
    }
    console.log(temperatures);
}

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);