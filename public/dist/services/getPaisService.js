import { paises } from "../data/info.js";
export async function getPais(id) {
    console.log("----------------------------------");
    console.log("Llamada a la función GET PAISES");
    console.log("----------------------------------");
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            const pais = paises.find(e => e.id === id)?.nombre;
            if (pais) {
                resolve(pais);
            }
            else {
                reject(`Pais con id ${id} no existe`);
            }
        }, 800);
    });
    return promesa;
}
