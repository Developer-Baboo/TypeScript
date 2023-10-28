function isProductAvailable(product) {
    return product.inStock;
}
function hasDiscount(product) {
    return 'discountPrice' in product;
}
var product1 = { id: 1, name: 'Product One', price: 30, inStock: true };
var discountedProduct = { id: 2, name: 'Discounted Product', price: 50, inStock: true, discountPrice: 40 };
console.log(isProductAvailable(product1));
console.log(isProductAvailable(discountedProduct));
if (hasDiscount(discountedProduct)) {
    console.log("Discounted Price: ".concat(discountedProduct.discountPrice));
}
else {
    console.log('No discount available.');
}
