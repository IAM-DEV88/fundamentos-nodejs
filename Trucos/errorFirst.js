function asincrono(callback) {
    setTimeout(() => {
     try {
        let a = 3 + z
        callback(null, '¿Todo bien con z?')
     } catch (error) {
        callback(error)
     }   
    }, 1000);
}

asincrono(function(error, respuesta) {
    if (error) {
        console.error('error:', error)
        return false;
        // throw error no funciona en asicrono, solo sincrono
    }
    console.log('Respuesta:', respuesta);
})