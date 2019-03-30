//Business Logic
function Pizzas(size, topping) {
  this.size = size;
  this.topping = topping;
}

Pizzas.prototype.price = function() {
  var pizzaSizeFinal = this.size;
  }

  pizzaSizeFinal += this.topping;

  return (pizzaSizeFinal);
  

}

$(document).ready(function() {
  $('form#pizza').submit(function(event) {
    event.preventDefault();

    var pizzaToppings = [];
        $("input:checkbox[name=chooseTopping]:checked").each(function(){
          var toppingsTotal = $(this).val();
          pizzaToppings.push(toppingsTotal);
        });


    var pizzaSize = $("input:checkbox[name=size]:checked").val();

    var pizzaCost = new Pizzas(pizzaSize, pizzaToppings);

    $('#price').text(pizzaCost.price());


  });
});
