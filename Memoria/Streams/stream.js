const fs = require('fs')
const stream = require('stream')
const util = require('util')
let data = ''

let readableStream = fs.createReadStream(__dirname + '/input.txt')
readableStream.setEncoding('UTF8')

// readableStream.on('data', function(chunk) {
//     console.log(chunk);
//     console.log(chunk.toString());
// })

// readableStream.on('end', function() {
//     console.log('final de lectura');
//     console.log(data);
// })

// process.stdout.write('line 1')
// process.stdout.write('line 2')
// process.stdout.write('line 3')
// process.stdout.write('line 4')

const Transform = stream.Transform

function Mayus(params) {
   Transform.call(this) 
}

util.inherits(Mayus, Transform)

Mayus.prototype._transform = function(chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase()
    this.push(chunkMayus)
    cb()
}

let mayus = new Mayus()

readableStream.pipe(mayus).pipe(process.stdout)