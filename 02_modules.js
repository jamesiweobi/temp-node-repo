//CommonJS, Every file is a module(by default)
//Modules - Encapsulated code (only share minimum)
const names = require("./03_names.js");
// console.log(names);
const sayHi = require("./utilities");
// sayHi("Susan");
// sayHi(names.john);
// sayHi(names.peter);
require("./05_mind_grande");
