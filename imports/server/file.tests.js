import fs from 'fs'
import { describe, it , MochaRunner } from 'meteor/practicalmeteor:mocha'
import { expect } from "meteor/practicalmeteor:chai"

var npmFs = Npm.require("fs");

describe("fs module", ()=>{

  console.log('IS SERVER', Meteor.isServer);
  console.log('Version', MochaRunner.VERSION);
  console.log(Object.getOwnPropertyNames(fs));

  it("should work as expected", ()=>{
    expect(npmFs).to.equal(fs);
  })
  
});
