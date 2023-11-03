const { exec, spawn } = require('child_process')

// exec('dir', (error, stdout, stderr) => {
//     if (error) {
//         console.error(error);
//         return false
//     }
//     console.log(stdout)
// })

// exec('node AsyncAwait/asyncAwait.js', (error, stdout, stderr) => {
//     if (error) {
//         console.error(error);
//         return false
//     }
//     console.log(stdout)
// })

let proceso = spawn('dir')
// console.log(proceso);
console.log(proceso.pid);
console.log(proceso.connected);

// var x=21
// var man = function() {
//     console.log(x);
//     var x=20
// }

// man()