function corregirExamen() {
    var correctas = 0;
    var incorrectas = 0;

    // Pregunta 1
    var pregunta1 = document.getElementById("pregunta1");
    var valor1 = pregunta1.options[pregunta1.selectedIndex].value;
    if(valor1 === "correcta"){
        correctas++;
    }else if(valor1 === "incorrecta"){
        incorrectas++;
    }

    // Pregunta 2
    var pregunta2 = document.getElementById("pregunta2");
    var valor2 = pregunta2.options[pregunta2.selectedIndex].value;
    if(valor2 === "correcta"){
        correctas++;
    }else if(valor2 === "incorrecta"){
        incorrectas++;
    }

    // Pregunta 3
    var pregunta3 = document.getElementById("pregunta3");
    var valor3 = pregunta3.options[pregunta3.selectedIndex].value;
    if(valor3 === "correcta"){
        correctas++;
    }else if(valor3 === "incorrecta"){
        incorrectas++;
    }

    // Pregunta 4
    var pregunta4 = document.getElementById("pregunta4");
    var valor4 = pregunta4.options[pregunta4.selectedIndex].value;
    if(valor4 === "correcta"){
        correctas++;
    }else if(valor4 === "incorrecta"){
        incorrectas++;
    }

    // Mostramos el resultado en el input
    document.getElementById("resultado").value = 
    "Correctas: " + correctas + "|Incorrectas: " + incorrectas;
}