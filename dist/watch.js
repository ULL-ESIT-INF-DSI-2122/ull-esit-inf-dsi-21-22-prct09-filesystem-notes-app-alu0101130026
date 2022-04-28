"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const suma_1 = require("./suma");
const fs_1 = require("fs");
/**
 * Función que observa los posibles cambios en el archivo prueba.txt
 */
(0, fs_1.watch)("../src/prueba.txt", { persistent: true }, (eventType, fileName) => {
    if (eventType === 'change') {
        (0, suma_1.add)();
    }
});
