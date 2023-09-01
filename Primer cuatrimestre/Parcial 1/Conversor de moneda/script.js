// Declaro las variables para las monedas que voy a utilizar.
let valorEuro = 267;
let valorDolar = 248.5;
let valorReal = 51.45;
let peso = 1;

// Declaro las variables para los elementos que voy a tomar del DOM.

let cantidad1 = parseFloat(document.getElementById("monto1").value);
let moneda1 = document.getElementById("moneda1").value;
let moneda2 = document.getElementById("moneda2").value;
let cantidad2 = document.getElementById("monto2");
let monedaTarget = document.getElementById("seleccionada");

let monedaOrigen;
let monedaDestino;

function calcular() {
  cantidad1 = parseFloat(document.getElementById("monto1").value);
  moneda1 = document.getElementById("moneda1").value;
  moneda2 = document.getElementById("moneda2").value;


  // Codigo de prueba
  // switch (moneda1) {
  //   case "euro":
  //     monedaOrigen = valorEuro;
  //     break;
  //   case "dolar":
  //     monedaOrigen = valorDolar;
  //     break;
  //   case "peso":
  //     monedaOrigen = peso;
  //     break;
  //   case "real":
  //     monedaOrigen = valorReal;
  //     break;
  //   default:
  //     break;
  // }
  // switch (moneda2) {
  //   case "euro":
  //     monedaDestino = valorEuro;
  //     break;
  //   case "dolar":
  //     monedaDestino = valorDolar;
  //     break;
  //   case "peso":
  //     monedaDestino = peso;
  //     break;
  //   case "real":
  //     monedaDestino = valorReal;
  //     break;
  //   default:
  //     break;
  // }
  // if (isNaN(cantidad1)) {
  //   monedaTarget.textContent = "Ingrese un monto válido.";
  // }
  // else {
  //   cantidad2.textContent = cantidad1 * monedaOrigen / monedaDestino;
  // }

  // switch (moneda2) {
  //   case "euro":
  //     monedaTarget.textContent = " euros.";
  //     break;
  //   case "dolar":
  //     monedaTarget.textContent = " dolares.";
  //     break;
  //   case "peso":
  //     monedaTarget.textContent = " pesos.";
  //     break;
  //   case "real":
  //     monedaTarget.textContent = " reales.";
  //     break;
  //   default:
  //     monedaTarget.textContent = "";
  //     break;
  // }


  // Este codigo de abajo anda bien


  if (isNaN(cantidad1)) {
    cantidad2.textContent = "";
    monedaTarget.textContent = "Ingrese un monto válido.";
  } else {
    if (moneda1 == "euro") {
      switch (moneda2) {
        case "euro":
          cantidad2.textContent = "€ " + cantidad1.toFixed(2);
          console.log("Convirtiendo de Euro a Euro");
          break;
        case "dolar":
          cantidad2.textContent =
            "US$ " + ((cantidad1 * valorEuro) / valorDolar).toFixed(2);
          console.log("Convirtiendo de Euro a Dolar");
          break;
        case "peso":
          cantidad2.textContent = "$ " + (cantidad1 * valorEuro).toFixed(2);
          console.log("Convirtiendo de Euro a Peso");
          break;
        case "real":
          cantidad2.textContent =
            "R$ " + ((cantidad1 * valorEuro) / valorReal).toFixed(2);
          console.log("Convirtiendo de Euro a Euro");
          break;
        default:
          break;
      }
    } else if (moneda1 == "dolar") {
      switch (moneda2) {
        case "euro":
          cantidad2.textContent =
            "€ " + ((cantidad1 * valorDolar) / valorEuro).toFixed(2);

          console.log("Convirtiendo de Dolar a Euro");
          break;
        case "dolar":
          cantidad2.textContent = "US$ " + cantidad1.toFixed(2);
          console.log("Convirtiendo de Dolar a Dolar");
          break;
        case "peso":
          cantidad2.textContent = "$ " + (cantidad1 * valorDolar).toFixed(2);
          console.log("Convirtiendo de Dolar a Peso");
          break;
        case "real":
          cantidad2.textContent =
            "R$ " + ((cantidad1 * valorDolar) / valorReal).toFixed(2);
          console.log("Convirtiendo de Dolar a Real");
          break;
        default:
          break;
      }
    } else if (moneda1 == "peso") {
      switch (moneda2) {
        case "euro":
          cantidad2.textContent = "€ " + (cantidad1 / valorEuro).toFixed(2);
          console.log("Convirtiendo de Peso a Euro");
          break;
        case "dolar":
          cantidad2.textContent = "US$ " + (cantidad1 / valorDolar).toFixed(2);
          console.log("Convirtiendo de Peso a Dolar");
          break;
        case "peso":
          cantidad2.textContent = "$ " + cantidad1.toFixed(2);
          console.log("Convirtiendo de Peso a Peso");
          break;
        case "real":
          cantidad2.textContent = "R$ " + (cantidad1 / valorReal).toFixed(2);
          console.log("Convirtiendo de Peso a Real");
          break;
        default:
          break;
      }
    } else if (moneda1 == "real") {
      switch (moneda2) {
        case "euro":
          cantidad2.textContent =
            "€ " + ((cantidad1 * valorReal) / valorEuro).toFixed(2);
          console.log("Convirtiendo de Real a Euro");
          break;
        case "dolar":
          cantidad2.textContent =
            "US$ " + ((cantidad1 * valorReal) / valorDolar).toFixed(2);
          console.log("Convirtiendo de Real a Dolar");
          break;
        case "peso":
          cantidad2.textContent = "$ " + (cantidad1 * valorReal).toFixed(2);
          console.log("Convirtiendo de Real a Peso");
          break;
        case "real":
          cantidad2.textContent = "R$ " + cantidad1.toFixed(2);
          console.log("Convirtiendo de Real a Real");
          break;
        default:
          break;
      }
    }
    switch (moneda2) {
      case "euro":
        monedaTarget.textContent = " euros.";
        break;
      case "dolar":
        monedaTarget.textContent = " dolares.";
        break;
      case "peso":
        monedaTarget.textContent = " pesos.";
        break;
      case "real":
        monedaTarget.textContent = " reales.";
        break;
      default:
        break;
    }
  }
}
