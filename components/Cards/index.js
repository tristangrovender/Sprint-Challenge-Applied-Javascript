// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const entry3 = document.querySelector(".cards-container");

axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        // Deal with response data here
        console.log(response.data.articles);
        for (const topic in response.data.articles) {
            response.data.articles[topic].forEach(article => {
                entry3.append(cardCreator(article));
            });
        }
    })
    .catch(error => {
        console.log("ERROR:", error);
    });

function cardCreator(obj) {
    // create the elements
    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const nameSpan = document.createElement("span");

    // set the styles
    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");

    // set the content
    headline.textContent = obj.headline;
    img.src = obj.authorPhoto;
    nameSpan.textContent = `By ${obj.authorName}`;

    // append
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(nameSpan);

    return card;
}
