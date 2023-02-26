//Task 1
let i = 3;

while (i) {
  alert( i-- );
} // 1

//Task 2
let i = 0;
while (++i < 5) alert( i ); // от 1 до 4

let i = 0;
while (i++ < 5) alert( i ); // от 1 до 5

//Task 3
for (let i = 0; i < 5; i++) alert( i ); // от 0 до 4
for (let i = 0; i < 5; ++i) alert( i ); // от 0 до 4

//Task 4
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
}

//Task 5
let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

//Task 6
while (true) {
    let number = prompt ('Введите число больше 100?', 0)
    if (number > 100) break;
    if (number === null) break;
}

//Task 7
let n = prompt('Введите  число', '')
out: for (let a = 2; a <= n; a++) {
        for (let b = 2; b < a; b++) {
            if (a % b == 0) continue out;
        }
    console.log(a)
    }