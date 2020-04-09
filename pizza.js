var pizzaToppings = ['cheese', 'pepperoni', 'sauce','garlic', 'peppers' ];
   function myFunction() {
    var myPizza = pizzaToppings.join(' and ')
        return "A delicious pizza with " + myPizza;
    }
console.log(myFunction());