import FruitShop from './fruit-shop.model';

describe('Test Fruit Shop Class', () => {
  const fruitShop = new FruitShop({
    [1]: {
      id: 1,
      name: 'Apple',
      price: 3,
      quantity: 2,
      discounts: [{ number: 1, percent: 5 }, { number: 2, percent: 10 }]
    },
    [2]: {
      id: 1,
      name: 'Peach',
      price: 5,
      quantity: 10,
      discounts: [{ number: 1, percent: 5 }, { number: 2, percent: 10 }]
    },
    [3]: {
      id: 1,
      name: 'Banana',
      price: 5,
      quantity: 5,
      discounts: [{ number: 1, percent: 5 }, { number: 2, percent: 10 }]
    }
  });

  test('Add to cart - Should not add null', () => {
    fruitShop.addToCart(null);
    expect(Object.keys(fruitShop.cart.items).length).toEqual(0);
  });

  test('Add to cart - Should have one apple in cart', () => {
    expect(Object.keys(fruitShop.cart.items).length).toEqual(0);

    fruitShop.addToCart(1);
    expect(Object.keys(fruitShop.cart.items).length).toEqual(1);
    expect(fruitShop.cart.items[1]).toEqual(1);
    expect(fruitShop.cart.total).toBeCloseTo(2.85);
  });

  test('Add to cart - Should have two apple, one banana in cart', () => {
    fruitShop.addToCart(1);
    fruitShop.addToCart(3);
    expect(Object.keys(fruitShop.cart.items).length).toEqual(2);
    expect(fruitShop.cart.items[1]).toEqual(2);
    expect(fruitShop.cart.items[3]).toEqual(1);
    expect(fruitShop.cart.total).toBeCloseTo(10.15);
  });

  test('Remove from cart - Should have one banana in cart', () => {
    fruitShop.removeFromCart(1);
    expect(Object.keys(fruitShop.cart.items).length).toEqual(1);
    expect(fruitShop.cart.items[1]).toBeUndefined();
    expect(fruitShop.cart.items[3]).toEqual(1);
    expect(fruitShop.cart.total).toBeCloseTo(4.75);
  });
});
