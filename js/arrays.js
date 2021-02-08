console.log("connected...")
const numbers = [1,12,34,49,45,76,87,38,94,10,11,12,3,75,6,8,29,13,90,99];
numbers.sort((a, b) => a - b);
console.log(numbers);
/*for ( let j = 0; j < numbers.length; j++) {
document.getElementById('output').innerHTML += `Median Score: ${numbers[j]}<br>`;
}    */


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

let total = 0
for ( let j = 0; j < numbers.length; j++) {
        total += numbers[j];
    }
let average = total / numbers.length;
document.getElementById('output').innerHTML += `Average Score: ${average}<br>`;
/*let temp = numbers
for ( let i = 0; i < numbers.length; i++){
    for ( let j = 0; j < numbers.length; j++) {
        if ( numbers[i] < numbers[j] ){
            temp [i] = numbers[j];
        }
    }
    //document.getElementById('output').innerHTML += `Median Score: ${temp [i]}<br>`;
}   */
let median = 0 
if ( numbers.length % 2 ){
    median = numbers [(numbers.length / 2)]
}
else {
    median = (numbers [numbers.length / 2 ]+ numbers [numbers.length / 2 - 1]) / 2
}
document.getElementById('output').innerHTML += `Median Score: ${median}<br>`;

let above70 = [0]
for ( let i = 0; i < numbers.length; i++ ) {
    if (numbers[i] > 70) {
        above70.push(numbers[i])
    }
}
document.getElementById('output').innerHTML += `Number of Scores Above 70: ${above70.length}<br>`;