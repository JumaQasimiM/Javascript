// read product from api


fetch('https://fakestoreapi.com/products')
  .then(resp => response.json())
  .then(data => displayProducts(data))
  .catch(err=>
    console.log('Error :',err));

// read api function
function displayProducts(products){
 
}
