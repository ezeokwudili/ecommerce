const btn = document.getElementById("btn");
const box = document.getElementById("box");
const url = "https://fakestoreapi.com/products";
let container = document.getElementById("container");
let picture = document.getElementById("picture");
let para = document.getElementById("para");
let rootDiv = document.getElementById("root");
// function hideBox() {
//   box.style.display = "none";
// }

// btn.addEventListener("click", () => (box.style.display = "block"));

async function getProducts() {
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
  let rootContent = data
    .map((item) => {
      return `<div class="container">
      <div class="img-container">
          <img src=${item.image} alt=${item.description} id="img"/>
      </div>
      <p class="title">${item.title.substr(0, 25)}</p>
      <p class="price">${item.price}</p>
  </div>`;
    })
    .join("");

  rootDiv.innerHTML = rootContent;
  // console.log(data[4].title);
  // container.innerHTML = data[4].title;
  // picture.setAttribute("src", data[4].image);
  // para.innerHTML = data[5].description;
}

getProducts();