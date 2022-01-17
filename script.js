// Write your JavaScript code here!

//const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

    /*let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })*/

    //console.log(pickPlanet(myFetch()));
    addDestinationInfo((pickPlanet([
        {
           "name": "Tatooine",
           "diameter": "10465 km",
           "star": "Tatoo I & Tatoo II",
           "distance": "43000 light years from galactic core",
           "image": "https://www.nasa.gov/sites/default/files/images/587837main_Kepler16_transit_art2_full.jpg",
           "moons": 3
        },
        {
            "name": "Pern",
            "diameter": "measurement is under dispute",
            "star": "Alpha Sagittarius (a.k.a. Rukbat)",
            "distance": "Varies - find a library",
            "image": "https://www.nasa.gov/centers/langley/images/content/698148main_Brains_904_2.jpg",
            "moons": 2
        },
        {
            "name": "Saturn/Titan",
            "diameter": "5149.5 km",
            "star": "Sol",
            "distance": "1.4 billion km from Earth",
            "image": "https://solarsystem.nasa.gov/system/resources/detail_files/16278_PIA20016.jpg",
            "moons": 0
        },
        {
            "name": "Mars",
            "diameter": "6779 km",
            "star": "Sol",
            "distance": "225 million km from Earth",
            "image": "https://mars.nasa.gov/system/resources/detail_files/7808_global-color-views-mars-PIA00407-full2.jpg",
            "moons": 2
        },
        {
            "name": "K2-18b",
            "diameter": "34500 km",
            "star": "K2-18",
            "distance": "110 light years from Earth",
            "image": "https://www.nasa.gov/sites/default/files/thumbnails/image/heic1916a.jpg",
            "moons": "unknown"
        },
        {
            "name": "Jupiter/Europa",
            "diameter": "3,121.6 km",
            "star": "Sol",
            "distance": "628.3 million km from Earth",
            "image": "https://apod.nasa.gov/apod/image/1609/Europa_Galileo_960.jpg",
            "moons": 0
        }
    ])))

});

//form submission