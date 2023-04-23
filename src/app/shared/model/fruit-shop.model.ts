type FruitId = number;

interface DiscountAttributes {
  number: number,
  percent: number
}

interface FruitAttributes {
  id: FruitId,
  name: string,
  price: number,
  quantity: number,
  discounts: DiscountAttributes[];
}

type ShopProductAttributes = {
  [productId: FruitId]: FruitAttributes
}

type CartAttributes = {
  items: {
    [productId: FruitId]: number
  },
  total: number
}

export default class FruitShop {
  products: ShopProductAttributes;
  cart: CartAttributes;

  constructor(data: ShopProductAttributes) {
    this.products = data;
    this.cart = {
      items: {},
      total: 0
    };
  }

  addToCart(itemId: FruitId) {
    if (this.products[itemId]) {
      if (!this.cart.items[itemId]) {
        this.cart.items[itemId] = 0;
      }
      this.cart.items[itemId]++;
      this.cart.total = this.calculateTotal();
    }
  }

  removeFromCart(itemId: FruitId) {
    if (this.cart.items[itemId]) {
      delete this.cart.items[itemId];
      this.cart.total = this.calculateTotal();
    }
  }

  getDiscount(itemId: FruitId, quantity: number) {
    return this.products[itemId].discounts.find(value => value.number === quantity)?.percent;
  }

  calculateTotal() {
    return Object.entries(this.cart.items).reduce((sum, cur) => {
      const [id, quantity] = cur;
      return sum += this.products[id].price * quantity * (100 - this.getDiscount(+id, quantity)) / 100;
    }, 0);
  }
}
