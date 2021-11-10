async function addToBasket(id) {
    // basket function
    //console.log(id);
    
      console.log(id)
      localStorage.setItem( "basket", JSON.stringify([id]))
  }