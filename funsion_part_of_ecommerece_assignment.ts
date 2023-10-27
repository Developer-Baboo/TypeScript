Certainly! Let's break down the confusing parts of the code:

### Line 1:
```typescript
type Discount<T> = T extends { price: number } ? { discountPrice: number } : {};
```

In this line, `Discount<T>` is a generic type. It takes a type `T` as a parameter. This line defines a conditional type. It says: "If the type `T` has a property `price` of type `number`, then create a new type with a property `discountPrice` of type `number`. Otherwise, create an empty object `{}`."

#### Example:
```typescript
type ItemWithPrice = { price: number; name: string };

type DiscountedItem = Discount<ItemWithPrice>;
// If ItemWithPrice has a 'price' property, DiscountedItem will be { discountPrice: number; name: string }
// If ItemWithPrice does not have a 'price' property, DiscountedItem will be {}
```

### Line 2:
```typescript
type ProductWithDiscount = Product & Discount<Product>;
```

Here, `ProductWithDiscount` is a type created by combining the `Product` type with the `Discount` type we defined earlier. It means any object of `ProductWithDiscount` type must have properties from both `Product` and `Discount`.

#### Example:
```typescript
const discountedProduct: ProductWithDiscount = {
  id: 1,
  name: 'Discounted Item',
  price: 50,
  inStock: true,
  discountPrice: 40
};
// discountedProduct must have properties id, name, price, inStock from Product, and discountPrice from Discount
```

### `hasDiscount` Function:
```typescript
function hasDiscount(product: ProductWithDiscount): product is ProductWithDiscount {
  return 'discountPrice' in product;
}
```

This function checks if a given `product` has the `discountPrice` property. The `product is ProductWithDiscount` syntax is called a type predicate. It asserts that the `product` variable is of type `ProductWithDiscount` inside the function's block if the condition `'discountPrice' in product` is true.

#### Example:
```typescript
const item: Product = { id: 1, name: 'Sample Item', price: 30, inStock: true };

if (hasDiscount(item)) {
  console.log(`Discounted Price: ${item.discountPrice}`);
} else {
  console.log('No discount available.');
}
// Output: No discount available. (because 'discountPrice' property doesn't exist in 'item')
```

I hope this clarifies the confusing parts! Feel free to ask if you have more questions or need further explanations.