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
 async function findPais(id){
         console.log('---------------------------------------')
         console.log('Llamada a la funcion FIND PAIS')
         console.log('--------------------------------------')
         try {
             const pais = await getPais(id)
             const region= await getRegion(id)
             console.log(pais, 'pais')
             console.log(region,'region')
             salida.textContent= `El pais buscado es:  ${pais} con la region : ${region}`
     } catch (error) {
             console.log(error, 'ERROR')
             salida.textContent=error
     }
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
