/**
 * Adds a product ID to basket
 * @param string id 
 */
async function addToBasket(id) {
  /*
    1. Get all current basket ids into an array, productIds: [] or [1, 2, 3]
    2. Push the new product ID to the productIds array
    3. Save the new array back to localStorage
  */


 // get current productIds from the basket
  currentProducts = JSON.parse(localStorage.getItem("basket"));

  // if there are no productIds (null), create empty array
  if ( !currentProducts ) {
    currentProducts = []
  }

  // add product ID to array
  currentProducts.push(id)

  localStorage.setItem("basket", JSON.stringify(currentProducts));

  //console.log(JSON.parse(localStorage.getItem("basket")))

  // addProduct = JSON.stringify(currentProducts)
  // addProduct 
  // console.log(currentProducts)
  // localStorage.setItem("product", JSON.stringify([newProduct]));
  // currentProducts = JSON.parse(localStorage.getItem("product")) // gets current IDs
  // currentProducts.push(newProduct)
  // localStorage.setItem("basket", JSON.stringify([currentProducts]));
}


// async function addToBasket(id) {
//   console.log(id);
//   var newProduct = id;
//   currentProducts = JSON.parse(localStorage.getItem("basket"))
//   localStorage.setItem("basket", JSON.stringify([currentProducts]));
//   currentProducts.push(newProduct)
// }

async function removeFromBasket(id){

  currentProducts = JSON.parse(localStorage.getItem("basket"));
  currentProducts = currentProducts.filter(item => item !== id);
  localStorage.setItem("basket", JSON.stringify(currentProducts));
  window.location.reload();
}