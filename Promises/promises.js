function hola(nombre, miCallback) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Hola ", nombre);
      console.log("🤖 estoy siendo asincrono");
      resolve(nombre);
    }, 1000);
  });
}

function hablar(nombre) {
    return new Promise((resolve,reject) => {
        setTimeout(function () {
          console.log("bla bla bla... 💭");
          resolve(nombre);
          // reject('Rejected 😅');
        }, 1000);
    })
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
          console.log("👋 Adios", nombre);
          resolve();
        }, 1000);
    })
}

// -

hola("IAM-DEV88")
.then(hablar)
.then(hablar)
.then(hablar)
.then(adios)
.then((nombre) => {
    console.log("Proceso terminado");
})
.catch((error) => console.error('error: ', error))
