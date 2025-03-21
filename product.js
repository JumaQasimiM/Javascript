// read product from api

const url = 'https://fakestoreapi.com/products';
fetch(url)
  .then(resp => response.json())
  .then(data => displayProducts(data))
  .catch(err=>
    console.log('Error :',err))
// read api function
function displayProducts(products){
  const productLit = document.getElemetById('product');
  products.forEach(product => {
    const item = documentElement('div');
    item.classList.add('product');
    item.innerHTML = `
    
    <h3> ${product.title} <h3/>
    <img src = "${product.image}">
    <p>Price: ${product.price}</p>
    
    ´;
    productLit.appendChild(item);
  });
}
