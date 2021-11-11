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
  window.alert("Item Added to Basket");
}

async function removeFromBasket(id){
  currentProducts = JSON.parse(localStorage.getItem("basket"));
  currentProducts = currentProducts.filter(item => item !== id);
  localStorage.setItem("basket", JSON.stringify(currentProducts));
  window.alert("Item Removed from Basket");
  window.location.reload();
}

async function purchase() {
  localStorage.clear("basket")
  window.alert("Thank you for your purchase. Expect a delivery in the next 10 seconds :)");
  window.location.reload()
}