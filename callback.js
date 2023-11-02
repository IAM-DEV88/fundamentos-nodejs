function hola (nombre, miCallback){
    setTimeout(function() {
        console.log('estoy siendo asincrona'); 
        console.log('3s para detener'); 
        miCallback(nombre)
    }, 3000);
    console.log('Hola ', nombre);
}

function adios (nombre, otroCallback){
    setTimeout(function() {
        console.log('Adios ', nombre);
        otroCallback()
    }, 3000);
}

console.log('Inicia ejecucion');
hola("IAM-DEV88", function(nombre){
    adios(nombre,function(){
        console.log('Termina ejecucion');
    })
})