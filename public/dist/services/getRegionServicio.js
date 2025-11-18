import { regiones } from "../data/info.js";
export async function getRegion(id) {
    console.log('---------------------------------------');
    console.log('Llamada a la funcion GET REGION');
    console.log('--------------------------------------');
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            const region = regiones.find(e => e.id === id)?.nombre;
            if (region) {
                resolve(region);
            }
            else {
                reject(`No hay region para el id ${id}`);
            }
        }, 800);
    });
    return promesa;
}
