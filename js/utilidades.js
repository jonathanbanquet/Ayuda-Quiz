
var directorioImagenes = '../recursos/imagenes/'

function crearNodo(tipoNodo){
    var nodo = document.createElement(tipoNodo)
    return nodo;
}

function crearNodoConEnlace(tipoNodo, textoNodo, cantidad) {
    var nodo = document.createElement(tipoNodo)

    for (var i = 0; i < cantidad; i++) {
        var nuevoHijo = document.createElement('a')
        nuevoHijo.href = '#' 
        nuevoHijo.textContent = textoNodo
        nodo.appendChild(nuevoHijo)
    }

    return nodo;
}

function crearNodoImagen(nombreImagen){
    var nodo = crearNodo("img")
    nodo.src = directorioImagenes + nombreImagen
    return nodo
}

function adicionarNodoABody(nodo){
    document.body.appendChild(nodo)
}

function adicionarNodoAContenedor(nodo, contenedor){
    contenedor.appendChild(nodo);
}

function crearNodoConTexto(tipoNodo, textoNodo, cantidad) {
    var nodo = document.createElement(tipoNodo);

    for (var i = 0; i < cantidad; i++) {
        var nuevoTextoNodo = document.createTextNode(textoNodo)
        var nuevoHijo = document.createElement(tipoNodo)
        nuevoHijo.appendChild(nuevoTextoNodo)
        nodo.appendChild(nuevoHijo)
    }
    return nodo
}






