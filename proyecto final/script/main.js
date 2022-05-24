/* difino los meses */
const MESES = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septimbre",
      "Octubre",
      "Noviembre",
      "Diciembre",
];
let eventos = [];

localStorage.getItem("evento")
      ? /*OPERADOR TERNARIO*/
        (eventos = JSON.parse(localStorage.getItem("evento")))
      : localStorage.setItem("evento", JSON.stringify(eventos));

let eventos2 = eventos.sort((a, b) => a.hora - b.hora);

/* Defino la fecha */
let fechaActual = new Date(),
      diaActual = fechaActual.getDate(),
      mesNumero = fechaActual.getMonth(),
      anioActual = fechaActual.getFullYear();
/* capturo los elementos del dom */
const d = document,
      modal = new bootstrap.Modal(document.getElementById("staticBackdrop1"), {
            keyboard: false,
      }),
      mesHtml = d.getElementById("mes"),
      anioHtml = d.getElementById("anio"),
      diasHtml = d.getElementById("diasSemanales"),
      anioSiguiente = d.getElementById("anioSiguiente"),
      anioAnterrion = d.getElementById("anioAnterior"),
      mesSiguiente = d.getElementById("mesSiguiente"),
      mesPrevio = d.getElementById("mesPrevio"),
      semanaPrevio = d.getElementById("semanaPrevio"),
      semanaSiguiente = d.getElementById("semanaSiguiente"),
      diasTabla = d.querySelectorAll("td"),
      diaModal = d.getElementById("diaModal"),
      mesActualModal = d.getElementById("mesActualModal"),
      mesModal = d.getElementById("mesModal"),
      anioModal = d.getElementById("anioModal"),
      eventosModal = d.getElementById("eventosModal"),
      modalTitulo = d.getElementById("modalTitulo"),
      modalBody = d.getElementById("modalBody");
mesHtml.innerHTML = MESES[mesNumero];
anioHtml.innerHTML = anioActual;
diaModal.value = diaActual;
mesActualModal.value = mesNumero;
mesActualModal.innerText = MESES[mesNumero];
anioModal.value = anioActual;

/*Defino los Divs de los eventos*/
const diaN = "diaN";
for (let i = 0; i <= 41; i++) {
      eval("const " + diaN + i + "= " + i + ";");
      diaN[i] = d.getElementById("diaN" + [i]);
}

const diaE = "diaE";
for (let i = 0; i <= 41; i++) {
      eval("const " + diaE + i + "= " + i + ";");
      diaE[i] = d.getElementById("diaE" + [i]);
}

MESES.forEach((mes, index) => {
      let option = d.createElement("option");
      option.value = index;
      option.innerHTML = mes;
      mesModal.append(option);
});
/*creo la clase */
class Dia {
      constructor(dia, mes, anio, color) {
            this.dia = dia;
            this.mes = mes;
            this.anio = anio;
            this.color = color;
      }
}
class Evento {
      constructor(
            id,
            conjunto,
            dia,
            mes,
            anio,
            color,
            hora,
            titulo,
            descripcion
      ) {
            this.id = id;
            this.conjunto = conjunto;
            this.dia = dia;
            this.mes = mes;
            this.anio = anio;
            this.color = color;
            this.hora = hora;
            this.titulo = titulo;
            this.descripcion = descripcion;
      }
}

