/* 
Surf naar de "coffee API" op https://sampleapis.com/api-list/coffee
Zoek naar de correct url met endpopint waarbij je 20 resultaten van hot-coffee-recepten in een json-file te zien krijgt.
Test of je de correcte endpoint hebt in Postman. Pas nadien "fetch" je de correcte link naar de API in de code hieronder.
*/

fetch('')
    .then(function (response) {
        // nakijken of de API-call een antwoord terugstuurt
        if (response.ok) {
            // als de status "ok" (=200) is, dan wordt het antwoord omgezet in JSON
            return response.json();
        } else {
            // als de status niet "ok" is, geef dan de status terug en annuleer het uitvoeren
            return Promise.reject(response.status);
        }
    })

    .then(function (response) {
        // lees het volledige antwoord uit in de console
        console.log(response);
        // plaats een section met grid
        let html = '<div class="accordion accordion-flush" id="accordionExample">';
        // plaats van de recepten met naam, ingerdiënten, afbeelding,... in HTML
        console.log(response.length);
        for (let i = 0; i < response.length-2; i++) {
            const recipe = response[i];
            html += `<div class="accordion-item">

            <h2 class="accordion-header">
                <button class="accordion-button collapsed text-uppercase fs-6 fw-bolder pt-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
                `/* Laadt hieronder de titel van het recept in. Haal deze groene tekst, inclusief backticks weg om het geheel te doen werken. */`
                ${}
                </button>
              </h2>

              <div id="collapse${i}" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              `/* Laadt hieronder de juiste "keys" van het recept in. Haal deze groene tekst, inclusief backticks weg om het geheel te doen werken.*/`
              <img src="      " class="float-start" alt="        "><span class="h6 mt-2">ingrediënten</span>:            <hr><span class="h6  mt-2">bereiding</span>:         </div>
            </div>
      </div>`;
        }
        html += '</div>';
        document.getElementById("recepten").innerHTML = html;
    })

    .catch(function (error) {
        // indien er een fout is, toon in de console dan wat er misloopt
        console.error("Error with message: " + error)
    });