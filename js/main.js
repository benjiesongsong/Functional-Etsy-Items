// 1. Show me how to calculate the average price of all items.


// To get a sum of all prices, we first need all prices
// This `map` will give us an array of all prices
var allPrices = items.map( function (item) {
  return item.price;
});

// Now that I have all the prices, we can `reduce` them down to
// a single value, which is the sum of all prices
var priceSum = allPrices.reduce(function (prev, curr) {
  return prev + curr;
});

// Once we have the sum, we can divide by the number (length) of
// items we have
var avg = priceSum / items.length;

// Let's now round that to 2 decimals
var final1 = avg.toFixed(2);

// Finally, lets build our answer string
var answer1 = "The average price is $" + final1;

// Find my "answer" area in the DOM
var answer1Area = document.querySelector('#answer1');

// Put our answer on the page
answer1Area.innerHTML = answer1;

// 2. Show me how to get an array of items that cost between $14.00 and $18.00 USD

// I must first make an array to get the items that are in between those prices
var $14_18 = items.filter (function (item) {
  return item.price <= 18 && item.price >= 14;
});

// Now make a var that displays the title of the items.
var titleItem = $14_18.map(function (price) {
  return price.title;
});

// Make a var to let DOM work inside HTML ID "answer2".
var answer2Area = document.querySelector('#answer2');
answer2Area.innerHTML = titleItem;

// CANT FIGURE OUT HOW TO MAKE LIST THROUGH DOM.

// 3. Which item has a "GBP" currency code? Display it's name and price.

var gbp = items.filter (function (item){
  return item.currency_code === "GBP";
});

var answer3 = gbp.map(function (gbpcurrency){
  return gbpcurrency.title
});

var answer3Area = document.querySelector('#answer3');
answer3Area.innerHTML = answer3;

// 4. Display a list of all items who are made of wood.

// 5. Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

var eight = items.filter(function (item){
  if (item.materials.length >= 8) {
    return item;
  }
});

var answer5 = eight.map(function (item){
  return item.title;
});

var answer5Area = document.querySelector('#answer5');
answer5Area.innerHTML = answer5;

// 6. How many items were made by their sellers?

var sellers = items.filter ()
