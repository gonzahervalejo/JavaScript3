//CICLOS CLASE 3

//ejemplo 1

// for (i=0; i<10;i++) {
//     let usuario = prompt("Ingrese su nombre");
//     let turno = i;
//     alert (`Bienvenido ${usuario } Usted tiene el turno N° ${turno}`);
    
// }



//ejemplo2

// let condicion;

// do{
//     let numero1 = parseInt(prompt("Ingrese un numero para sumar"));
//     let numero2 = parseInt(prompt("Ingrese otro numero"));
//     let condicion = prompt("Desea seguir operando?");
    
//     console.log(`el resultado es ${numero1 + numero2}`);

// }while(condicion == "si");



/* calse 4
Funciones
Venta de soquetes */


const productos = ()=> {

let soquetesId;

    do {
       soquetesId = parseInt(
        prompt("Bienvenido! Que producto desea llevar?\n1)Soquetes de corazon \n2) Soquetes de mariposas \n 3)Soquetes de rosas \n 4) soquetes de arcoiris"))

    }while(soquetesId < 1 || soquetesId > 4 ||  isNaN(soquetesId))


let soquetesNombre;

switch(soquetesId){

    case 1:
        soquetesNombre = "Soquetes de corazon"
        break;

    case 2:
        soquetesNombre = "Soquetes de mariposas"
        break;

    case 3:
        soquetesNombre = "Soquetes de rosas"
        break;
    
    case 4: 
        soquetesNombre = "Soquetes de arcoiris"
        break;

        
}
    return soquetesNombre;

}

let soquetesNombre = productos();
productos();
console.log(soquetesNombre);


/* no entiendo porque no me elige el producto a la primera, tengo que tocarlo dos veces*/ 








