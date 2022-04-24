import "mocha";
import {expect} from "chai";
import {Note} from "../src/note";

describe("Default Note class tests", ()=> {
  it("Note creation returns no user, empty content and default color", ()=>{
    let defaultNote: Note = new Note();
    expect(defaultNote.title).to.be.eq("Empty note 2");
    expect(defaultNote.body).to.be.eq("");
    expect(defaultNote.color).to.be.eq("default");
    expect(defaultNote.toJSON())
    .to.be.eq(
      "{\n"+
      "\t\"title\": \"Empty note 2\",\n"+
      "\t\"body\": \"\",\n"+
      "\t\"color\": \"default\"\n"+
      "}"
      );
  });
  it("Second note increases the empty note counter", ()=>{
    let defaultNote: Note = new Note();
    expect(defaultNote.title).to.be.eq("Empty note 3");
    expect(defaultNote.body).to.be.eq("");
    expect(defaultNote.color).to.be.eq("default");
  });
});

describe("Note class tests", ()=> {
  it("Note creation returns user, content if inputed andcolor", ()=>{
    let newNote: Note = new Note("Nueva nota", " some new content ", "red");
    expect(newNote.title).to.be.eq("Nueva nota");
    expect(newNote.body).to.be.eq(" some new content ");
    expect(newNote.color).to.be.eq("red");
  });
});