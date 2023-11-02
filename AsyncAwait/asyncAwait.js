async function hola(nombre) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        console.log("Hola", nombre);
        console.log("🤖 estoy siendo asincrono");
        resolve(nombre);
      }, 1000);
    });
  }
  
  async function hablar(nombre) {
      return new Promise((resolve,reject) => {
          setTimeout(function () {
            console.log("bla bla bla... 💭");
            resolve(nombre);
            // reject('Rejected 😅');
          }, 1000);
      })
  }
  
  async function adios(nombre) {
      return new Promise((resolve, reject) => {
          setTimeout(function () {
            console.log("👋 Adios", nombre);
            resolve();
          }, 1000);
      })
  }
  
  // -
  
 async function main() {
    let nombre = await hola("IAM-DEV88")
    await hablar()
    await hablar()
    await hablar()
    await adios(nombre)
    console.log('termina ejecucion...');
}

 console.log('inicia ejecucion...');
 main()
 console.log('... continua la ejecucion...');