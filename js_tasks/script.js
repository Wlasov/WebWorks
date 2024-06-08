//#1
let yourName = "Nikolay";
console.log(yourName.length); 

//#2
let num1 = 3;
let num2 = 5;
let sum = num1 + num2;

//#3
let _num1 = 16;
let _num2 = 2;
let quotient = _num1 / _num2;
let result = confirm(`Результат деления 16 на 2: ${quotient}`);

//#4
let age = 25;
console.log(age);

//#5
let word = prompt("Введите любое слово:");
let wordLength = word.length;
console.log(`Длина слова: ${wordLength}`);
console.log(`Первые две буквы слова: ${word.substring(0, 2)}`);

//#6
let momAge = parseInt(prompt("Введите возраст матери:"));
let dadAge = parseInt(prompt("Введите возраст отца:"));

if (momAge > dadAge) {
  console.log("Мать старше");
} else if (dadAge > momAge) {
  console.log("Отец старше");
} else {
  console.log("Они имеют одинаковый возраст");
}

//#7
let childAge = parseInt(prompt("Сколько лет ребенку?"));
if (childAge >= 12) {
  console.log("Вперед за билетами!");
} else {
  console.log("Сиди дома!");
}

//#8
function squareNumber() {
    let number = parseInt(prompt("Введите число:"));
    let square = number * number;
    alert(`Квадрат числа ${number} равен ${square}`);
  }

//#9
function greetUser() {
    let userName = prompt("Введите ваше имя:");
    alert(`Доброго здоровечка, ${userName}`);
  }

//#10
function checkRemainder() {
    let number = parseInt(prompt("Введите число:"));
    if (number % 4 === 0) {
      alert("Выражение истинно");
    } else {
      alert("Выражение ложно");
    }
  }

//#11
function calculatePerimeter(a, b) {
    let perimeter = 2 * (a + b);
    alert(`Периметр прямоугольника равен ${perimeter}`);
  }

//#12
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

//#13
for (let i = 5; i <= 50; i += 5) {
    console.log(i);
  }

//#14
let i1 = 1;
while (i1 <= 10) {
  console.log(i1);
  i1++;
}

//#15
let i2 = 5;
while (i2 <= 50) {
  console.log(i2);
  i2 += 5;
}

//#16
let i3 = 5;
do {
  console.log("Нас не задушишь, не убьешь");
} while (i3 < 1);

//#17
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

//#18
let myArray = ["apple", "banana", "orange", "grape", "pear"];
console.log(myArray[2]);

//#19
console.log(myArray.length);

//#20
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
  }

//#21
let myArray2 = new Array();
myArray2[0] = "apple";
myArray2[1] = "banana";
myArray2[2] = ["orange", "grape"];
myArray2[3] = "pear";

for (let i = 0; i < myArray2.length; i++) {
  if (Array.isArray(myArray2[i])) {
    for (let j = 0; j < myArray2[i].length; j++) {
      console.log(myArray2[i][j]);
    }
  } else {
    console.log(myArray2[i]);
  }
}

//#22
let phoneBook = {
    "ФИО": "Иванов Иван Иванович",
    "телефонный номер": "8-900-123-45-67"
  };
  
  console.log(phoneBook["ФИО"]);
  console.log(phoneBook["телефонный номер"]);

//#23
let person = new Object();
person.name = "Иван";
person.surname = "Иванов";
person.age = 30;
person.city = "Москва";
person.country = "Россия";

for (let prop in person) {
  console.log(prop + ": " + person[prop]);
}