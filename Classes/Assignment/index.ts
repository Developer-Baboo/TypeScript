type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

type ProductKeys = keyof Product;

function isProductAvailable(product: Product): boolean {
  return product.inStock;
}

type Discount<T> = T extends { price: number } ? { discountPrice: number } : {};

type ProductWithDiscount = Product & Discount<Product>;

function hasDiscount(product: ProductWithDiscount): product is ProductWithDiscount
{
  return 'discountPrice' in product;
}

const product1: Product = { id: 1, name: 'Product One', price: 30, inStock: true };

const discountedProduct: ProductWithDiscount = { id: 2, name: 'Discounted Product', price: 50, inStock: true, discountPrice: 40 };

console.log(isProductAvailable(product1));

console.log(isProductAvailable(discountedProduct));

if (hasDiscount(discountedProduct)) {
  console.log(`Discounted Price: ${discountedProduct.discountPrice}`);
}

else
{
  console.log('No discount available.');
}

