console.time('todo');
let suma = 0


console.time('bucle');
for (let index = 0; index < 1000000; index++) {
    suma++
}
console.timeEnd('bucle');

function asincrono() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('termina asincrono');
            resolve()
        });
    })
}
console.time('bucleAsincrono');
console.log('comienza asincrono');
asincrono().then(() => {
    console.timeEnd('bucleAsincrono');
})


console.time('bucle2');
for (let index = 0; index < 100000; index++) {
    suma++
}
console.timeEnd('bucle2');
console.timeEnd('todo');