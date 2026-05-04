function validatePortfolio(portfolio) {
  if (!portfolio.securities || portfolio.securities.length === 0) {
    throw new Error('At least one security is required');
  }

  if (portfolio.totalAsset <= 0) {
    throw new Error('Total asset must be greater than 0');
  }

  const totalTarget = portfolio.securities.reduce((sum, s) => sum + s.targetPercent, 0);
  const totalCurrent = portfolio.securities.reduce((sum, s) => sum + s.currentPercent, 0);

  if (totalTarget !== 100) {
    throw new Error('Total target percentage must equal 100');
  }

  if (totalCurrent !== 100) {
    throw new Error('Total current percentage must equal 100');
  }

  portfolio.securities.forEach((security) => {
    if (security.unitPrice <= 0) {
      throw new Error('Unit price must be greater than 0');
    }

    if (security.targetPercent < 0 || security.currentPercent < 0) {
      throw new Error('Percentage cannot be negative');
    }
  });
}

function calculateRebalancing(portfolio) {
  validatePortfolio(portfolio);

  return portfolio.securities.map((security) => {
    const targetValue = portfolio.totalAsset * security.targetPercent / 100;
    const currentValue = portfolio.totalAsset * security.currentPercent / 100;
    const difference = targetValue - currentValue;
    const shares = Math.abs(difference / security.unitPrice);

    return {
      symbol: security.symbol,
      action: difference > 0 ? 'BUY' : difference < 0 ? 'SELL' : 'HOLD',
      shares: Number(shares.toFixed(2)),
    };
  });
}

module.exports = { calculateRebalancing };