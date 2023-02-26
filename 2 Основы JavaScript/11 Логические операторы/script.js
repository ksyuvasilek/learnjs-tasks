alert( null || 2 || undefined ); // 2
alert( alert(1) || 2 || alert(3) ); // 1, потом 2
alert( 1 && null && 2 ); // null
alert( alert(1) && alert(2) ); // 1, потом undefined
alert( null || 2 && 3 || 4 ); // 3

//Task 6
let age = 0;

if (age >= 14 && age <= 90) {
    console.log(true)
} else {
    console.log(false)
}

//Task 7
let age = 0;

if (age < 14 || age > 90) {
    console.log(true)
} else {
    console.log(false)
}

let age = 0;

if (!(age >= 14 && age <= 90)) {
    console.log(true)
} else {
    console.log(false)
}

//Task 8
if (-1 || 0) alert( 'first' ); // -1 (true) => выполнится
if (-1 && 0) alert( 'second' ); // 0
if (null || -1 && 1) alert( 'third' ); // 1 (true) => выполнится

//Task 9
let name = prompt('Кто там?');

if (name === 'Админ') {
    
    let psw = prompt('Пароль');
    
    if (psw === 'Я главный'){
        console.log('Здравствуйте!')
    } else if (psw === null || psw === '') {
        console.log('Отменено')
    } else {
        console.log('Неверный пароль!')
    }
}

if (name === null || name === '') {
    console.log('Отменено')
} else {
    console.log('Я вас не знаю')
}