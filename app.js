function kelvinToFahrenheit(kelvin) {
let celsius = kelvin - 273;
let fahrenheit = Math.floor(celsius * (9/5) + 32);
return fahrenheit;
}
console.log(kelvinToFahrenheit(293));


function humanAgeInDogYears(myAge) {
let earlyYears = 2 * 10.5;
let laterYears = (myAge - 2) * 4;
let myAgeInDogYears = earlyYears + laterYears;
return myAgeInDogYears;
}
console.log(humanAgeInDogYears(32));


function answerMyQuestion(userName, userQuestion) { 
let randomNumber = Math.floor(Math.random()*8);
switch (randomNumber) {
  case 0: 
eightBall = 'It is certain';
break;
case 1:
eightBall = 'It is decidedly so';
break;
case 2:
eightBall = 'Reply hazy try again';
break;
case 3:
eightBall = 'Cannot predict now';
break;
case 4:
eightBall = 'Do not count on it';
break ;
case 5:
eightBall = 'My sources say no';
break;
case 6:
eightBall = 'Outlook not so good';
break;
case 7:
eightBall = 'Signs points to yes';
break;
}
return eightBall ;
}

console.log(answerMyQuestion('ANA', 'Are you real?'));

function raceTime(runnerAge, earlyRegistration) {
let raceNumber = Math.floor(Math.random() * 1000 + 1);
if (earlyRegistration) {raceNumber += 1000;}

if(runnerAge >= 18 && earlyRegistration) {
console.log(`Your race starts at 9:30am and yout race numaber is ${raceNumber}`); 
}else if(runnerAge >= 18 && !earlyRegistration) {
console.log(`Your race starts at 11:00am and your race number is ${raceNumber}`);
}else if(runnerAge < 18 && earlyRegistration) {
console.log(`Your race starts at 12:30pm and your race number is ${raceNumber}`);
}else{
console.log('Please see the desk registration for Information!');
}
}
raceTime(18,true); 










