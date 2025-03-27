/* STEP 2: Reference the HEADER and the SECTION elements with variables */
const pageHeader = document.querySelector('header');
const contentSection = document.querySelector('section');

// STEP 3a: Create the asynchronous function populate()
async function populate () {
    

    // Introducing JavaScript Object Notation (JSON): https://json.org/
    // STEP 4: Store the URL of a JSON file in a variable */
    const jsonUrl = 'js/i-scream.json';
    
    // STEP 5: Use the new URL to create a new request object
    const request = new Request(jsonUrl);
    
    // STEP 6: Make a network request with the fetch() function, which returns a Response object
    const jsonRespons = await fetch(request);
    
    // STEP 7: Capture the returned Response object and covert to a JSON object using json()
    const iceCreamInfo = await jsonRespons.json();
    
    // STEP 8: Output the iScream JSON object to the console 
    console.log(iceCreamInfo);

    // STEP 9a: Invoke the populateHeader function here, then build it below
    populateHeader(iceCreamInfo);
    
    // STEP 10a: Invoke the showTopFlavors function here, then build it below
    showTopFlavors(iceCreamInfo);
} 


// STEP 3b: Call the populate() function
populate();


/* STEP 9b: Build out the populateHeader() function */
function populateHeader(data) {
    // Create the H1 element
    const heading = document.createElement('h1');
    // Grab the company name from the JSON object and use it for the text node
    heading.textContent = data.companyName;
    
    // Inject the complete H1 element into the DOM, inside the HEADER
    const infoParagraph = document.createElement('p');
    infoParagraph.textContent = `Head Office: ${data.headOffice} | Established: ${data.established}`;
    pageHeader.appendChild(heading);
    pageHeader.appendChild(infoParagraph);
};

/* STEP 10b: Assemble the showTopFlavors() function */
function showTopFlavors(data) {
    // STEP 10c: Attache the JSON topFlavors object to a variable
    const flavorList = data.topFlavors;

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
        
            // add the ingredient to the UL

        // STEP 10h: Append each of the above HTML elements to the ARTICLE element
        
        // STEP 10i: Append each complete ARTICLE element to the SECTION element
    }); 
};
// STEP 11: The instructor will edit the JSON file - refresh your page to see the updated content

// STEP 12: Change the URL in STEP 3 to point to the JSON file in the local /js folder in order to prepare for today's lab

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

// A special thanks to https://openclipart.org/detail/285225/ice-cream-cones for the awesome ice cream cone illustrations
