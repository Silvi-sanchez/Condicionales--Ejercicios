// Crear una función esParOImpar que acepte como argumento un numero y devuelva el string par si el numero es par, o el string impar si el numero es impar

// esParOImpar(3)  // 'impar'
// esParOImpar(10) // 'par'

const esParOImpar = (numero) =>{
    if(numero % 2 === 0){
        return 'par';
    }else{
        return 'impar';
    }
}

console.log(esParOImpar(3));
console.log(esParOImpar(10));