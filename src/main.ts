import { getPais } from "./services/getPaisService";
import { getRegion } from "./services/getRegionServicio"


const btn = document.getElementById("paisNumber") 
const salida = document.getElementById("paises") 

function getIdFromButton(): number |undefined {
    console.log("---------------------------------------");
    console.log("Llamada a la función GET ID FROM BUTTON");
    console.log("---------------------------------------");

    const input = prompt("Introduce un número de pais (1-3)");
    const id = Number(input);
    if(Number.isNaN(id)){
        alert("No has introduccido un numero");
        return;
    }
    return id;
}
function findPais(id: number): void {
    console.log('---------------------------------------');
    console.log('Llamada a la función GET PAIS');
    console.log('--------------------------------------');

    const salida = document.getElementById('pais'); // Asegúrate que exista un elemento con id="salida"
    if (!salida) return; // Si no existe, salimos

    Promise.all([getPais(id), getRegion(id)])
        .then(([pais, region]: [string, string]) => {
            console.log('PROMISE RESOLVE, PASO POR EL THEN');
            console.log(pais, 'pais');
            console.log(region, 'region');

            const p: HTMLParagraphElement = document.createElement('p');
            p.textContent = `El país buscado es ${pais} con la región: ${region}`;
            salida.replaceChildren(p);
        })
        .catch((err: unknown) => {
            console.log('PROMISE REJECT, PASO POR EL CATCH');
            console.error(err);
            salida.textContent = typeof err === 'string' ? err : 'Ocurrió un error';
        });
}
if (btn) {
    btn.addEventListener("click", () => {
        try {
            const id = getIdFromButton();
            if (id !== undefined) findPais(id);
        } catch (error) {
            const message = error instanceof Error ? error.message : "Error inesperado";
            if (salida) salida.textContent = message;
        }
    });
}