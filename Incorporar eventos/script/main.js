/*capturamos los elementos de DOM*/
let listaMenu = document.getElementById("listaMenu");
class Menu {
      constructor(
            nombre,
            entrada,
            entradaValor,
            principal,
            principalValor,
            postre,
            postreValor,
            bebida,
            bebidaValor
      ) {
            this.nombre = nombre;
            this.entrada = entrada;
            this.entradaValor = entradaValor;
            this.principal = principal;
            this.principalValor = principalValor;
            this.postre = postre;
            this.postreValor = postreValor;
            this.bebida = bebida;
            this.bebidaValor = bebidaValor;
      }
      total() {
            return (
                  this.entradaValor +
                  this.principalValor +
                  this.postreValor +
                  this.bebidaValor
            );
      }
      propina() {
            return this.total() * 0.1;
      }
}
let menues = [],
      formMenu = document.getElementById("formMenu"),
      btnMenues = document.getElementById("btnMenues"),
      divMenues = document.getElementById("divMenues"),
      menuEntrada = document.getElementById("menuEntrada"),
      menuPrincipal = document.getElementById("menuPrincipal"),
      menuPostre = document.getElementById("menuPostre"),
      menuBebida = document.getElementById("menuBebida");

/* formMenu.addEventListener("submit", (e) => {
        e.preventDefault();
        let nombre = document.getElementById("nombre").value,
      } */

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

ENTRADA.forEach((entrada) => {
      let option = document.createElement("option");
      option.value = entrada.comida + " $" + entrada.precio;
      option.innerHTML = entrada.comida + " $" + entrada.precio;
      menuEntrada.append(option);
});
PRINCIPAL.forEach((principal) => {
      let option = document.createElement("option");
      option.value = principal.comida + " $" + principal.precio;
      option.innerHTML = principal.comida + " $" + principal.precio;
      menuPrincipal.append(option);
});
POSTRE.forEach((postre) => {
      let option = document.createElement("option");
      option.value = postre.comida + " $" + postre.precio;
      option.innerHTML = postre.comida + " $" + postre.precio;
      menuPostre.append(option);
});
BEBIDA.forEach((bebida) => {
      let option = document.createElement("option");
      option.value = bebida.comida + " $" + bebida.precio;
      option.innerHTML = bebida.comida + " $" + bebida.precio;
      menuBebida.append(option);
});

formMenu.addEventListener("submit", (e) => {
      e.preventDefault();
      let nombre = document.getElementById("menuNombre").value,
            entrada = menuEntrada.value.split(" $", 2)[0],
            entradaValor = parseInt(menuEntrada.value.split(" $", 2)[1]),
            principal = menuPrincipal.value.split(" $", 2)[0];
      (principalValor = parseInt(menuPrincipal.value.split(" $", 2)[1])),
            (postre = menuPostre.value.split(" $", 2)[0]),
            (postreValor = parseInt(menuPostre.value.split(" $", 2)[1])),
            (bebida = menuBebida.value.split(" $", 2)[0]),
            (bebidaValor = parseInt(menuBebida.value.split(" $", 2)[1]));
      let menu = new Menu(
            nombre,
            entrada,
            entradaValor,
            principal,
            principalValor,
            postre,
            postreValor,
            bebida,
            bebidaValor
      );
      menues.push(menu);
      formMenu.reset();
});
btnMenues.addEventListener("click", () => {
      divMenues.innerHTML = "";
      menues.forEach((menu) => {
            divMenues.innerHTML += `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Menu de ${menu.nombre}</h5>
                    <p class="card-text">Entrada: ${menu.entrada} $${
                  menu.entradaValor
            }</p>
                    <p class="card-text">Principal: ${menu.principal} $${
                  menu.principalValor
            }</p>
                    <p class="card-text">Bebida: ${menu.bebida} $${
                  menu.bebidaValor
            }</p>
                    <p class="card-text">Postre: ${menu.postre} $${
                  menu.postreValor
            }</p>
                    <p class="card-text">Total: $${menu.total()} </p>
                    <p class="card-text">Propina: $${menu.propina()}</p>
                </div>
            </div>
        `;
      });
});
