//Exporting Module
console.log('Exporting module');

const shippingCost = 10;
const cart = [];

export const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};
