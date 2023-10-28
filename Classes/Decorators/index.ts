type Product = {
  id: number;
  name: string;
  price: number;
  in_stock: boolean;
};

type ProductKeys = keyof Product;

function is_product_available(product: Product): boolean {
  return product.in_stock;
}

type Discount<T> = T extends { price: number } ? { discountPrice: number } : {};

type product_with_discount = Product & Discount<Product>;

function has_discount(product: product_with_discount): product is product_with_discount
{
  return 'discountPrice' in product;
}

const product1: Product = { id: 1, name: 'Product One', price: 30, in_stock: true };

const discounted_price: product_with_discount = { id: 2, name: 'Discounted Product', price: 50, in_stock: true, discountPrice: 40 };

console.log(is_product_available(product1));

console.log(is_product_available(discounted_price));

if (has_discount(discounted_price)) {
  console.log(`Discounted Price: ${discounted_price.discountPrice}`);
}

else
{
  console.log('No discount available.');
}

