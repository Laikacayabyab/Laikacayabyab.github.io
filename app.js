function updateOrder() {
    var products = [
        { id: 1, name: 'Whopper Ala Carte', price: 300.00 },
        { id: 2, name: 'Whopper Jr Burger', price: 200.00 },
        { id: 3, name: 'Fish\'n Crisp Burger', price: 250.00 },
        { id: 4, name: 'Big King Fish Burger', price: 270.00 },
        { id: 5, name: 'Chicken Burger Monster', price: 290.00 },
        { id: 6, name: 'Grilled Chicken Burger', price: 270.00 },
    ];

    var orderSummary = '';
    var total = 0;

    products.forEach(function(product) {
        var quantity = document.getElementById('qty' + product.id).value;
        if (quantity && quantity > 0) {
            var productTotal = product.price * quantity;
            orderSummary += product.name + ': ' + quantity + ' x ' + product.price + ' = ' + productTotal.toFixed(2) + '\n';
            total += productTotal;
        }
    });

    document.getElementById('carts').value = orderSummary;
    document.getElementById('total').value = total.toFixed(2);

    calculateChange();
}

function calculateChange() {
    var total = parseFloat(document.getElementById('total').value);
    var cash = parseFloat(document.getElementById('cash').value);

    if (!isNaN(total) && !isNaN(cash) && cash >= total) {
        var change = cash - total;
        document.getElementById('change').value = change.toFixed(2);
    } else {
        document.getElementById('change').value = '';
    }
}
