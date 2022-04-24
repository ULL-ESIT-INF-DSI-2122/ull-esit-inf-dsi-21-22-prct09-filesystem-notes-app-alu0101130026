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