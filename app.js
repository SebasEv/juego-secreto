let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    
   
    if (numeroDeUsuario === numeroSecreto) {
                asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
                document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el suusario no acerto.

            if (numeroDeUsuario > numeroSecreto) {
                asignarTextoElemento('p','El numero secreto es menor');
            } else {
                asignarTextoElemento('p','El numero secreto es mayor');
            }
            intentos++;
            limpiarCaja();

    }

    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
        
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //le pregumtamos si ya sorteamos todos los numeros

     if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','ya se sortearon los numeros posibles');
    
    } else{

    //si el numero generado esta incluido en la lista generamos una acción

        if(listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();

        } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }

    } 
    
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indique un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos =1;

}


function reiniciarJuego() {

    //limpiar caja

    limpiarCaja();

    //indicar mensaje de intervalo de numero
    //generar el numero aleatorio 
    //inicializar el número intentos 

    condicionesIniciales();
   

    //deshabilitar el botón de nuevo juego 

    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();