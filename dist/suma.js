"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
const fs_1 = require("fs");
/**
 * Función que realiza la suma de los elementos del fichero prueba.txt
 */
function add() {
    let aux;
    (0, fs_1.readFile)("../src/prueba.txt", (_, data) => {
        for (let index = 1; index < data.length; index++) {
            aux += data[index];
        }
        console.log(`${aux}`);
    });
}
exports.add = add;
