// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty"
    } else if (Number.isNaN(Number(testInput))) {
        return "Not a Number"
    } else {
        return "Is a Number"
    };
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) { //what does this list represent?
    
}

function formSubmission() {
    //get values
    pilot = document.getElementById("pilotName").value;
    copilot = document.getElementById("copilotName").value;
    fuelLevel = document.getElementById("fuelLevel").value;
    cargoMass = document.getElementById("cargoMass").value;

    console.log([pilot, copilot, fuelLevel, cargoMass]);

    //validation
    //TODO add prevenDefault()'s
    if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        window.alert("Please enter a valid name for pilot and copilot");
        event.preventDefault();
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number") {
        window.alert("Please enter a number for fuel level and cargo mass");
        event.preventDefault();
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
