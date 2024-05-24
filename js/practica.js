function crearNodo(tipo){
    var nodo = document.createElement(tipo);
    return nodo;
}

function crearNodoConTexto(tipo, textoNodo, cantidad){
    var nodo = document.createElement(tipo);

    for (let i = 0; i < cantidad; i++) {
        var texto = document.createTextNode(textoNodo);
        var nuevoContainer = document.createElement(tipo);
        
        nuevoContainer.appendChild(texto);
        nodo.appendChild(nuevoContainer);
    }

    return nodo;
}

function agregarNodo(nodo){
    document.body.appendChild(nodo);
}