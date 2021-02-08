console.log('here we go...')

/*
prompt user for question
check for ? at end of input
if ? respond with answer
else ask them to ask a question
*/

const answers =[
    'try again',
    'No way!',
    'Absolutely',
    '42',
    'only if the sun is shining',
    'you have to believe'
]
let question = prompt('Enter a yes/no question... do not forget proper puncuation');
let answer ='';
let randomNum = Math.floor((Math.random() * 6) + 1);

if (question.endsWith('?'))   {
 //   if (question.substr(-question.length) == '?')   {

    alert(answers[randomNum]);
} else  {
    document.getElementById('output').innerHTML = 'You must enter a yes/no question... do not forget proper puncuation <br> refresh your page to try again'
//    prompt('You must enter a yes/no ... do not forget proper puncuation');   
}
