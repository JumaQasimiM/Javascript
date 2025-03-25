// read product from api


fetch('https://fakestoreapi.com/products')
  .then(resp => resp.json())
  .then(data => displayProducts(data))
  .catch(err=>
    console.log('Error :',err));

