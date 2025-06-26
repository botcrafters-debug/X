function calculateProfit() {
    const entryPrice = parseFloat(document.getElementById('entryPrice').value);
    const exitPrice = parseFloat(document.getElementById('exitPrice').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(entryPrice) || isNaN(exitPrice)) {
        resultDiv.textContent = 'Please enter valid numbers';
        resultDiv.className = 'result';
        return;
    }

    const profitPercentage = ((exitPrice - entryPrice) / entryPrice) * 100;
    const formattedPercentage = profitPercentage.toFixed(2);

    if (profitPercentage >= 0) {
        resultDiv.textContent = `+${formattedPercentage}%`;
        resultDiv.className = 'result profit';
    } else {
        resultDiv.textContent = `${formattedPercentage}%`;
        resultDiv.className = 'result loss';
    }
}

function calculateCryptoProfit() {
    const entryPrice = parseFloat(document.getElementById('cryptoEntryPrice').value);
    const investmentAmount = parseFloat(document.getElementById('investmentAmount').value);
    const exitPrice = parseFloat(document.getElementById('cryptoExitPrice').value);
    const resultDiv = document.getElementById('cryptoResult');

    if (isNaN(entryPrice) || isNaN(investmentAmount) || isNaN(exitPrice)) {
        resultDiv.textContent = 'Please enter valid numbers';
        resultDiv.className = 'result';
        return;
    }

    // Calculate the quantity of crypto based on investment amount and entry price
    const cryptoQuantity = investmentAmount / entryPrice;
    
    // Calculate the total value at exit
    const exitValue = cryptoQuantity * exitPrice;
    
    // Calculate profit percentage
    const profitPercentage = ((exitValue - investmentAmount) / investmentAmount) * 100;
    const formattedPercentage = profitPercentage.toFixed(2);
    
    // Calculate actual profit/loss amount
    const profitAmount = (exitValue - investmentAmount).toFixed(2);
    
    // Format the crypto quantity to 8 decimal places for better readability
    const formattedQuantity = cryptoQuantity.toFixed(8);

    if (profitPercentage >= 0) {
        resultDiv.innerHTML = `+${formattedPercentage}%<br>Profit: $${profitAmount}<br>Quantity: ${formattedQuantity} coins`;
        resultDiv.className = 'result profit';
    } else {
        resultDiv.innerHTML = `${formattedPercentage}%<br>Loss: $${Math.abs(profitAmount)}<br>Quantity: ${formattedQuantity} coins`;
        resultDiv.className = 'result loss';
    }
} 