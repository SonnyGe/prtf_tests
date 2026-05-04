# Portfolio Rebalancing Calculations

## Initial Data

- Total asset: $100,000
- Account: ABC
- Securities: IBM, MSFT, ORCL, AAPL, HD
- Target allocation for each security: 20%

## Formula

Target value:

`targetValue = totalAsset * targetPercent / 100`

Current value:

`currentValue = totalAsset * currentPercent / 100`

Difference:

`difference = targetValue - currentValue`

Shares:

`shares = abs(difference / unitPrice)`

Action:

- If difference > 0 → BUY
- If difference < 0 → SELL
- If difference = 0 → HOLD

---

## Calculations

## IBM

- Target value: 100000 * 20 / 100 = 20000
- Current value: 100000 * 10 / 100 = 10000
- Difference: 20000 - 10000 = 10000
- Unit price: 150
- Shares: 10000 / 150 = 66.67

Result: BUY 66.67 shares

---

## MSFT

- Target value: 100000 * 20 / 100 = 20000
- Current value: 100000 * 20 / 100 = 20000
- Difference: 20000 - 20000 = 0
- Unit price: 90
- Shares: 0

Result: HOLD 0 shares

---

## ORCL

- Target value: 100000 * 20 / 100 = 20000
- Current value: 100000 * 30 / 100 = 30000
- Difference: 20000 - 30000 = -10000
- Unit price: 220
- Shares: 10000 / 220 = 45.45

Result: SELL 45.45 shares

---

## AAPL

- Target value: 100000 * 20 / 100 = 20000
- Current value: 100000 * 20 / 100 = 20000
- Difference: 20000 - 20000 = 0
- Unit price: 450
- Shares: 0

Result: HOLD 0 shares

---

## HD

- Target value: 100000 * 20 / 100 = 20000
- Current value: 100000 * 20 / 100 = 20000
- Difference: 20000 - 20000 = 0
- Unit price: 70
- Shares: 0

Result: HOLD 0 shares

---

## Final Result

- IBM: BUY 66.67 shares
- MSFT: HOLD 0 shares
- ORCL: SELL 45.45 shares
- AAPL: HOLD 0 shares
- HD: HOLD 0 shares

---