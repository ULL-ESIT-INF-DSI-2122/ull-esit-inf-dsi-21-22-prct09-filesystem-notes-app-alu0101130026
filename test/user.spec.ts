import "mocha";
import {expect} from "chai";
import {User} from "../src/user"

describe("User class tests", ()=> {
  let testUser: User = new User("Diego"); 
  it("User must have a name", ()=>{
    expect(testUser.name).to.be.eq("Diego");
  }) 
  it("User must have random acurate ID", ()=>{
    expect(testUser.ID().length).to.be.eq(4);
    expect(typeof Number(testUser.ID())).to.be.not.eq("NaN");
  })
   
  it("Pre ID user", ()=>{

  let tinyIdUser: User = new User("Diego", "2");
    expect(tinyIdUser.ID().length).to.be.eq(4);
    expect(typeof Number(testUser.ID())).to.be.not.eq("NaN");
  })
})
