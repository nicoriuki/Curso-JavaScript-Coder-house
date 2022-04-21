function menu(
      entrada,
      entradaValor,
      principal,
      pricipalValor,
      postre,
      postreValor,
      bebida,
      bebidaValor
) {
      let total = entradaValor + pricipalValor + postreValor + bebidaValor,
            propina = total * 0.1;
      return (
            "la entrada : " +
            entrada +
            " $" +
            entradaValor +
            ", El plato principal : " +
            principal +
            " $" +
            pricipalValor +
            ", El postre : " +
            postre +
            " $" +
            postreValor +
            ", La Bebida : " +
            bebida +
            " $" +
            bebidaValor +
            ". Total : $" +
            total +
            ". Propina : $" +
            propina
      );
}

let entrada,
      entradaValor,
      principal,
      principalValor,
      postre,
      postreValor,
      bebida,
      bebidaValor;

entr = prompt("elija una entrada , fiambre , pan , mani o nada").toLowerCase();

while (entr != "fiambre" && entr != "pan" && entr != "mani" && entr != "nada") {
      alert("invalido");
      entr = prompt("elija una entrada , fiabre , pan , mani").toLowerCase();
}
switch (entr) {
      case "fiambre":
            entrada = "fiambre";
            entradaValor = 200;
            break;
      case "pan":
            entrada = "pan";
            entradaValor = 100;
            break;
      case "mani":
            entrada = "mani";
            entradaValor = 300;
            break;
      default:
            entrada = "nada";
            entradaValor = 0;
            break;
}
principal = prompt(
      "elija un plato principal , carne , pescado ,pollo o nada"
).toLowerCase();
while (
      principal != "carne" &&
      principal != "pescado" &&
      principal != "pollo" &&
      principal != "nada"
) {
      alert("invalido");
      principal = prompt(
            "elija un plato principal , carne , pescado ,pollo onada"
      ).toLowerCase();
}
switch (principal) {
      case "carne":
            principal = "carne";
            principalValor = 500;
            break;
      case "pescado":
            principal = "pescado";
            principalValor = 600;
            break;
      case "pollo":
            principal = "pollo";
            principalValor = 450;
            break;
      default:
            principal = "nada";
            principalValor = 0;
            break;
}

postre = prompt(
      "elija un postre , helado ,  flan, vigilante, nada"
).toLowerCase();
while (
      postre != "helado" &&
      postre != "flan" &&
      postre != "vigilante" &&
      postre != "nada"
) {
      alert("invalido");
      postre = prompt(
            "elija un postre , helado ,  flan, vigilante, nada"
      ).toLowerCase();
}
switch (postre) {
      case "helado":
            postre = "helado";
            postreValor = 150;
            break;
      case "flan":
            postre = "flan";
            postreValor = 200;
            break;
      case "vigilante":
            postre = "vigilante";
            postreValor = 175;
            break;
      default:
            postre = "nada";
            postreValor = 0;
            break;
}
bebida = prompt(
      "elija una bebida , agua , jugo , cerveza, vino , nada"
).toLowerCase();
while (
      bebida != "agua" &&
      bebida != "jugo" &&
      bebida != "cerveza" &&
      bebida != "vino" &&
      bebida != "nada"
) {
      alert("invalido");
      bebida = prompt(
            "elija una bebida , agua , jugo , cerveza, vino , nada"
      ).toLowerCase();
}
switch (bebida) {
      case "agua":
            bebida = "agua";
            bebidaValor = 50;
            break;
      case "jugo":
            bebida = "jugo";
            bebidaValor = 100;
            break;
      case "cerveza":
            bebida = "cerveza";
            bebidaValor = 150;
            break;
      case "vino":
            bebida = "vino";
            bebidaValor = 500;
            break;
      default:
            bebida = "nada";
            bebidaValor = 0;
            break;
}
alert(
      menu(
            entrada,
            entradaValor,
            principal,
            principalValor,
            postre,
            postreValor,
            bebida,
            bebidaValor
      )
);
