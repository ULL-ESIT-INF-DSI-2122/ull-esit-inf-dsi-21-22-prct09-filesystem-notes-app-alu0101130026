import {readFile} from 'fs';

/**
 * Función que realiza la suma de los elementos del fichero prueba.txt
 */

export function add(): void{
    let aux: number;
    readFile("../src/prueba.txt", (_, data) => {
        for (let index = 1; index < data.length; index++) {
            aux += data[index];
        }
        console.log(`${aux}`);
        return aux;
    });
}