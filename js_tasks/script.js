function task1()
{
  let yourName = "Nikolay";
  alert(`${yourName}, length = ${yourName.length}`);
}

function task2()
{
  let num1 = 3;
  let num2 = 5;
  let sum = num1 + num2;
  alert(`${num1} + ${num2} = ${sum}`);
}

function task3()
{
  let num1 = 16;
  let num2 = 2;
  let result = num1 / num2;
  confirm(`${num1} / ${num2} = ${result}`);
}

function task4()
{
  let age = 25;
  console.log(`task #4: ${age}`);
  alert(`console logged`);
}

function task5()
{
  let word = prompt("Type any word:");
  console.log(`Task #5: ${word} length is: ${word.length}`);
  console.log(`Task #5: ${word} substring(0,2) is: ${word.substring(0, 2)}`);
}

function task6()
{
  let momAge = parseInt(prompt("Type mom age:"));
  let dadAge = parseInt(prompt("Type dad age:"));
  
  if (momAge > dadAge) {
    alert("Mom is older");
  } else if (dadAge > momAge) {
    alert("Dad is older");
  } else {
    alert("They are the same age");
  }
}

function task7()
{
  let childAge = parseInt(prompt("How old is kid?"));
  if (childAge >= 12) {
    alert("Go ahead and get your tickets!");
  } else {
    alert("Сиди дома!");
}
}

function task8()
{
  function square(number)
  {
    return number * number;
  }

  let number = parseInt(prompt("Type any number:"));
  let s = square(number);
  alert(`Square of ${number} is ${s}`);
}

function task9()
{
  function greating(name)
  {
    alert(`Greating, ${name}!`);
  }

  greating("Nikolay");
}

function task10()
{
  function divFour(number)
  {
    return number % 4;
  }

  let number = parseInt(prompt("Type any number:"));
  if (divFour(number) === 0) {
    alert("True");
  } else {
    alert("False");
  }
}

function task11()
{
  function perimeter(length, width)
  {
    return 2 * (length + width);
  }

  let length = parseFloat(prompt("Type length:"));
  let width = parseFloat(prompt("Type with:"));

  alert(`Perimeter is: ${perimeter(length, width)}`);
}

function task12()
{
  for (let i = 1; i <= 10; i++) {
    console.log(`Task #12: ${i}`);
  }
}

function task13()
{
  for (let i = 5; i <= 50; i += 5) {
    console.log(`Task #13: ${i}`);
  }
}

function task14()
{
  let i = 1;
  while (i <= 10) {
    console.log(`Task #14: ${i}`);
    i++;
  }
}

function task15()
{
  let i = 5;
  while (i <= 50) {
    console.log(`Task #15: ${i}`);
    i += 5;
  }
}

function task16()
{
  let i = 5;
  do {
    console.log("You won't strangle us, you won't kill us");
  } while (i < 1);
}

function task17()
{
  let order = prompt("Choose what you want to order: apple, orange, juice, beer");

  switch (order) {
    case "apple":
      console.log(`Task #17: Your choice of apple is simply perfect`);
      break;
    case "orange":
      console.log(`Task #17: Your choice of orange is simply perfect`);
      break;
    case "juice":
      console.log(`Task #17: Your choice of juice is simply perfect`);
      break;
    case "beer":
      console.log(`Task #17: Your choice of beer is simply perfect`);
      break;
    default:
      console.log("Task #17: Go away!"); 
  }
}

function task18()
{
  let myArray = ["apple", "banana", "orange", "grape", "pear"];
  console.log(`Task #18: ${myArray[2]}`);
}

function task19()
{
  let myArray = ["apple", "banana", "orange", "grape", "pear"];
  console.log(`Task #19: ${myArray.length}`);
}

function task20()
{
  let myArray = ["apple", "banana", "orange", "grape", "pear"];
  for (let i = 0; i < myArray.length; i++) {
    console.log(`Task #20: ${myArray[i]}`);
  }
}

function task21()
{
  let myArray = new Array();
  myArray[0] = "apple";
  myArray[1] = "banana";
  myArray[2] = ["orange", "grape"];
  myArray[3] = "pear";
  
  for (let i = 0; i < myArray.length; i++) {
    if (Array.isArray(myArray[i])) {
      for (let j = 0; j < myArray[i].length; j++) {
        console.log(`Task 21: ${myArray[i][j]}`);
      }
    } else {
      console.log(`Task 21: ${myArray[i]}`);
    }
  }
}

function task22()
{
  let phoneBook = {
    "FullName": "Nikolay Wlasov",
    "PhoneNumber": "8-900-123-45-67"
  };
  
  console.log(`Task #22: Full name is: ${phoneBook["FullName"]}`);
  console.log(`Task #22: Phone number is: ${phoneBook["PhoneNumber"]}`);
}

function task23()
{
  let person = new Object();
  person.name = "Nikolay";
  person.surname = "Wlasov";
  person.age = 21;
  person.city = "Kolomna";
  person.country = "Russia";
  
  for (let prop in person) {
    console.log(`Task #23: ${prop}`);
  }
}

function task24()
{
  let person = new Object();
  person.name = "Nikolay";
  person.surname = "Wlasov";
  person.age = 21;
  person.city = "Kolomna";
  person.country = "Russia";
  
  for (let prop in person) {
    console.log(`Task #24: ${person[prop]}`);
  }
}