function otroRomper() {
     romper()
}

function romper() {
    return 3+z
}

function romperAsincrono(callback) {
    setTimeout(function() {
        try {
            return 3+z
        } catch (error) {
            console.error('🚨 error asincrono:', error)    
            callback(error)
        }
    });
}

try {
    // romper()
    romperAsincrono(function (error) {
        console.error('🚨 final asincrono:', error)    
    })
} catch (error) {
    console.error('🚨 error capturado')    
    console.error('🚨 no detendra la ejecucion')    
    console.error('🚨 error:', error)    
}

console.log('final del codigo');