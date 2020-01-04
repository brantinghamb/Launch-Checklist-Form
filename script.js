window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
       event.preventDefault();

       let pilotName = document.querySelector("input[name=pilotName]");
       let copilotName = document.querySelector("input[name=copilotName]");
       let fuelLevel = document.querySelector("input[name=fuelLevel]");
       let cargoMass = document.querySelector("input[name=cargoMass]");

       if (isNaN(cargoMass.value) || isNaN(fuelLevel.value)) {
           alert("Make sure to select valid inputs!");
       }

       if (
       isNaN(pilotName.value) === false ||
       isNaN(copilotName.value) === false
       ) {
           alert("Make sure to select valid inputs!");
       }

       if (
       pilotName.value === "" ||
       copilotName.value === "" ||
       cargoMass.value === "" ||
       fuelLevel.value === ""
       ) {
           alert("All fields are required!");
       }

       document.getElementById(
       "copilotStatus"
       ).innerHTML = `Co-pilot ${copilotName.value} Ready.`;
       document.getElementById(
       "pilotStatus"
       ).innerHTML = `Pilot ${pilotName.value} Ready.`;

       if (fuelLevel.value < 10000) {
           document.getElementById("faultyItems").style.visibility = "visible";
           document.getElementById("launchStatus").innerHTML =
               "Shuttle not ready for launch";
           document.getElementById("launchStatus").style.color = "Red";
           document.getElementById("fuelStatus").innerHTML =
               "There is not enough fuel for the journey.";
       }

       if (cargoMass.value > 10000) {
           document.getElementById("faultyItems").style.visibility = "visible";
           document.getElementById("launchStatus").innerHTML =
               "Shuttle not ready for launch";
           document.getElementById("launchStatus").style.color = "Red";
           document.getElementById("cargoStatus").innerHTML =
               "There is too much mass for the shuttle to take off.";
       }

       if (fuelLevel.value >= 10000 && cargoMass.value <= 10000) {
           document.getElementById("faultyItems").style.visibility = "visible";
           document.getElementById("launchStatus").innerHTML =
               "Shuttle is ready for launch.";
           document.getElementById("launchStatus").style.color = "Green";
       }
   });
   });

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(
   function(response) {
       response.json().then(function(missions) {
       const mission = missions[0];
       const div = document.getElementById("missionTarget");
       div.innerHTML = `
                       <ol>
                           <li>Name: ${mission.name}</li>
                           <li>Diameter: ${mission.diameter}</li>
                           <li>Star: ${mission.star}</li>
                           <li>Distance From Earth:${mission.distance}</li>
                           <li>Number of Moons: ${mission.moons}</li>
                           <img src="${mission.image}" alt="space image">
                       </ol>
                   `;
       });
   }
   );