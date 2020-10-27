function hola(nombre, callback) {
  setTimeout(() => {
    console.log(`Hola ${nombre}`);
    callback(nombre);
  }, 1000);
}

function adios(nombre, callbak) {
  setTimeout(() => {
    console.log(`Adios ${nombre}`);
    callbak();
  }, 500);
}

console.log(`Iniciando proceso...`);
hola("Jorge", (nombreAdios) => {
  adios(nombreAdios, () => console.log(`Terminando proceso...`));
});

// hola("Jorge", function () {});
// adios("Jorge", function () {});
