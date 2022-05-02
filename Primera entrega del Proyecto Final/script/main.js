/* Se define el menu */
const COMIDA = [],
      ENTRADA = [
            { comida: "fiambre", precio: 200 },
            { comida: "pan", precio: 100 },
            { comida: "mani", precio: 150 },
      ],
      PRINCIPAL = [
            { comida: "carne", precio: 430 },
            { comida: "pescado", precio: 375 },
            { comida: "pollo", precio: 470 },
      ],
      POSTRE = [
            { comida: "flan", precio: 175 },
            { comida: "vigilante", precio: 150 },
            { comida: "helado", precio: 220 },
      ],
      BEBIDA = [
            { comida: "agua", precio: 120 },
            { comida: "vino", precio: 450 },
            { comida: "gaseosa", precio: 250 },
      ],
      NINGUNO = [{ comida: "No se eligio", precio: 0 }];
/* Funcion para consultar el menu al usuario */
const consultar = (mensaje) => {
      dato = parseInt(prompt(mensaje));
      while (dato <= -1 || dato >= 4 || isNaN(dato)) {
            alert("Por favor ingrese una opcion correcta");
            dato = parseInt(prompt(mensaje));
      }
      return dato;
};
/* funcion que devuelve el resultado del total propiana y el menu elegido */
const menu = (menu) => {
      let respuesta,
            precios = menu.map((comida) => comida.precio),
            total = precios.reduce((a, b) => a + b, 0),
            propina = total * 0.1;

      respuesta =
            "la entrada : " +
            menu[0].comida +
            " $" +
            menu[0].precio +
            ", El plato principal : " +
            menu[1].comida +
            " $" +
            menu[1].precio +
            ", El postre : " +
            menu[2].comida +
            " $" +
            menu[2].precio +
            ", La Bebida : " +
            menu[3].comida +
            " $" +
            menu[3].precio +
            ". Total : $" +
            total +
            ". Propina : $" +
            propina;

      return respuesta;
};
/* Funcion para validar la opcion elegida */
validacion = (valor, array) => {
      if (valor != 3) {
            COMIDA.push({
                  comida: array[valor].comida,
                  precio: array[valor].precio,
            });
      } else {
            COMIDA.push({
                  comida: NINGUNO[0].comida,
                  precio: NINGUNO[0].precio,
            });
      }
};
/* mensajes para preguntar el menu */
let mensajeEntrada =
      "elija una entrada,ingrese 0 para fiambre ,1 para pan ,2 para mani o 3 para nada";

let mensajePrincipal =
      "elija plato principal,ingrese 0 para carne ,1 para pescado ,2 para pollo o 3 para nada";

let mensajePostre =
      "elija un Postre ,ingrese 0 para flan ,1 para vigilante ,2 para helado o 3 para nada";

let mensajeBebida =
      "elija una Bebida ,ingrese 0 para agua ,1 para vino ,2 para gaseosa o 3 para nada";
/*Se se llaman a todas las funciones definidas */
let entrada = consultar(mensajeEntrada);

validacion(entrada, ENTRADA);

let principal = consultar(mensajePrincipal);

validacion(principal, PRINCIPAL);

let postre = consultar(mensajePostre);

validacion(postre, POSTRE);

let bebida = consultar(mensajeBebida);

validacion(bebida, BEBIDA);

alert(menu(COMIDA));
