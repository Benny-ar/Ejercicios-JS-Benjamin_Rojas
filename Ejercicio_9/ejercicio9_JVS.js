function validarContra(){
    var contraseña = document.getElementById("contraseña").value;

    if(contraseña.length < 7){
        alert("Ingresaste menos de 7 caracteres, intentelo otra vez");
    }else if(contraseña.length > 20){
        alert("Ingresaste más de 20 caracteres, intentelo otra vez");
    }
}