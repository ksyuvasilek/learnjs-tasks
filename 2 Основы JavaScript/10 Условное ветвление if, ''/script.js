//Task 1
if ("0") {
  alert('Привет');
} // Привет

//Task 2
let name = prompt('Какое "официальное" название JavaScript?');
if (name == 'ECMAScript') {
  alert('Верно!');
} else {
  alert('Не знаете? ECMAScript!');
}

//Task 3
let value = prompt('Введите число:');

if (value > 0) {
  alert(1);
} else if (value < 0) {
  alert(-1);
} else {
  alert(0);
}

//Task 4
let number = prompt('Введите число:');

if (number > 0) {
  alert(1);
} else if (number < 0) {
  alert(-1);
} else {
  alert(0);
}

//Task 5
let result = (a + b < 4) ? 'Мало' : 'Много';
console.log(result);

//Task 6
let login = ''
let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';

console.log(message);