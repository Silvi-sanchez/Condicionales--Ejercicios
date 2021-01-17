// Crear una función jugarPiedraPapelTijera que tome como argumentos dos strings a y b que representen una jugada (piedra, papel, tijera) y dependiendo el devuelva un string con un mensaje avisando qué jugada ganó (o si hubo empate)

// jugarPiedraPapelTijera('tijera', 'piedra')  // ¡Ganó piedra!
// jugarPiedraPapelTijera('piedra', 'tijera')  // ¡Ganó piedra!
// jugarPiedraPapelTijera('papel', 'piedra')   // ¡Ganó papel!
// jugarPiedraPapelTijera('piedra', 'papel')   // ¡Ganó papel!
// jugarPiedraPapelTijera('papel', 'tijera')   // ¡Ganó tijera!
// jugarPiedraPapelTijera('tijera', 'papel')   // ¡Ganó tijera!
// jugarPiedraPapelTijera('piedra', 'piedra')  // ¡Empate!
// jugarPiedraPapelTijera('papel', 'papel')    // ¡Empate!
// jugarPiedraPapelTijera('tijera', 'tijera')  // ¡Empate!


const jugarPiedraPapelTijera = (a,b) =>{
    switch(true){
        case (a === 'piedra' && b === 'tijera' || a === 'tijera' && b === 'piedra'):
            return  '¡Ganó piedra!';
        case(a === 'papel' && b === 'piedra' || a === 'piedra' && b === 'papel'):
            return '¡Ganó papel!';
        case(a === 'papel' && b === 'tijera' || a === 'tijera' && b === 'papel'):
            return '¡Ganó tijera!';
        case(a === 'piedra' && b === 'piedra' || a === 'papel' && b === 'papel' || a === 'tijera' && b === 'tijera'):
            return '¡Empate!';
    }
}


console.log(jugarPiedraPapelTijera('tijera', 'piedra'));
console.log(jugarPiedraPapelTijera('piedra', 'tijera'));
console.log(jugarPiedraPapelTijera('papel', 'piedra'));
console.log(jugarPiedraPapelTijera('piedra', 'papel'));
console.log(jugarPiedraPapelTijera('papel', 'tijera'));
console.log(jugarPiedraPapelTijera('tijera', 'papel'));
console.log(jugarPiedraPapelTijera('piedra', 'piedra'));
console.log(jugarPiedraPapelTijera('papel', 'papel'));
console.log(jugarPiedraPapelTijera('tijera', 'tijera'));