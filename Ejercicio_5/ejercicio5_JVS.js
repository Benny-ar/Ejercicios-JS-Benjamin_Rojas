function validar(){
    var contraseña = document.getElementById("contraseña1").value;
    var contraseñaVal = document.getElementById("contraseña2").value;

    if(contraseña == contraseñaVal){
        alert("Ambas contraseñas son iguales :)");
    }else{
        alert("Las contraseñas no son iguales :(")
    }
}