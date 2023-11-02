function hola(nombre, miCallback) {
    setTimeout(function () {
      console.log("Hola ", nombre);
      console.log("estoy siendo asincrono");
      miCallback(nombre);
    }, 1000);
  }
  
  function hablar(callbackHablar) {
    setTimeout(function () {
      console.log("bla bla bla bla bla...");
      callbackHablar();
    }, 1000);
  }
  
  function adios(nombre, otroCallback) {
    setTimeout(function () {
      console.log("Adios ", nombre);
      otroCallback();
    }, 1000);
  }

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}

console.log("Inicia ejecucion");
hola("IAM-DEV88", function (nombre) {
  conversacion(nombre, 3, function () {
    console.log("Termina ejecucion");
  });
});
