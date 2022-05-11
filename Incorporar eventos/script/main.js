/* Definimos la clase menu */
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
/*capturamos los elementos de DOM*/
let menues = [],
      listaMenu = document.getElementById("listaMenu"),
      formMenu = document.getElementById("formMenu"),
      btnMenues = document.getElementById("btnMenues"),
      divMenues = document.getElementById("divMenues"),
      menuEntrada = document.getElementById("menuEntrada"),
      menuPrincipal = document.getElementById("menuPrincipal"),
      menuPostre = document.getElementById("menuPostre"),
      menuBebida = document.getElementById("menuBebida");

/* Se define el menu */
const COMIDA = [],
      ENTRADA = [
            { comida: "Fiambre", precio: 200 },
            { comida: "Pan", precio: 100 },
            { comida: "Mani", precio: 150 },
      ],
      PRINCIPAL = [
            { comida: "Carne", precio: 430 },
            { comida: "Pescado", precio: 375 },
            { comida: "Pollo", precio: 470 },
      ],
      POSTRE = [
            { comida: "Flan", precio: 175 },
            { comida: "Vigilante", precio: 150 },
            { comida: "Helado", precio: 220 },
      ],
      BEBIDA = [
            { comida: "Agua", precio: 120 },
            { comida: "Vino", precio: 450 },
            { comida: "Gaseosa", precio: 250 },
      ],
      NINGUNO = [{ comida: "No se eligio", precio: 0 }];
/*Se crean dinamicamente los Select del formulario*/
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
/*se crea el evento para el boton de agregar menu*/
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
/*se crea el evento para el boton de mostrar menu*/
btnMenues.addEventListener("click", () => {
      divMenues.innerHTML = "";
      menues.forEach((menu) => {
            divMenues.innerHTML += `
            <div class="card m-2" style="width: 18rem;">
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
