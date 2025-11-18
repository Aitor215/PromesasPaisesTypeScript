import { getPais } from "./services/getPaisService.js";
import { getRegion } from "./services/getRegionServicio.js";
const btn = document.getElementById("paisNumber");
const salida = document.getElementById("paises");
function getIdFromButton() {
    console.log("---------------------------------------");
    console.log("Llamada a la función GET ID FROM BUTTON");
    console.log("---------------------------------------");
    const input = prompt("Introduce un número de pais (1-3)");
    const id = Number(input);
    if (Number.isNaN(id)) {
        alert("No has introduccido un numero");
        return;
    }
    return id;
}
function findPais(id) {
    console.log('---------------------------------------');
    console.log('Llamada a la función GET PAIS');
    console.log('--------------------------------------');
    const salida = document.getElementById('salida'); // Asegúrate que exista un elemento con id="salida"
    if (!salida)
        return; // Si no existe, salimos
    Promise.all([getPais(id), getRegion(id)])
        .then(([pais, region]) => {
        console.log('PROMISE RESOLVE, PASO POR EL THEN');
        console.log(pais, 'pais');
        console.log(region, 'region');
        const p = document.createElement('p');
        p.textContent = `El país buscado es ${pais} con la región: ${region}`;
        salida.replaceChildren(p);
    })
        .catch((err) => {
        console.log('PROMISE REJECT, PASO POR EL CATCH');
        console.error(err);
        salida.textContent = typeof err === 'string' ? err : 'Ocurrió un error';
    });
}
btn.addEventListener("click", () => {
    console.log("----------------------------------------");
    console.log("Llamada a la función ADD EVENT LISTENER");
    console.log("----------------------------------------");
    try {
        const id = getIdFromButton();
        if (id != undefined)
            findPais(id);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "Error inesperado";
        salida.textContent = message;
    }
});
