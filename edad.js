const fun1 = () => {
  return true;
};

setTimeout(function () {
  console.log("Hola, Soy un promesa");
}, 5000);

function generadora(){
    let id = 0;
    while(true)
    {
     id++
    yield id +1;

    }
}
console.log(generadora());
console.log(generadora());
console.log(generadora());
console.log(generadora());