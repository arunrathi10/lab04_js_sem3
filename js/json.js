/* STEP 2: Reference the HEADER and the SECTION elements with variables */
const pageHeader = document.querySelector('header');
const contentSection = document.querySelector('section');

// STEP 3a: Create the asynchronous function populate()
async function populate () {
    

    // Introducing JavaScript Object Notation (JSON): https://json.org/
    // STEP 4: Store the URL of a JSON file in a variable */
    const jsonUrl = 'js/i-scream.json';
    // path to the local JSON file
    
    // STEP 5: Use the new URL to create a new request object
    const request = new Request(jsonUrl); // Created a Request object for the JSON
    
    // STEP 6: Make a network request with the fetch() function, which returns a Response object
    const jsonRespons = await fetch(request); // Fetching the data from JSON file
    
    // STEP 7: Capture the returned Response object and covert to a JSON object using json()
    const iceCreamInfo = await jsonRespons.json();
    
    // STEP 8: Output the iScream JSON object to the console 
    console.log(iceCreamInfo);

    // STEP 9a: Invoke the populateHeader function here, then build it below
    populateHeader(iceCreamInfo); // Calling function to populate the header
    
    // STEP 10a: Invoke the showTopFlavors function here, then build it below
    showTopFlavors(iceCreamInfo);  // Calling function to show flavors in the section
}
 


// STEP 3b: Call the populate() function
populate();


/* STEP 9b: Build out the populateHeader() function */
function populateHeader(data) {
    // Create the H1 element
    const heading = document.createElement('h1');
    // Grab the company name from the JSON object and use it for the text node
    heading.textContent = data.companyName; // Set text from JSON data
    
    // Inject the complete H1 element into the DOM, inside the HEADER
    const infoParagraph = document.createElement('p');
    infoParagraph.textContent = `Head Office: ${data.headOffice} | Established: ${data.established}`; // Add <h1> to <header>
    pageHeader.appendChild(heading); // Add <p> to <header>
    pageHeader.appendChild(infoParagraph);
};

/* STEP 10b: Assemble the showTopFlavors() function */
function showTopFlavors(data) {
    // STEP 10c: Attache the JSON topFlavors object to a variable
    const flavorList = data.topFlavors; // Store list of flavor objects

    // STEP 10d: Loop through the topFlavors object
    flavorList.forEach(flavor => {

        // STEP 10e: build HTML elements for the content
        const flavorCard = document.createElement('article');
        const flavorTitle = document.createElement('h2');
        const flavorImage = document.createElement('img');
        const calorieInfo = document.createElement('p');
        const flavorType = document.createElement('p');
        const ingredientsHeading = document.createElement('p');
        const ingredientList = document.createElement('ul');
        

        // STEP 10f: Set the textContent property for each of the above elements (except the UL), based on the JSON content
        flavorTitle.textContent = flavor.name;
        calorieInfo.textContent = `Calories: ${flavor.calories}`;
        flavorType.textContent = `Type: ${flavor.type}`;
        ingredientsHeading.textContent = "Ingredients:";
        flavorImage.src = `images/${flavor.image}`;
        flavorImage.alt = flavor.name;
        

        // STEP 10g: Build a loop for the ingredients array in the JSON
        flavor.ingredients.forEach(item => {
            const ingredientItem = document.createElement('li'); // Each ingredient as <li>
            ingredientItem.textContent = item; // Set ingredient name
            ingredientList.appendChild(ingredientItem); // Add to <ul>
        });
        
            

        // STEP 10h: Append each of the above HTML elements to the ARTICLE element
        flavorCard.appendChild(flavorTitle);
        flavorCard.appendChild(flavorImage);
        flavorCard.appendChild(calorieInfo);
        flavorCard.appendChild(flavorType);
        flavorCard.appendChild(ingredientsHeading);
        flavorCard.appendChild(ingredientList);
        
        // STEP 10i: Append each complete ARTICLE element to the SECTION element
        contentSection.appendChild(flavorCard); // Added flavor card to the main section
    }); 
};
// STEP 11: The instructor will edit the JSON file - refresh your page to see the updated content

// STEP 12: Change the URL in STEP 3 to point to the JSON file in the local /js folder in order to prepare for today's lab
/*
  Attribution:-----
  All used sources in this Assignment
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
  https://javascript.info/fetch
  https://www.w3schools.com/jsref/met_node_appendchild.asp
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  https://www.w3schools.com/js/js_json.asp
  and weekly learning content
  */

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

// A special thanks to https://openclipart.org/detail/285225/ice-cream-cones for the awesome ice cream cone illustrations
