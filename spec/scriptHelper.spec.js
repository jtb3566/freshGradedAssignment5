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

    it("will take in a document parameter and strings representing the form fields", function(){

    });

    /*describe("will update the list of shuttle requirements ", function(){
        

        it("pilotStatus and copilotStatus will include their name", function(){
        
        });

        it("If the user submits a fuel level that is too low updates faultyItems", function(){
        
        });

        it("If the user submits a fuel level that is too low updates launchStatus", function(){
        
        });

        it("will update pilotStatus and copilotStatus to include their name", function(){
        
        });

        it("If the shuttle is ready to launch updates launchStatus", function() {
        
        });

    });*/

});