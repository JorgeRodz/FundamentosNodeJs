function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log(`Hola ${nombre}`));
    }, 900);
  });
}

function hablar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log(`bla bla bla bla...`));
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log(`adios ${nombre}`));
    }, 500);
  });
}

async function main() {
  try {
    await hola("Tomasino");
    await hablar();
    await adios("Tomasino");
    console.log(`Proceso terminado`);
  } catch (error) {
    console.log(error);
  }
}

main();

console.log(`Empezando proceso..`);
