//Task 1
let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");

alert( a + b );

//Task 2
alert( Math.round(6.35 * 10) / 10); // 6.35 -> 63.5 -> 64(rounded) -> 6.4

//Task 3
//Task 4
let i = 0;
while (i != 10) {
  i += 0.2;
} // i никогда не станет равным 10, "проскочит" 10 при прибавлении

//Task 5
function random(min, max) {
    return min + Math.random() * (max - min);
  }
  
alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );

//Task 6
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
  
alert( randomInteger(1, 3) );