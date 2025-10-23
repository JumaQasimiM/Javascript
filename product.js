// read product from api

fetch("https://fakestoreapi.com/products?limit=12")
  .then((resp) => resp.json())
  .then((data) => displayProducts(data))
  .catch((err) => console.log("Error :", err));

// // read api function
function displayProducts(products) {
  const productLit = document.getElementById("product_list");

  products.forEach((product) => {
    const item = document.createElement("div");

    item.classList.add("product");

    item.innerHTML = ` 
   
    <div id='product' class='flex flex-col justify-center items-center shadow-lg'>
        <a href='pages/products/${product.id}'>
        <img src = "${product.image}"class='w-full h-56'>
    </a>
        <div class='w-full h-30 text-center'>
          <h3 class='title'> ${product.title.slice(0, 40)} <h3/> 
          <p class='price'> ${product.price} $</p>
          <button class='bg-gray-200 btn'>Add to Cart</button>
        </div>
      </div>
  
    `;

    productLit.appendChild(item);
  });
}
// for menu bar
const menubar = document.querySelector(".menu-bar");
menubar.addEventListener("click", () => {
  console.info("menu bar clicked");
  const ul = document.querySelector("ul");
  ul.classList.toggle("open");
  if (ul.classList.contains("open")) {
    menubar.innerHTML = "x";
  } else {
    menubar.innerHTML = "⫩";
  }
});
