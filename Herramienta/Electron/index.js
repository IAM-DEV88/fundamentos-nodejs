const { app, BrowserWindow } = require('electron')

let ventana

app.on('ready', crearVentana)

function crearVentana() {
    ventana = new BrowserWindow({
        width: 800,
        height: 600,
    })

    ventana.loadFile('index.html')
}