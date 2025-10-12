function cuadrado(){
    var numeroEntero = document.getElementById("numInt").value;

    numeroEntero = parseInt(numeroEntero)
    var alCuadrado = numeroEntero ** 2;
    alert("El cuadrado del número ingresado es:"+ alCuadrado);
}