let dias = [];
/* Funcion para mostrar el calendario */
function mostrarCalendario() {
      diasTabla.forEach((dia, index) => {
            diasTabla[index].classList.remove("noHabil");
            diasTabla[index].classList.remove("mesNoActual");
            diasTabla[index].classList.remove("mesActual");
      });
      /*primeros dias */
      if (mesNumero === 0) {
            for (let i = primerDia(); i > 0; i--) {
                  dias.push(
                        new Dia(
                              diasDelMes(mesNumero - 1) - (i - 1),
                              11,
                              anioActual - 1,
                              "mesNoActual"
                        )
                  );
            }
      } else {
            for (let i = primerDia(); i > 0; i--) {
                  dias.push(
                        new Dia(
                              diasDelMes(mesNumero - 1) - (i - 1),
                              mesNumero - 1,
                              anioActual,
                              "mesNoActual"
                        )
                  );
            }
      }
      /*dias del mes*/
      for (let i = 1; i <= diasDelMes(mesNumero); i++) {
            dias.push(new Dia(i, mesNumero, anioActual, "mesActual"));
      }
      /*ultimos dias */
      if (mesNumero === 11) {
            for (let i = 1; dias.length <= 41; i++) {
                  dias.push(new Dia(i, 0, anioActual + 1, "mesNoActual"));
            }
      } else {
            for (let i = 1; dias.length <= 41; i++) {
                  dias.push(
                        new Dia(i, mesNumero + 1, anioActual, "mesNoActual")
                  );
            }
      }
      /*pintar los dias*/

      for (let i = 0; i <= dias.length - 1; i++) {
            d.getElementById("dia" + i).value =
                  dias[i].dia + "" + dias[i].mes + "" + dias[i].anio;
            d.getElementById("diaN" + i).innerHTML = " ";
            d.getElementById("diaE" + i).innerHTML = " ";
            d.getElementById(
                  "diaN" + i
            ).innerHTML += `<p class="numeroDia">${dias[i].dia}</p>`;
            diasTabla[i].classList.add(dias[i].color);
            FERIADOS.forEach((feriado) => {
                  if (
                        dias[i].dia === feriado.dia &&
                        dias[i].mes === feriado.mes &&
                        dias[i].anio === feriado.anio
                  ) {
                        diasTabla[i].classList.add("noHabil");
                  }
            });

            eventos2.forEach((evento) => {
                  if (
                        dias[i].dia === parseInt(evento.dia) &&
                        dias[i].mes === parseInt(evento.mes) &&
                        dias[i].anio === parseInt(evento.anio)
                  ) {
                        if (evento.hora.toString().length == 3) {
                              evento.hora = "0" + evento.hora;
                        }
                        d.getElementById("diaE" + i).innerHTML += `
                       <div class="evento evento${i} bg-${evento.color}" >${
                              evento.hora.toString().slice(0, 2) +
                              ":" +
                              evento.hora.toString().slice(2, 4)
                        } - ${evento.titulo}</div> 
                        `;
                  }
            });
            if (d.querySelectorAll(".evento" + i).length >= 5) {
                  let event = d.querySelectorAll(".evento" + i).length;
                  d.getElementById("diaE" + i).innerHTML = `
                        <div class="evento evento${i} econjunto" >${event} eventos</div>`;
            }
      }
}

/*calcular  los dias de los meses*/
function diasDelMes(mes) {
      if (mes === -1) mes = 11;
      if (
            mes == 0 ||
            mes == 2 ||
            mes == 4 ||
            mes == 6 ||
            mes == 7 ||
            mes == 9 ||
            mes == 11
      ) {
            return 31;
      } else if (mes == 3 || mes == 5 || mes == 8 || mes == 10) {
            return 30;
      } else {
            return anioBiciesto() ? 29 : 28;
      }
}
/*calcular el año biciesto*/
function anioBiciesto() {
      return (
            (anioActual % 100 !== 0 && anioActual % 4 === 0) ||
            anioActual % 400 === 0
      );
}
/*mostrar los primeros dias*/
function primerDia() {
      let diaInicio = new Date(anioActual, mesNumero, 1);
      let resultado = diaInicio.getDay();
      /* Pongo que la semana empieze en lunes */
      resultado--;
      if (resultado == -1) {
            resultado = 6;
      }
      return resultado;
}
/*mostrar los ultimos dias*/
function ultimoDia() {
      let diaInicio = new Date(anioActual, mesNumero, 1);
      let resultado = diaInicio.getDay();
      return resultado;
}
/*funcion  para iterar los meses*/
function siguienteMes() {
      dias = [];

      if (mesNumero !== 11) {
            mesNumero++;
      } else {
            mesNumero = 0;
            anioActual++;
      }
      cargarNuevaFecha();
}

