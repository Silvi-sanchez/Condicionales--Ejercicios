// Crear una función obtenerDiasMes que tome como argumento un string mes y devuelva un número dependiendo de la cantidad de días que tenga ese mes

// obtenerDiasMes("diciembre") // 31
// obtenerDiasMes("febrero")   // 29


const obtenerDiasMes = (mes) =>{
    switch(mes){
        case 'enero':
            return 31;
        case 'febrero':
            return 29;
        case 'marzo':
            return 30;
        case 'abril':
            return 31;
        case 'mayo':
            return 31;
        case 'junio':
            return 30;
        case 'julio':
            return 31;
        case 'agosto':
            return 31;
        case 'septiembre':
            return 30;
        case 'octubre':
            return 31;
        case 'noviembre':
            return 30;
        case 'diciembre':
            return 31;
    }
}

console.log(obtenerDiasMes("diciembre"));
console.log(obtenerDiasMes("febrero"));