// Busines Logic
function Pizzas(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizzas.prototype.price = function() {
  retunr this.size + this.toppings
}