function anteriorMes() {
      dias = [];
      if (mesNumero !== 0) {
            mesNumero--;
      } else {
            mesNumero = 11;
            anioActual--;
      }
      cargarNuevaFecha();
}
function siguienteAnio() {
      dias = [];

      anioActual++;

      cargarNuevaFecha();
}

function anteriorAnio() {
      dias = [];

      anioActual--;

      cargarNuevaFecha();
}
/*Se aplica SPREAD*/
const fecha = [anioActual, mesNumero, diaActual];
/*funcion para cargar las nuevas fechas */
function cargarNuevaFecha() {
      fechaActual.setFullYear(...fecha);
      mesHtml.innerHTML = MESES[mesNumero];
      anioHtml.innerHTML = anioActual.toString();
      mostrarCalendario();
}

/*captura de eventos */
mesSiguiente.addEventListener("click", () => {
      siguienteMes();
});

mesPrevio.addEventListener("click", () => {
      anteriorMes();
});
anioSiguiente.addEventListener("click", () => {
      siguienteAnio();
});

anioAnterrion.addEventListener("click", () => {
      anteriorAnio();
});

function idEvento(hora, dia, mes) {
      return hora + "" + dia + "" + mes;
}
/*eventos para agregar eventos*/
eventosModal.addEventListener("submit", (e) => {
      e.preventDefault();
      eventos.push(
            new Evento(
                  idEvento(
                        parseInt(
                              eventosModal.horaModal.value.slice(0, 2) +
                                    eventosModal.horaModal.value.slice(3, 5)
                        ),
                        eventosModal.diaModal.value,
                        eventosModal.mesModal.value
                  ),
                  eventosModal.diaModal.value +
                        "" +
                        eventosModal.mesModal.value +
                        "" +
                        eventosModal.anioModal.value,
                  eventosModal.diaModal.value,
                  eventosModal.mesModal.value,
                  eventosModal.anioModal.value,
                  eventosModal.colorModal.value,
                  parseInt(
                        eventosModal.horaModal.value.slice(0, 2) +
                              eventosModal.horaModal.value.slice(3, 5)
                  ),
                  eventosModal.tituloModal.value,
                  eventosModal.descripcionModal.value
            )
      );
      localStorage.setItem("evento", JSON.stringify(eventos));
      window.location.reload();
});

/*muestro el calendario*/
mostrarCalendario();

d.querySelectorAll(".evento").forEach((evento) => {
      evento.addEventListener("click", (e) => {
            let eventosdia = [];
            for (i = 0; i < eventos.length; i++) {
                  if (e.target.closest(".dia").value != "") {
                        if (
                              eventos[i].conjunto ==
                              e.target.closest(".dia").value
                        ) {
                              modalBody.innerHTML = "";
                              eventosdia.push(eventos[i]);

                              modalTitulo.innerText = `Eventos del dia ${
                                    eventos[i].dia
                              } de ${MESES[eventos[i].mes]} del  ${
                                    eventos[i].anio
                              }`;
                              modal.show();
                        }
                  }
            }
            eventosdia.forEach((evento) => {
                  /*Desestructuración*/
                  let = { color, titulo, id, descripcion, hora } = evento;
                  modalBody.innerHTML += `
                <div class=" col-12 bg-${color}">
                <h4>${
                      hora.toString().slice(0, 2) +
                      ":" +
                      hora.toString().slice(2, 4)
                } - ${titulo}<img class="papelera" id="${id}" src="imagenes/papelera.png" ></h4>
                <p>${descripcion}</p>
                </div>
                `;
            });
      });
});

d.addEventListener("click", (e) => {
      if (e.target.classList.contains("papelera")) {
            let id = e.target.id;
            eventos = eventos.filter((evento) => {
                  return evento.id != id;
            });
            localStorage.setItem("evento", JSON.stringify(eventos));
            window.location.reload();
      }
});
