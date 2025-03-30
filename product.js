// read product from api


fetch('https://fakestoreapi.com/products?limit=4')
  .then(resp => resp.json())
  .then(data => displayProducts(data))
  .catch(err=>
    console.log('Error :',err));

// // read api function
function displayProducts(products){
  const productLit = document.getElementById('product_list');
  
  
  products.forEach(product => {
    
    const item = document.createElement('div');
    
    item.classList.add('product');

    item.innerHTML =
   ` <div id='product'><h3 class='text-blue-600 text-center p-3'> ${product.title} <h3/> 
    <img src = "${product.image}" class='rounded' width='200' height='200'> <p>Price: ${product.price}</p>
    <button>Add</button>
    </div>
    `;


    productLit.appendChild(item);
  });
};
