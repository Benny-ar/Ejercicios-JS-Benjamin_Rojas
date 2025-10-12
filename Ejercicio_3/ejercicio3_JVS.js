function MayorMenor(){
    var Num1 = document.getElementById("num1").value;
    var Num2 = document.getElementById("num2").value;

    Num1 = parseInt(Num1);
    Num2 = parseInt(Num2);

    if(Num1 > Num2){
        alert("El mayor es "+Num1);
    }
    if(Num2 > Num1){
        alert("El mayor es: "+Num2);
    }
}