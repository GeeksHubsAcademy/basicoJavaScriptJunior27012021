//Calculadora

var numero1 = parseInt(prompt("Hola amigo, dime un número"));

var numero2 = parseInt(prompt("Hola amigo, dime otro número"));

var resultado;

var accion = prompt("¿Que operacion quieres realizar?");


if(accion == "sumar"){

    //Si se cumple la condicion se ejecuta el contenido entre llaves.
    

    console.log(resultado = numero1 + numero2);

} else if (accion == "restar") {
    
    console.log(resultado = numero1 - numero2);
}else{
    console.log("No has introducido ni sumar ni restar.");
};

