console.log("connected...")
const numbers = [1,12,34,49,45,76,87,38,94,10,11,12,3,75,6,8,29,13,90,99];

let numberOfStudents = numbers.length;
for( let i = 0; i < numbers.length; i++){
    document.getElementById('output').innerHTML += (numbers [i]+ '<br>');
};
document.getElementById('output').innerHTML += `Total Students: ${numberOfStudents}<br>`;

/* to display lowest score first we must make a variable that compares each score 
with variable highest and lowest.*/ 
let highest = numbers[0];
let lowest = numbers[0];
//for ( let i = 0; i < numbers.length; i++){
    for ( let j = 0; j < numbers.length; j++) {
        if ( numbers[j] < lowest ){
            lowest = numbers[j];
        }
        if ( numbers[j] > highest ){
            highest = numbers[j];
    }
}
//}
document.getElementById('output').innerHTML += `Lowest Score: ${lowest}<br>`;
document.getElementById('output').innerHTML += `Highest Score: ${highest}<br>`;