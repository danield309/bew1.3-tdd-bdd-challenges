const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================

it("should return the area of a rectangle", function() {
  const areaRectangle = utils.area(3.5, 2)
  expect(areaRectangle).to.be.a("number")
  expect(areaRectangle).to.equal(7)
})

it('should return area as null', function () {
  const area = utils.area(-1, 10)
  expect(area).to.be.null
})

it("should return the area of a circle", function() {
  const areaCircle = utils.circleArea(1)
  expect(areaCircle).to.be.a("number")
  expect(areaCircle).to.equal(Math.PI)
})

it("shouldn't return the area of a rectangle with negative dimensions", function() {
  const areaRectangle = utils.area(-2.5, 4)
  expect(areaRectangle).to.be.a("null")
  expect(areaRectangle).to.equal(null)
})

it('should return perimeter as null', function () {
  const perimeter = utils.perimeter(-3, 10)
  expect(perimeter).to.be.null
})

it("shouldn't return the area of a rectangle with negative dimensions", function() {
  const areaRectangle = utils.area(-4.5, -1)
  expect(areaRectangle).to.be.a("null")
  expect(areaRectangle).to.equal(null)
})

it('should return the radius of a circle', function () {
  const circleArea = utils.circleArea(3)
  expect(circleArea).to.be.a('number')
  expect(circleArea).to.equal((Math.PI * 3) ** 2)
})
it("shouldn't return the perimeter of a rectangle with negative dimensions", function() {
  const perimeterRectangle = utils.perimeter(-4.5, -5)
  expect(perimeterRectangle).to.be.a("null")
  expect(perimeterRectangle).to.equal(null)
})

it("shouldn't return the perimeter of a rectangle with negative dimensions", function() {
  const perimeterRectangle = utils.perimeter(3.5, -3)
  expect(perimeterRectangle).to.be.a("null")
  expect(perimeterRectangle).to.equal(null)
})

it("shouldn't return the area of a circle with a negative radius", function() {
  const areaRectangle = utils.circleArea(-6)
  expect(areaRectangle).to.be.a("null")
  expect(areaRectangle).to.equal(null)
})



// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it('Should create a new (object) Item with name and price', function() {
  const item = utils.createObject('kiwi', 0.59)
  expect(item).to.be.a('object')
  expect(item).to.have.property('name', 'kiwi')
  expect(item).to.have.property('price', 0.59)
  expect(item).to.have.property('quantity', 1)
})

it('Should return an array containing all items in cart', function() {
  const item = utils.createObject('orange', 1.49)
  const item = utils.createObject('apple', 0.99)
  utils.addItemToCart(item)
  const cart = utils.getShoppingCart()
  expect(cart).to.be.a('array')
  expect(cart).to.have.lengthOf(1)
})

it('Should add a new item to the shopping cart', function() {
  const item = utils.createObject('orange', 1.49)
  utils.addItemToCart(item)
  const cart = utils.getShoppingCart()
  expect(cart).to.be.a('array')
  expect(cart).to.have.lengthOf(1)
})

it('Should return the number of items in the cart', function() {
  const item = utils.createObject('orange', 1.49)
  utils.addItemToCart(item)
  const total = utils.getNumItemsInCart()
  expect(total).to.be.a('number')
  expect(total).to.equal(1)
})

it('Should remove items from cart', function() {
  const banana = utils.createObject('banana', 1.79)
  const grapefruit = utils.createObject('grapefruit', 2.29)
  utils.addItemToCart(banana)
  utils.addItemToCart(grapefruit)
  const removeItem = utils.removeItemFromCart()
  const cart = utils.getShoppingCart()
  expect(removeItem).to.be.a('object')
  expect(cart).to.be.a('array')
  expect(cart).to.have.lengthOf(1)
})
// Finished tests
// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart")

it("Should validate that an empty cart has 0 items")

it("Should return the total cost of all items in the cart")