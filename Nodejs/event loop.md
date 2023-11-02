# EVENT LOOP

> El event loop es un bucle que se ejecuta continuamente en el proceso de Node.js y se encarga de gestionar las tareas asíncronas y los eventos en un solo hilo.

> Esto es importante porque JavaScript, el lenguaje principal en Node.js, es monohilo, lo que significa que solo puede realizar una tarea a la vez.

> Sin embargo, Node.js es capaz de **manejar muchas operaciones de entrada/salida (E/S) sin bloquear el hilo principal**, gracias al event loop.

## El event loop funciona de la siguiente manera:

Recopila y ejecuta tareas asíncronas: Cuando una tarea asíncrona, como una solicitud de E/S (lectura de archivos, solicitud de red) o una temporización (un temporizador de JavaScript), se inicia, Node.js la coloca en una cola de tareas.

El event loop verifica constantemente si hay tareas pendientes en la cola de tareas. Si hay tareas pendientes, las ejecuta de manera secuencial, una por una.

Después de ejecutar una tarea, el event loop verifica si hay más tareas pendientes en la cola de tareas. Si hay tareas pendientes, las ejecuta; de lo contrario, el bucle espera a que lleguen nuevas tareas.

Mientras el event loop está esperando o ejecutando tareas asíncronas, el hilo principal no se bloquea y sigue siendo responsable de manejar eventos, como solicitudes HTTP, interacciones del usuario, etc.

Cuando todas las tareas asíncronas se completan y la cola de tareas está vacía, el event loop termina su ejecución y Node.js sale del programa.

Este enfoque permite que Node.js sea altamente eficiente y escalable, ya que puede manejar muchas conexiones simultáneas sin bloquear el hilo principal. Los desarrolladores de Node.js pueden escribir código JavaScript que aprovecha este modelo de concurrencia no bloqueante para crear aplicaciones web rápidas y receptivas.