var initaialPrice = document.querySelector("#initial-price")
var stockQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");

var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

function submitHandler() {
    var ip = Number(initaialPrice.value);
    var qty = Number(stockQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}
 function showMessage(message) {
     outputBox.innerText = message;
 }


submitBtn.addEventListener('click' , submitHandler)




function calculateProfitAndLoss(initaialPrice, stockQuantity, currentPrice) {
    if (initaialPrice > currentPrice) {
        var loss = (initaialPrice - currentPrice) * stockQuantity;
        var lossPercent = ((loss / initaialPrice) * 100).toFixed(2);

        outputBox.innerText = (` Hey, The loss is ${loss} and Percentage of Loss is ${lossPercent}%.`)
        outputBox.style.color = "red";
    } else if (currentPrice > initaialPrice) {
        var profit = (currentPrice - initaialPrice) * stockQuantity;
        var profitPercent = ((profit / initaialPrice) * 100).toFixed(2);

        outputBox.innerText = (`Hey, The Profit is ${profit} and Percentage of Profit is ${profitPercent}%.`)
        outputBox.style.color = "white";
    } else {
        outputBox.innerText = ("no pain no gain, no gain no pain!")
    }
}



// calculateProfitAndLoss(10, 10, 10);
