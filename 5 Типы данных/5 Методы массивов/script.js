//Task 1
function camelize(str) {
    return str
        .split('-') 
        .map(
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join(''); 
}

//Task 2
function filterRange(arr, a, b) {
    return arr.filter(item => a <= item && item <= b);
}

//Task 3
function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
  
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
  
}

//Task 4
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

//Task 5
function copySorted(arr) {
    return arr.slice().sort();
}

//Task 6

//Task 7
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

//Task 8
let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

//Task 9
function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

//Task 10
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

//Task 11
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

//Task 12
function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
}

//Task 13
function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
}