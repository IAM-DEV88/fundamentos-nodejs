En Node.js, el `require` es una función que se utiliza para cargar y utilizar módulos en tu aplicación. Cuando hablamos de "módulos personalizados", nos referimos a módulos que has creado tú mismo o que no son módulos incorporados de Node.js ni paquetes de terceros. Estos son módulos específicos de tu aplicación.

Para cargar un módulo personalizado, simplemente utilizas `require` seguido de la ruta relativa o absoluta al archivo del módulo que deseas importar. La ruta del archivo debe tener una extensión (por ejemplo, `.js`) si es un archivo JavaScript.

Aquí tienes un ejemplo de cómo usar `require` para cargar un módulo personalizado en Node.js:

Supongamos que tienes un archivo llamado `miModulo.js` que contiene una función llamada `saludar` que quieres utilizar en tu aplicación:

```javascript
// miModulo.js
module.exports = {
  saludar: function(nombre) {
    return `¡Hola, ${nombre}!`;
  }
};
```

Luego, en tu aplicación Node.js, puedes cargar y utilizar este módulo personalizado de la siguiente manera:

```javascript
const miModulo = require('./miModulo'); // Usamos la ruta relativa al archivo

const mensaje = miModulo.saludar('Juan');
console.log(mensaje); // Salida: ¡Hola, Juan!
```

En este ejemplo, utilizamos `require` para cargar el módulo personalizado `miModulo.js`. Luego, podemos acceder a la función `saludar` definida en ese módulo y utilizarla en nuestra aplicación.

El uso de módulos personalizados es una práctica común en el desarrollo de aplicaciones Node.js, ya que te permite organizar y modularizar tu código de manera efectiva, lo que facilita el mantenimiento y la reutilización.