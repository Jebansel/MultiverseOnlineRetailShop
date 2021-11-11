/**
 * Adds a product ID to basket
 * @param string id 
 */
async function addToBasket(id) {
 // get current productIds from the basket
  currentProducts = JSON.parse(localStorage.getItem("basket"));
  // if there are no productIds (null), create empty array
  if ( !currentProducts ) {
    currentProducts = []
  }
  // add product ID to array
  currentProducts.push(id)
  localStorage.setItem("basket", JSON.stringify(currentProducts));
}

async function removeFromBasket(id){
  currentProducts = JSON.parse(localStorage.getItem("basket"));
  currentProducts = currentProducts.filter(item => item !== id);
  localStorage.setItem("basket", JSON.stringify(currentProducts));
  window.location.reload();
}