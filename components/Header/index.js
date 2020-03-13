// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    // create the elements
    const headerDiv = document.createElement("div");
    const date = document.createElement("span");
    const header = document.createElement("h1");
    const temp = document.createElement("span");

    // set the styles
    headerDiv.classList.add("header");
    date.classList.add("date");
    temp.classList.add("temp");

    // set the content
    date.textContent = "March 13th, 2020";
    header.textContent = "Lambda Times";
    temp.textContent = "30°";

    // put elements together
    headerDiv.appendChild(date);
    headerDiv.appendChild(header);
    headerDiv.appendChild(temp);

    return headerDiv;
}

const entry = document.querySelector(".header-container");
entry.appendChild(Header());
