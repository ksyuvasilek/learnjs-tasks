//Task 1 - две функции работают одинаково
//Task 2
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
    return age > 18 || confirm('Родители разрешили?');
}

//Task 3
function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
}

//Task 4
function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
}
  
let x = +prompt("Введите x: ", '');
let n = +prompt("Введите n: ", '');

if (n < 1) {
    alert(`Степень ${n} не поддерживается.`);
} else {
    alert( pow(x, n) );
}