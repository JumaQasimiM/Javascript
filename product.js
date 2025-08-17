// read product from api


fetch('https://fakestoreapi.com/products?limit=4')
  .then(resp => resp.json())
  .then(data => displayProducts(data))
  .catch(err =>
    console.log('Error :', err));

// // read api function
function displayProducts(products) {
  const productLit = document.getElementById('product_list');


  products.forEach(product => {

    const item = document.createElement('div');

    item.classList.add('product');

    item.innerHTML =
      ` 
 
   <div id='product' class='product-card'>
      <img src = "${product.image}" class='img'>
      <h3 class='title'> ${product.title} <h3/> 
      <p class='price'> ${product.price} $</p>
      <button class='btn'>Add to Cart</button>
    </div>
    `;


    productLit.appendChild(item);
  });
};
// for menu bar
const menubar = document.querySelector('.menu-bar');
menubar.addEventListener('click', () => {
  console.info('menu bar clicked');
  const ul = document.querySelector('ul');
  ul.classList.toggle('open');
  if (ul.classList.contains('open')) {
    menubar.innerHTML = '👆🏾';
  } else {
    menubar.innerHTML = '👇🏾';
  }
})