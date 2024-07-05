// Define prices and initialize variables
var prices = {
   qty1: 300.00,
   qty2: 300.00,
   qty3: 300.00,
   qty4: 230.00,
   qty5: 250.00,
   qty6: 280.00
};

var order = {}; // Object to store quantities of each item

// Function to update order text area and calculate total
function updateOrder() {
   var total = 0;
   var orderText = "";

   Object.keys(prices).forEach(function(key) {
       var qty = parseFloat(document.getElementById(key).value);
       if (!isNaN(qty) && qty > 0) {
           order[key] = parseInt(qty);
           var subtotal = prices[key] * qty;
           total += subtotal;
           orderText += qty + " x " + key.toUpperCase() + " - ₱" + subtotal.toFixed(2) + "\n";
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
       return acc + (prices[key] * order[key]);
   }, 0);

   var change = cash - total;
   document.getElementById('change').value = "Change: ₱" + change.toFixed(2);
}
