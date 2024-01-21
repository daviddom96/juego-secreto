let numeroSeceto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroMaximoDeIntentos = 5;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function  verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
   /* console.log(typeof(numeroSecreto));
    console.log(numeroSeceto);
    console.log(typeof(numeroUsuario));
    console.log(numeroUsuario);*/
    console.log(numeroUsuario === numeroSeceto);
    console.log(intentos);
    if(numeroUsuario===numeroSeceto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //el usuario no acerto

        if(numeroUsuario > numeroSeceto) {
            asignarTextoElemento('p' , 'el número secreto es menor');
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;

        
        limpiarCaja();
//agregado
        if(intentos == numeroMaximoDeIntentos){
            asignarTextoElemento('p', 'Has consumido tus intentos');
        }
    }
    return;
    
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
    ;
    
}
function generarNuemeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
//si ya sorteamos todos los numeros
if(listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p', 'Ya se sortearon todos los numeros');
} else {
    //si el numero generado esta incluido en la lista


    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNuemeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    //si usamos recursividad el programa entrara en bucle infinito

}
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSeceto = generarNuemeroSecreto();
    intentos = 1
    console.log(numeroSeceto);
}

function reiniciarJuego(){

    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');

    //Deshabilitar
}

condicionesIniciales();

/*arrays: arreglos para valores repetibles manejar en una caja mayor multiple cajas pequeñas
listas Nota: leer bien la documentacion*/

