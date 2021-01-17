
// if(expresion a evaluar){
//     //lo que se va a ejecutar en caso que se cumpla la condición
// }else{
//     //Lo que se va a ejecutar en caso que no se cumpla la condición
// }


const edad = prompt('Ingresa tu edad');

if(edad >= 18){
    alert('Adelante puedes comprar')
}else {
    alert('No puede comprar!')
};


// const mensajeBienvenida = () => 'Estos son los especiales y las ofertas de la semana!!';

// const mensajeMenorDeEdad = () => 'Eres menor de edad no puedes comprar';

// const evaluarEdad = (edad) => {
//   if(edad >= 18){
//     alert(mensajeBienvenida());
//   } else {
//     alert(mensajeMenorDeEdad());
//   }
// };

// evaluarEdad(prompt('Ingresa tu edad!'));

       
// EJEMPLOO

// const numero1 = parseInt(prompt('ingresa el primer numero'));
// const numero2 = parseInt(prompt('ingresa el segundo numero'));

// console.log(typeof numero1);
// console.log(typeof numero2);

// console.log((numero1 + numero2));
// console.log( typeof(numero1 + numero2));


    //  CONDICIONALES 2

// &&   Se tienen que cumplir todos
console.log(2 === 2 && 3 === 3 && 'hola' === 'hola');

//  ||   Con que se cumple uno ya esta
console.log(2 === 2 && 4 === 3 && 'ahola' === 'hola');

// ! Negacion o diferencia
// console.log('2' !== 2); TRUE porque si son diferentes (Con el ! == es los mismo a ===)
// console.log('2' != 2); FALSE porque los dos son 2

// EJEMPLO
     // 18 o más y menor a 40

const edad = 16;

if(edad >= 18 && edad <= 40){
    alert('Estas en los criterios')
}else{
    alert('No cumples los criterios')
}