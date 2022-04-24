## Informe Práctica 9
### Aplicación de procesamiento de notas de texto

Para la práctica número 9 de la asignatura se nos pide que realicemos un programa que permita crear notas y gestionarlas, pudiendo varios usuarios acceder a la aplicación, pero no a la vez. Eso a gran escala es lo que será esta práctica, más adelante seguiremos con las especificaciones.

Comenzando con la práctica, destacar que la he distribuido en 4 archivos diferentes: index.ts, note_list.ts, note.ts y user.ts

Si miramos al primer archivo, index.ts, este será como nuestro programa principal. En él se definen las diferentes funciones que se pueden realizar con las notas: añadir una nueva, modificar una existente, hacer un append, eliminar una nota, leer una y listar todas las existentes. Un ejemplo de la estructura de las funciones sería la siguiente, que es la función de eliminar, se aprecia como se ve el comando, la descripción... pero además el handler de los argumentos que se reciben.

```
yargs.command({
  command: 'remove',
  describe: 'remove a note',
  builder: {
      user: {
        describe: 'List owner',
        demand: true,
        alias: 'u',
        type: "string"
      },
      title: {
          describe: 'Note title',
          demand: true,
          alias: 't',
          type: "string"
      }
  },
  handler(argv) {
    if ( typeof argv.user === 'string' 
         && typeof argv.title === 'string') {
        const noteList = new NoteList(new User(argv.user));
         noteList.rmNote(argv.title);
    }
  },
});
```

El siguiente archivo a comentar es el note_list.ts, en este archivo es donde se encuentra el código en sí de las funciones que realizan todas las funcionalidades comentadas en el punto anterior. En este están definidos todos los pasos a realizar, es decir, la función en sí, si se requiere crear alguna carpeta o archivo, si se necesita algún cambio de color... todo lo necesario para desarrollar las funciones que se nos exigen. El siguiente ejemplo de la función readNote se ve cómo al principio se trabaja con rutas para acceder al archivo y después los cases con los distintos colores de notas, haciendo uso de chalk.

```
readNote(title: string): void {
    let note: Note;
    const path: string = "./"+this.user.name;
    const noSpaceTitle: string = title.split(" ").join("_");
    const filename: string = path + "/" + noSpaceTitle + ".JSON";
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) {
        console.log(chalk.red.bold("Note does not exists"));
      } else {
        let readed = JSON.parse(data.toString());
        note = new Note(readed["title"],readed["body"],readed["color"]);
        switch(note.color) {
          case "black": {
            console.log(chalk.white.bgBlack.bold(note.title));
            console.log(chalk.white.bgBlack(note.body));
            break;
          }
          case "blue": {
            console.log(chalk.white.bgBlue.bold(note.title));
            console.log(chalk.white.bgBlue(note.body));
            break;
          }
          case "green": {
            console.log(chalk.black.bgGreen.bold(note.title));
            console.log(chalk.black.bgGreen(note.body));
            break;
          }
          case "orange": {
            console.log(chalk.black.redBright.bold(note.title));
            console.log(chalk.black.redBright(note.body));
            break;
          }
          case "pink": {
            console.log(chalk.white.bgMagenta.bold(note.title));
            console.log(chalk.white.bgMagenta(note.body));
            break;
          }
          case "red": {
            console.log(chalk.black.bgRed.bold(note.title));
            console.log(chalk.black.bgRed(note.body));
            break;
          }
          case "yellow": {
            console.log(chalk.black.bgYellow.bold(note.title));
            console.log(chalk.black.bgYellow(note.body));
            break;
          }
          case"white":
          default: {
            console.log(chalk.black.bgWhite.bold(note.title));
            console.log(chalk.black.bgWhite(note.body));
            break;
          }
      }
    }
  });
}
```

El tercero de nuestros archivos es el note.ts. Este archivo es sencillo, puesto que solo aloja la clase Note, con el type de los colores anteriormente. Contiene los atributos como son title, body, color... además de el constructor y la función para pasar a JSON.

```
type NoteColor = "default" | "white" | "red" | 
             "black" | "pink" | "yellow" | 
             "blue" | "green" | "orange"
class Note {
  static empty_entities: number = 0;
  constructor(public title: string = "", 
              public body: string = "", 
              public color: NoteColor | string = "default") {
                if (this.title === "") {
                  Note.empty_entities++;
                  this.title = "Empty note " + Note.empty_entities.toString();
                }
              }
  toJSON(): string {
    return "{\n"+
           "\t\"title\": \""+this.title+"\",\n"+
           "\t\"body\": \""+this.body+"\",\n"+
           "\t\"color\": \""+this.color+"\"\n"+
           "}";
  }
};

export {Note, NoteColor};
```

El último archivo de nuestro directorio src es el user.ts. También es un archivo sencillo, puesto que tiene la clase User solamente. En ella aparecen los atributos, el constructor y dos funciones: la primera genera un ID aleatorio para el usuario, y la segunda comprueba la longitud del ID.

```
class User {
    private id: string;
    constructor(public readonly name: string, id?:string) {
      if (id) {
        this.id = id
        this.checkLength();
      } else {
        this.id = this.genID();
        this.checkLength();
      }
  }
    
    ID(): string {
      return this.id;
    }
  
    private genID(): string {
      let id: string;
      id = Math.floor((Math.random() * 10000) + 1).toString();
      
      return id;
    }
  
    private checkLength(): void {
      if (this.id.length < 4) {
        while(this.id.length < 4) {
          this.id = "0" + this.id;
        }
      }
    }
  };
  
  export {User};
  ```
  
Y con esto ya habríamos visto todo el código de nuestro programa. En la carpeta test podemos ver las pruebas correspondientes a la práctica, mientras que en la carpeta docs tendremos la documentación generada con typedoc. Además, se han utilizado las Github Actions y SonarCloud. 







theme:cayman
