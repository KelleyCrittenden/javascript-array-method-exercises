//FOR EACH Lightning Exercise: Add another section sibling to the current one and use object dot notation to display each company's city. Use square bracket notation to display the state code. Use dynamic square bracket notation to add the zip code.

import businesses from "./data.js"

const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"

businesses.forEach(business => {
  outEl.innerHTML += `
    <h2>${business.companyName}</h2>
    
      <section>
          ${business.addressFullStreet}
      </section>
      <section>
        ${business.addressCity}
      </section>
      <section>
        ${business["addressStateCode"]}
      </section>
      <section>
        ${business['addressZipCode']}
      </section>
  `
  outEl.innerHTML += "<hr/>"
});


///////////////////////////////////////////////////////


//FILTER Lightning Exercise: Use filter() to create another array named manufacturingBusinesses that will contain all businesses in the manufacturing industry. Display those to the DOM.


// Array to contain all the New York businesses


const newYorkBusinesses = businesses.filter(business => {
  let inNewYork = false

  if (business.addressStateCode === "NY") {
      inNewYork = true
  }

  return inNewYork
})

console.log("New York Businesses", newYorkBusinesses)

// Array to contain all New York businesses that are in the Manufacturing Industry
const manufacturingBusinesses = businesses.filter(business => {
  let  inManufacturingBusiness = false

  if (business.companyIndustry === "Manufacturing") {
      inManufacturingBusiness = true
  }

  return inManufacturingBusiness
})

console.log("New York Manufacturing Businesses", manufacturingBusinesses)



//////////////////////////////////////////////////////

//MAP Lightning Exercise: Instead of just returning the purchasing agent object, return a new object that has the full name of the purchasing agent, the company name, and the phone number. The data structure is shown below. Use that new data structure to display the agent with their company and phone number

outEl.innerHTML += "<h1>Purchasing Agents</h1>";

/*
    Using map(), you extract the purchasing agent object
    from each business and store it in a new array
*/
const agents = businesses.map(business => {
  const  agent = {
      fullName: business.purchasingAgent,
      companyName: business.companyName,
      phoneWork: business.phoneWork
  }
  return agent
})

console.table(agents)

agents.forEach(agent => {
  outEl.innerHTML += `<h2>${agent.fullName.nameFirst} ${agent.fullName.nameLast}</h2>`;
  outEl.innerHTML += `<h4>${agent.companyName}</h4>`;
  outEl.innerHTML += `<h4>${agent.phoneWork}</h4>`; 
  outEl.innerHTML += "<hr/>";
});



///////////////////////////////////////////////////////

//SEARCH BUTTON Lightning Exercise 1: Refactor your code to search for purchasing agents instead. If the search text is found in the first name of any purchasing agent, show that agent.

document.querySelector("#search").innerHTML = `<input type="text" placeholder="Enter agent name" id="agentSearch" />`

document
    .querySelector("#agentSearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
            const foundAgent = agents.find(
                agent =>
                    agent.purchasingAgent.nameLast.includes(keyPressEvent.target.value) || agent.purchasingAgent.nameLast.includes(keyPressEvent.target.value)
            );

            outEl.innerHTML = `
                <h2>
                ${foundAgent.nameFirst}
                </h2>
                <section>
                ${foundAgent.nameLast}
                </section>
    
            `;
        }
    });



    //////////////////////////////////////////////////////////////

    // REDUCE METHOD Lightning Exercise 1: Use the reduce method on the following array to determine how much total rain fell last month.

    const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

    const totalRainfall = monthlyRainfall.reduce(
      (currentTotal, nextValue) => currentTotal += nextValue,0
    )
    
    console.log(totalRainfall)


    //////////////////////////////////////////////////////////////

    //REDUCE MEHTOD Lightning Exercise 2: Use the reduce method on the following array to build a sentence.

    const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

const sentence = words.reduce(
  (currentTotal, nextValue) => currentTotal += nextValue
)

console.log(sentence)
  