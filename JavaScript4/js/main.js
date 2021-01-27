

var nota = parseInt(prompt("¿Que nota has sacado?"));

// if(nota >= 0 && nota <= 4){
//     console.log ("has suspendido");
// }

// if(nota >= 5 && nota <= 6){
//     console.log ("suficiente");
// }


// if(nota >= 7 && nota <= 8){
//     console.log ("notable");
// }

// if(nota >= 9 && nota <= 10){
//     console.log ("sobresaliente");
// }

switch (nota){

    case 0:
        console.log("Estás suspendido");
    break;

    case 1:
        console.log("Estás suspendido");
    break;

    case 2:
        console.log("Estás suspendido");
    break;

    case 3:
        console.log("Estás suspendido");
    break;

    case 4:
        console.log("Estás suspendido");
    break;

    case 5:
        console.log("Aprobado");
    break;

    case 6:
        console.log("Aprobado");
    break;

    case 7:
        console.log("Notable");
    break;

    case 8:
        console.log("Notable");
    break;

    case 9:
        console.log("Sobresaliente");
    break;

    case 10:
        console.log("Sobresaliente");
    break;

    default: 
        console.log("Te has equivocado introduciendo la nota");
    break;

};

