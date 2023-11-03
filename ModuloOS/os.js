const os = require('os')

console.log(`Plataforma: ${os.platform()}`);
   console.log(`Arquitectura: ${os.arch()}`);
   console.log(`Tipo de sistema operativo: ${os.type()}`);

   console.log(`Modelo de CPU: ${os.cpus()[0].model}`);
   console.log(`Número de núcleos de CPU: ${os.cpus().length}`);

   console.log(`Memoria total: ${os.totalmem()} bytes`);
   console.log(`Memoria libre: ${os.freemem()} bytes`);

   console.log(`Directorio temporal: ${os.tmpdir()}`);
   console.log(`Directorio de inicio del usuario: ${os.homedir()}`)

//    console.log(os.hostname())
   console.log(os.networkInterfaces())