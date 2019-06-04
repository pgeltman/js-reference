var str = 'table football';

var regex = /foo*/;
var globalRegex = RegExp('foo*', 'g');

console.log(regex);

// console.log(regex.test(str));
// // expected output: true

// console.log(regex.test(str));
// // expected output: true

// console.log(globalRegex.lastIndex);
// // expected output: 0

// console.log(globalRegex.test(str));
// // expected output: true

// console.log(globalRegex.lastIndex);
// // expected output: 9

// console.log(globalRegex.test(str));
// // expected output: false
