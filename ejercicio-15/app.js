// Crear una función obtenerNota que tome como argumento un número puntaje y devuelva un string dependiendo del puntaje redondeado, con las siguientes reglas:

// Puntaje	Nota
// Menor a 6	Desaprobado
// Mayor o igual a 6 y menor a 7	Regular
// Mayor o igual a 7 y menor a 8	Bueno
// Mayor o igual a entre 8 y menor a 10	Muy bueno
// 10	Excelente
// Menor a 0 o mayor a 10	Puntaje inválido

// obtenerNota(7)    // "Bueno"
// obtenerNota(9.6)  // "Excelente"
// obtenerNota(12)   // "Puntaje inválido"


const obtenerNota = (puntaje) =>{

    switch(true){
        case (Math.round(puntaje) < 6):
           return 'Desaprobado';
        case (Math.round(puntaje) >= 6 && Math.round(puntaje) < 7):
            return 'Regular';
        case (Math.round(puntaje) >= 7 && Math.round(puntaje) < 8):
            return 'Bueno';
        case (Math.round(puntaje) >= 8 && Math.round(puntaje) < 10):
            return 'Muy bueno';
        case (Math.round(puntaje) === 10):
            return 'Excelente';
        case (Math.round(puntaje) < 0 || Math.round(puntaje) > 10):
            return 'Puntaje Inválido';  
    }
}

console.log(obtenerNota(7));
console.log(obtenerNota(9.6));
console.log(obtenerNota(11));
 