//declaraciones que se usaran en todo el codigo
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    //asignar elementos de texto en el html
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

}

//funcion para verificar los intentos
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    //condiciones para verificar si se acerto o no y en cuantos intentos 
    if (numeroUsuario == numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el nunero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //condiciones para guiar cual es el numero
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento("p", 'El numero secreto es menor')
        } else {
            asignarTextoElemento("p", "El numero secreto es mayor")
        }
        intentos++;
        limpiarCaja();
    }
    return;

}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = "";
}

//funcion para generar numero aleatorio
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    //visualizar el numero aleatorio y arreglo de numeros
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //verificar si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', "ya se sortearon los numeros posibles");
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    //usar condiciones para cuando se reinicie el juego
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Escoge un numero del 1 al ${numeroMaximo} `);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}




//funcion para reinicar el juego
function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    //habilitar le btn de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
}

condicionesIniciales();
