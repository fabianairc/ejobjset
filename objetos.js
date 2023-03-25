const misDatos = {
  nombre: "Fabi",
  apellido: "Cuenca",
  edad: 30,
  altura: 164,
  eresDesarrollador: "si",
};

const miEdad = misDatos.edad;
console.log(miEdad);

const noel = {
  nombre: "Noe",
  apellido: "Scasppini",
  edad: 32,
  altura: 162,
  eresDesarrollador: "no",
};

const benyi = {
  nombre: "Ben",
  apellido: "Boya",
  edad: 30,
  altura: 166,
  eresDesarrollador: "no",
};
const nuevoOBJ = [{ misDatos }, { noel }, { benyi }];
console.log(nuevoOBJ);

const ordered = nuevoOBJ.sort((a, b) => a.edad + b.edad);
console.log(ordered);
