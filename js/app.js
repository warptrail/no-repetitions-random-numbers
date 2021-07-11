const greeting = 'Greetings traveler. Welcome to the Web.';
function displayMessage(message) {
  console.log(message);
}

displayMessage(greeting);

let btn = document.querySelector('button');
let output = document.querySelector('h3');
let list = document.querySelector('ul');

function getRandomNumber(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;
  return result;
}

function createArrayOfNumbers(start, end) {
  let myArray = [];

  for (let i = start; i <= end; i++) {
    myArray.push(i);
  }

  return myArray;
}

let numbersArray = createArrayOfNumbers(1, 20);
let newArray = [];

btn.addEventListener('click', () => {
  if (numbersArray.length == 0) {
    output.innerText = 'No More Random Numbers';
    output.style.color = 'yellowgreen';
    setTimeout(function () {
      output.style.color = 'black';
    }, 100);
    return;
  }

  let randomIndex = getRandomNumber(0, numbersArray.length - 1);
  let randomNumber = numbersArray[randomIndex];
  let randomNumberLi = document.createElement('li');
  let randomNumberTextNode = document.createTextNode(randomNumber);
  randomNumberLi.appendChild(randomNumberTextNode);
  list.appendChild(randomNumberLi);
  numbersArray.splice(randomIndex, 1);
  newArray.push(randomNumber);
  console.log(newArray);
});

console.log(numbersArray);
