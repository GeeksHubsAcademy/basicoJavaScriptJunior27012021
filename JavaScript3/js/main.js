

var res = parseInt(prompt("Hola usuario, dime tu edad"));

if(res >= 18){

    var res2 = prompt("Tienes tabaco?");

    if(res2 == "Si"){

        var res3 = parseInt(prompt("Cuantos cigarros fumas al dia"));

        if(res3 > 20){
            console.log("Voy a amputar tus dedos del pie");
        }else{
            console.log("Fumas pero no tanto");
        }
    }else{
        console.log("Tus pulmones durarán un poquiiiiiiiito más");
    }
}else{
    console.log("Eres menor de edad, tu lugar está en Disneylandia");
};

