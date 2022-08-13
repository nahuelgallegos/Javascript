/* Conteo de votos para elecciones presidenciales */

let voto_usuario = "";
let cont_a = 0;
let cont_b = 0;


while(voto_usuario != "salir") {
    voto_usuario = prompt("Seleccione el numero del partido que desea votar: 1- Cambiemos , 2- Fernandez" )

    if(voto_usuario == "1"){
        console.log("Partido Cambiemos");
        cont_a++;
    }
    else if (voto_usuario == "2"){
        console.log("Partido Fernandez");
        cont_b++;
    }
    else if (voto_usuario == "3"){
        console.log("Partido Socialista");
        cont_c++;
    }

    else {
        console.log("Voto en blanco");

    }
}

if(cont_a > cont_b){
    console.log("Gano el partido Cambiemos");
}
else if(cont_b > cont_a) {
    console.log("Gano el partido Fernandez");
}

else {
    console.log("EMPATE")
}


console.log(cont_a);
console.log(cont_b);

