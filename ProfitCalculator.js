const maxProfit = (prices) => {
  let minPrice = prices[0];

  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];

    // console.log(currentPrice);

    minPrice = Math.min(minPrice, currentPrice)

    // console.log(minPrice);

    const potentialProfit = currentPrice - minPrice

    // console.log(potentialProfit);
    
    maxProfit = Math.max(maxProfit, potentialProfit)

    // console.log(maxProfit);
    // console.log(currentPrice, minPrice , potentialProfit, maxProfit);
    
  }

  return maxProfit
};

const prices = [4, 1, 9, 7, 10, 8];
const profit = maxProfit(prices)

console.log("Maximum profit is", profit);
