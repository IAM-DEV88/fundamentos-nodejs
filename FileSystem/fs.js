const fs = require('fs')

function leer(ruta, callback) {
    fs.readFile(ruta, (error , data) => {
        console.log(data.toString());
    })
}

function escribir(ruta, contenido, callback) {
    fs.writeFile(ruta, contenido, function (err) {
        if (err) {
            console.error('fallo escritura');
        }else{
            console.log('escritura exitosa');

        }
    })
}

function borrar(ruta,callback) {
    fs.unlink(ruta,callback)
}

borrar(__dirname+'/newSample.txt', console.log)
// leer(__dirname + '/sample.txt', console.log)
// escribir(__dirname + '/newSample.txt', 'New Text file created with FS', console.log)
