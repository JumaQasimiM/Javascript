// read product from api


fetch('https://fakestoreapi.com/products')
  .then(resp => resp.json())
  .then(data => displayProducts(data))
  .catch(err=>
    console.log('Error :',err));

// read api function
function displayProducts(products){
  const productLit = document.getElementById('product_list');
  productList.innerHTML = 12;
  products.forEach(product => {
    const item = document.createElement('div');
    item.classList.add('product');
    console.log(12);
    item.innerHTML = `
    
    <h3> ${product.title} <h3/>
    <img src = "${product.image}">
    <p>Price: ${product.price}</p>
    
    ´;
    productLit.appendChild(item);
  });
}
