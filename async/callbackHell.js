function hola(nombre, callback) {
  setTimeout(() => {
    console.log(`Hola ${nombre}`);
    callback(nombre);
  }, 1000);
}

function hablar(callback) {
  setTimeout(() => {
    console.log(`bla bla bla bla...`);
    callback();
  }, 1000);
}

function adios(nombre, callbak) {
  setTimeout(() => {
    console.log(`Adios ${nombre}`);
    callbak();
  }, 500);
}

// function conversacion(nombre, veces, callback) {
//   if (veces > 0) {
//     hablar(() => {
//       conversacion(nombre, --veces, callback);
//     });
//   } else {
//     adios(nombre, callback);
//   }
// }

console.log(`Iniciando proceso...`);
// hola("Jorge", (nombre) => {
//   conversacion(nombre, 3, () => {
//     console.log(`Proceso terminado`);
//   });
// });

hola("Jorge", (nombreAdios) => {
  hablar(() => {
    hablar(() => {
      hablar(() => {
        hablar(() => {
          hablar(() => {
            adios(nombreAdios, () => console.log(`Terminando proceso...`));
          });
        });
      });
    });
  });
});
