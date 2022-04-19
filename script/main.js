let numero = parseInt(prompt("Ingrese la edad valida para manejar"));

while (numero <= 18 || numero >= 100 || isNaN(numero)) {
      numero;
      if (numero <= 18) {
            console.log("Es muy joven para manejar");
      } else if (numero >= 100) {
            console.log("Es muy Viejo para manejar");
      } else if (isNaN(numero)) {
            console.log("Ingrese un numero valido");
      }
      numero = parseInt(prompt("Ingrese la edad valida para manejar"));
}
console.log("Tiene edad  Para Manejar");
