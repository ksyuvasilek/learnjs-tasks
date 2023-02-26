let str = "Привет";

str.test = 5;

alert(str.test);
//'use strict' - TypeError: Cannot create property 'test' on string 'Привет'
// без 'use strict' - undefined 