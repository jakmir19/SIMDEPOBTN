function calculate() {
    // Get input values
    var principal = parseFloat(document.getElementById("principal").value);
    var interestRate = parseFloat(document.getElementById("interestRate").value);
    var timePeriod = parseFloat(document.getElementById("timePeriod").value);

    // Convert time period from months to days
    var timePeriodInYears = (timePeriod * 30)/365;

    // Perform the calculation
    var interest = (principal * (interestRate/100) * timePeriodInYears);
    var tax = 80/100;
    var totalAmount = (interest * tax);
    var TotalAccum = principal + totalAmount

    // Format the result with comma style and currency
    var formattedTotalAmount = formatCurrency(totalAmount);
    var formattedTotalAccum = formatCurrency (TotalAccum);

    // Display the result
    document.getElementById("resultText").textContent = "Bunga: " + formattedTotalAmount;
    document.getElementById("accumText").textContent = "Akumulasi Perolehan Deposito: " + formattedTotalAccum;
}

function formatCurrency(amount) {
    // Add comma style
    var formattedAmount = amount.toLocaleString();
    var formtted

    // Add currency symbol
    formattedAmount = "Rp" + formattedAmount;

    return formattedAmount;
}
