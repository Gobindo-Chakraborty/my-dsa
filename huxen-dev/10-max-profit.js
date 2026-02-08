const maxProfit = (priceList) => {
  let minPrice = priceList[0];
  let maxProfit = 0;

  for (let i = 1; i < priceList.length; i++) {
    const currentPrice = priceList[i];

    minPrice = Math.min(minPrice, currentPrice);

    const potentialProfit = currentPrice - minPrice;

    maxProfit = Math.max(potentialProfit, maxProfit);
  }
  return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 4];

const profit = maxProfit(prices);

console.log("Maximum Profit : ", profit);
