//Task 1
function unique(arr) {
    return Array.from(new Set(arr));
}

//Task 2
function aclean(arr) {
    let map = new Map();
  
    for (let word of arr) {
        let sorted = word.toLowerCase().split("").sort().join(""); // (*)
        map.set(sorted, word);
    }
  
    return Array.from(map.values());
}

//Task 3
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys);