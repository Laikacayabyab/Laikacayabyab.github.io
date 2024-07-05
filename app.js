
var products = {
   qty1: {
       name: "SHAWARMA BUY 1 GET 1",
       price: 300.00
   },
   qty2: {
       name: "CHICKEN SHAWARMA WITH COKE AND FRIES",
       price: 300.00
   },
   qty3: {
       name: "BEEF SHAWARMA WITH FRIES AND COKE",
       price: 300.00
   },
   qty4: {
       name: "CHICKEN SHAWARMA RICE",
       price: 230.00
   },
   qty5: {
       name: "BEEF SHAWARMA RICE",
       price: 250.00
   },
   qty6: {
       name: "BUY 1 TAKE 1 SHAWARMA RICE",
       price: 280.00
   }
};

var order = {}; // Object to store quantities of each item

// Function to update order text area and calculate total
function updateOrder() {
   var total = 0;
   var orderText = "";

   Object.keys(products).forEach(function(key) {
       var qty = parseFloat(document.getElementById(key).value);
       if (!isNaN(qty) && qty > 0) {
           order[key] = parseInt(qty);
           var subtotal = products[key].price * qty;
           total += subtotal;
           orderText += qty + " x " + products[key].name + " - ₱" + subtotal.toFixed(2) + "\n";
       } else {
           delete order[key];
       }
   });

   document.getElementById('carts').value = orderText.trim();
   document.getElementById('total').value = "Total: ₱" + total.toFixed(2);
}

// Function to calculate change
function calculateChange() {
   var cash = parseFloat(document.getElementById('cash').value);
   var total = Object.keys(order).reduce(function(acc, key) {
       return acc + (products[key].price * order[key]);
   }, 0);

   var change = cash - total;
   document.getElementById('change').value = "Change: ₱" + change.toFixed(2);
}
