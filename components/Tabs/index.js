// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const entry2 = document.querySelector(".topics");

axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        response.data.topics.forEach(topic => {
            entry2.appendChild(Tab(topic));
        });
        console.log("Response:", response);
    })
    .catch(error => {
        console.log("ERROR:", error);
    });

function Tab(lambdaObj) {
    // create the elements
    const tab = document.createElement("div");

    // set the styles
    tab.classList.add("tab");

    // set the content
    tab.textContent = lambdaObj;

    return tab;
}
