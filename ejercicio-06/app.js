// Crear una función esHoraValida que tome como argumento un string hora con el formato HH:mm y determine si es una hora válida del día o no

// esHoraValida('12:23') // true
// esHoraValida('12:65') // false
// esHoraValida('28:05') // false
// esHoraValida('00:00') // true


const esHoraValida = (hora) =>{
    let minutos = hora.split(':');
    if(minutos[0] < '25' && minutos[1] < '61'){
        return true;
    }else{
        return false;
    }
}

console.log(esHoraValida('12:23')); 
console.log(esHoraValida('12:65')); 
console.log(esHoraValida('28:05')); 
console.log(esHoraValida('00:00')); 