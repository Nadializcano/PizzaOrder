//Business Logic
function Pizzas(size, topping) {
  this.size = size;
  this.topping = topping;
}

Pizzas.prototype.price = function() {
  var cost = 0;
  if (this.size === "Small") {
   cost += 8;
 } else if (this.size === "Medium") {
   cost += 12;
 } else {
   cost += 14;
 }

  cost += (this.topping.length * 2);

  return (cost);

}

$(document).ready(function() {
  $('form#pizza').submit(function(event) {
    event.preventDefault();

    var pizzaToppings = []
        $("input:checkbox[name=chooseTopping]:checked").each(function(){
          var toppingsTotal = $(this).val();
          pizzaToppings.push(toppingsTotal);
        });

    var pizzaSize = $("select#size").val();

    var pizzaCost = new Pizzas(pizzaSize, pizzaToppings);

    alert("YOUR TOTAL" + " " + "$" + (pizzaCost.price()));

  });
});
