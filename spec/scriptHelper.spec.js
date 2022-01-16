const scriptHelper = require('../scriptHelper.js');

describe("validateInput", function(){

    it(" takes in a string and returns \"Empty\", \"Not a Number\", or \"Is a Number\" as appropriate", function(){
        let testInput = "";
        expect(scriptHelper.validateInput(testInput)).toEqual("Empty");

        testInput = "test"
        expect(scriptHelper.validateInput(testInput)).toEqual("Not a Number");

        testInput = "123"
        expect(scriptHelper.validateInput(testInput)).toEqual("Is a Number");
    });

});

describe("formSubmission", function() {

    it("will take in a document parameter and strings representing the pilot, co-pilot, fuel level, and cargo mass", function(){
        
    });

});