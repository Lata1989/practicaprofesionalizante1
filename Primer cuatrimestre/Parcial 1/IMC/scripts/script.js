let respuesta = document.getElementById("textoRta");
let alt = document.getElementById("altura");
let pes = document.getElementById("peso");
let imc;

function calcular(){
    alt = parseFloat(document.getElementById("altura").value);
    console.log("La altura  es: " + alt);
    pes = parseFloat(document.getElementById("peso").value);
    console.log("El peso es: " + pes);
    respuesta = document.getElementById("textoRta");
    console.log("La respuesta es: " + respuesta)
    if ((isNaN(alt) || isNaN(pes))){
        respuesta.textContent = "Ingrese un peso o una altura válida.";
    }
    else if ((alt < 0 || alt > 3) && (pes < 0 || pes > 500)) {
        respuesta.textContent = "El peso y la altura ingresada no tienen sentido.";
    }
    else if (alt < 0 || alt > 3) {
        respuesta.textContent = "Ingrese una altura valida por favor.";
    }
    else if (pes < 0 || pes > 500) {
        respuesta.textContent = "Por favor ingrese un peso válido";
    }
    else {
        imc = (pes/((alt*alt))).toFixed(2);
        respuesta.textContent = imc + " kg/m2";
    }

}
