let numero = parseInt(prompt("Ingrese la edad valida para manejar"));

while (numero <= 18 || numero >= 100 || isNaN(numero)) {
      numero;
      if (numero <= 18) {
            alert("Es muy joven para manejar");
      } else if (numero >= 100) {
            alert("Es muy Viejo para manejar");
      } else if (isNaN(numero)) {
            alert("Ingrese un numero valido");
      }
      numero = parseInt(prompt("Ingrese la edad valida para manejar"));
}
alert("Tiene edad  Para Manejar");
