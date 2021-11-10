/**
 * Adds a product ID to basket
 * @param string id 
 */
async function addToBasket(id) {
  console.log(id);
  localStorage.setItem("basket", JSON.stringify([id]));
}
