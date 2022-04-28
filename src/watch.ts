import { add } from "./suma";
import { watch } from "fs";

/**
 * Función que observa los posibles cambios en el archivo prueba.txt
 */

watch("../src/prueba.txt", { persistent: true }, (eventType, fileName) => {
    if (eventType === 'change') {
     add();
    }
  }); 