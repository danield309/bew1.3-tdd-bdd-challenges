// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  // should return the area
  return w*h
}

const perimeter = (w, h) => {
  // should return the perimeter
  return(w+h)*2
}

const circleArea = r => {
  // should return the area of the circle
  return Math.PI * r * r
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  // should return the current state of shopping cart
  return shoppingCart
}

const addItemToCart = (item) => {
  // should add item to shopping cart
  for (cartObject of shoppingCart) {
    if (cartObject.name == item.name) {
      cartObject.quantity += item.quantity
      shoppingCart.push(item)
    }
  }
}

const getNumItemsInCart = () => {
  // should return the total quantity of items in cart
  cartTotal = 0
  shoppingCart.forEach((item) => {
    cartTotal += item.quantity
  })
  return cartTotal
}

const removeItemFromCart = (item) => {
  // should remove item from shopping cart
  for (cartObject of shoppingCart) {
    if (cartObject.name === item.name) {
      shoppingCart.pop(cartObject)
      return
    }
  }
  
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart
}
// Finished challenges