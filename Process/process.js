// const PRO...S = require('process')
// NO ES NECESARIO REQUERIR


process.on('beforeExit', () => {
    console.log('la ejecucion terminara');
})

process.on('exit', () => {
    console.log('ejecucion termino');
})


process.on('uncaughtException', (err, origin) => {
    console.log('no se ha capturado el error');
    console.error('err: ', err);
})

funcParaRomper()

console.log('codigo luego de romper');
