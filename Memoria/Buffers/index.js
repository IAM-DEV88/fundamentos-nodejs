// let buffer = Buffer.from([4,3,2,1])
let buffer = Buffer.from('IAM-DEV88')

console.log(buffer);

let abcdario = Buffer.alloc(26)
console.log(abcdario);


for (let i = 0; i < 26; i++) {
    abcdario[i] = i + 97    
}

console.log(abcdario.toString());
