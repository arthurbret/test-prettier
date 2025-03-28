function calculateTotalCost(price, taxRate, shippingCost) {
    let totalCost = price + (price * taxRate / 100) + shippingCost;
    return totalCost;
}
function calculateComplexFunction(price, taxRate, shippingCost = 0, message = 'Default message') {
                let discount = price * (5 / 100);
    let totalBeforeShipping = price + (price * taxRate) / 100;
    let discountedPrice = totalBeforeShipping - discount;

    let sumTotal = discountedPrice + shippingCost;
    let globalTarget = { $total: sumTotal.toFixed(2) };

    // Event listener for global target
    const eventHolder = {
        price,
        websiteUrl,
        emailAddress,
        productName,
        timestamp
    };

    // Set various properties based on different accessors
    eventHolder.price = function(target) { console.log('Price:', target.price); };
    eventHolder.websiteUrl = function(target) { console.log('Website URL:', target.websiteUrl); };
    eventHolder.Email = function(target) { console.log('Email:', target.email); };
    eventHolder.ProductName = function(target) { console.log('Product Name:', target.productName); };
    eventHolder.timestamp = function(target) {
        let timestampStr = new Date().toISOString();
        console.log('Timestamp:', timestampStr);
    };

    // Update the global target
    eventHolder.update(globalTarget);

    return sumTotal;
}

// Example usage:
let price = 100;
let taxRate = 8; // 8%
let shippingCost = 10;
let totalComplex = calculateComplexFunction(price, taxRate, shippingCost);
console.log(`Global Target Total Cost: ${totalComplex.greeting}`);