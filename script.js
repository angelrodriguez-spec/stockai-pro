// --- Animate numbers ---
function animateValue(element, start, end, duration) {
    let startTime = null;
    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        element.innerHTML = "$" + (start + progress * (end - start)).toFixed(2);
        if (progress < 1) requestAnimationFrame(animation);
    }
    requestAnimationFrame(animation);
}

// --- Fake stock data for demo ---
function getStockData() {
    const symbolInput = document.getElementById("stockSymbol");
    const symbol = symbolInput.value || "AAPL";

    // Generate fake values
    const price = (100 + Math.random()*50).toFixed(2);
    const change = ((Math.random()-0.5)*5).toFixed(2);
    const forecast = (100 + Math.random()*20).toFixed(2);
    const confidence = (Math.random()*100).toFixed(1);
    const signal = Math.random() > 0.5 ? "BUY" : "SELL";

    // Update cards
    const priceEl = document.getElementById("priceCard");
    animateValue(priceEl, 0, price, 800);
    priceEl.innerHTML += "<span>Current Price</span>";

    document.getElementById("changeCard").innerHTML = change + "%<span>Daily Change</span>";
    document.getElementById("forecastCard").innerHTML = forecast + "<span>7-Day Forecast</span>";
    document.getElementById("confidenceCard").innerHTML = confidence + "%<span>Confidence</span>";

    const signalEl = document.getElementById("signalCard");
    signalEl.innerHTML = signal + "<span>AI Signal</span>";
    if(signal.includes("BUY")) signalEl.style.boxShadow = "0 0 20px #22c55e";
    if(signal.includes("SELL")) signalEl.style.boxShadow = "0 0 20px #ef4444";

    // Update AI explanation
    document.getElementById("aiInfo").innerHTML = `🤖 AI analysis for ${symbol} shows a ${signal} signal with ${confidence}% confidence.`;
}

// --- Optional: show default stock on page load ---
window.onload = () => {
    document.getElementById("stockSymbol").value = "AAPL";
    getStockData();
};
