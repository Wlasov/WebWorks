function task1()
{
  let yourName = "Nikolay";
  alert(yourName);
}

function task2()
{
  let num1 = 3;
  let num2 = 5;
  let sum = num1 + num2;
  alert(sum);
}

function task3()
{
  let _num1 = 16;
  let _num2 = 2;
  let quotient = _num1 / _num2;
  let result = confirm(`Результат деления 16 на 2: ${quotient}`);
}

function task4()
{
  let age = 25;
  console.log(age);
}

function task5()
{
  let word = prompt("Введите любое слово:");
  let wordLength = word.length;
  console.log(`Длина слова: ${wordLength}`);
  console.log(`Первые две буквы слова: ${word.substring(0, 2)}`);
}

function task6()
{
  let momAge = parseInt(prompt("Введите возраст матери:"));
  let dadAge = parseInt(prompt("Введите возраст отца:"));
  
  if (momAge > dadAge) {
    console.log("Мать старше");
  } else if (dadAge > momAge) {
    console.log("Отец старше");
  } else {
    console.log("Они имеют одинаковый возраст");
  }
}

function task7()
{
  let childAge = parseInt(prompt("Сколько лет ребенку?"));
  if (childAge >= 12) {
    console.log("Вперед за билетами!");
  } else {
    console.log("Сиди дома!");
}
}

function task8()
{
  let number = parseInt(prompt("Введите число:"));
  let square = number * number;
  alert(`Квадрат числа ${number} равен ${square}`);
}

function task9()
{
  let userName = prompt("Введите ваше имя:");
  alert(`Доброго здоровечка, ${userName}`);
}

function task10()
{
  let number = parseInt(prompt("Введите число:"));
  if (number % 4 === 0) {
    alert("Выражение истинно");
  } else {
    alert("Выражение ложно");
  }
}

function task11()
{
  let perimeter = 2 * (a + b);
  alert(`Периметр прямоугольника равен ${perimeter}`);
}

function task12()
{
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

function task13()
{
  for (let i = 5; i <= 50; i += 5) {
    console.log(i);
  }
}

function task14()
{
  let i = 1;
  while (i <= 10) {
    console.log(i);
    i++;
  }
}

function task15()
{
  let i = 5;
  while (i <= 50) {
    console.log(i);
    i += 5;
  }
}

function task16()
{
  let i = 5;
  do {
    console.log("Нас не задушишь, не убьешь");
  } while (i < 1);
}

function task17()
{
  let order = prompt("Выберите, что вы хотите заказать: яблоко, апельсин, сок, пиво");

  switch (order) {
    case "яблоко":
      console.log(`Ваш выбор яблоко - просто идеален`);
      break;
    case "апельсин":
      console.log(`Ваш выбор апельсин - просто идеален`);
      break;
    case "сок":
      console.log(`Ваш выбор сок - просто идеален`);
      break;
    case "пиво":
      console.log(`Ваш выбор пиво - просто идеален`);
      break;
    default:
      console.log("Пошел прочь!"); 
  }
}

function task18()
{
  let myArray = ["apple", "banana", "orange", "grape", "pear"];
  console.log(myArray[2]);
}

function task19()
{
  let myArray = ["apple", "banana", "orange", "grape", "pear"];
  console.log(myArray.length);
}

function task20()
{
  let myArray = ["apple", "banana", "orange", "grape", "pear"];
  for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
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
        console.log(myArray[i][j]);
      }
    } else {
      console.log(myArray[i]);
    }
  }
}

function task22()
{
  let phoneBook = {
    "ФИО": "Иванов Иван Иванович",
    "телефонный номер": "8-900-123-45-67"
  };
  
  console.log(phoneBook["ФИО"]);
  console.log(phoneBook["телефонный номер"]);
}

function task23()
{
  let person = new Object();
  person.name = "Иван";
  person.surname = "Иванов";
  person.age = 30;
  person.city = "Москва";
  person.country = "Россия";
  
  for (let prop in person) {
    console.log(prop + ": " + person[prop]);
  }
}