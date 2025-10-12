function concatenar() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;

    var completo = nombre + " " + apellido;

    document.getElementById("nombreCompleto").value = completo;
}