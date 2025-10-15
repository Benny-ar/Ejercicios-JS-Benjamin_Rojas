function mostrarPrecio(){
    var seleccion = document.getElementById("opciones-pizza");
    var indice = seleccion.selectedIndex;
    var precio = seleccion.options[indice].value;

    document.getElementById("precio").value = precio
}