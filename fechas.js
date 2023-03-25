const fecha = new Date();
console.log(fecha);

const nacimiento = new Date(1992, 4, 22);

const tarde = fecha > nacimiento;
console.log(tarde);

const dia = nacimiento.getDate();

const mes = nacimiento.getMonth() + 1;
const año = nacimiento.getFullYear();
