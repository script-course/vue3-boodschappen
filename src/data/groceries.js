class Grocery {
  constructor(name, quantity, price) {
    this._name = name;
    this._quantity = quantity;
    this._price = price;
  }

  get name() {
    return this._name[0].toUpperCase() + this._name.slice(1);
  }

  get quantity() {
    return this._quantity;
  }

  get price() {
    return this._price.toFixed(2);
  }

  get subTotal() {
    return (this._quantity * this.price).toFixed(2);
  }

  set quantity(quantity) {
    this._quantity = quantity;
  }
}

export default [
  new Grocery("bread", 2, 1),
  new Grocery("wine", 5, 23),
  new Grocery("cheese", 3, 16.5),
];
