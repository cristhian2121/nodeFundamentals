// let buffer = Buffer.alloc(4); // <Buffer 00 00 00 00>
// let buffer = Buffer.from([1, 2, 5]); // <Buffer 01 02 03>
let buffer = Buffer.from('Hola');

// console.log(buffer);

// --

let abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < 26; i++) {
    abc[i] = i + 97;
}

console.log(abc.toString());
