// Write your helper functions here!
require('isomorphic-fetch');

/*function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   
} */

function addDestinationInfo(planetObject) {
    document.getElementById("missionTarget").innerHTML = `
    <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${planetObject.name}</li>
                    <li>Diameter: ${planetObject.diameter}</li>
                    <li>Star: ${planetObject.star}</li>
                    <li>Distance from Earth: ${planetObject.distance}</li>
                    <li>Number of Moons: ${planetObject.moons}</li>
                </ol>
                <img src=${planetObject.image}>
    `
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

/* this is the template for formSubmission provided with the lesson. I was not sure how to proceed. 
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) { //what does this list represent?
    
}*/

function formSubmission() {
    //prevent page from reloading
    event.preventDefault(); //event is deprecated, but it is working and required to prevent page from reloading

    //get values
    pilot = document.getElementById("pilotName").value;
    copilot = document.getElementById("copilotName").value;
    fuelLevel = document.getElementById("fuelLevel").value;
    cargoMass = document.getElementById("cargoMass").value;

    //validation
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
        window.alert("Please complete all 4 fields");
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number") {
        window.alert("Please enter a number for fuel level and cargo mass");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        window.alert("Please enter a valid name for pilot and copilot")    
    } else {
        //updating pilot and copilot names
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`

        //update if fuel level is too low
        if (Number(fuelLevel < 10000)) {
            document.getElementById("faultyItems").style.visibility = "visible"
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch"
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
            document.getElementById("launchStatus").style.color = "red"
        }
    
        //update if cargo mass is too high
        if (Number(cargoMass) > 10000) {
            document.getElementById("faultyItems").style.visibility = "visible"
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch"
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
            document.getElementById("launchStatus").style.color = "red"
        }

        //update if ready for launch
        if (Number(fuelLevel > 10000) && Number(cargoMass) < 10000) {
            document.getElementById("launchStatus").innerHTML = "Shuttle is ready for Launch"
            document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch"
            document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch"
            document.getElementById("launchStatus").style.color = "green"
        }
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then(function(json) {
            console.log(json);
        })
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let selectedPlanet = planets[Math.floor(Math.random() * planets.length)];
    return selectedPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
