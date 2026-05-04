# Manual Test Cases

## Business Logic Tests

## TC-01: Buy when current percentage is lower than target

**Preconditions:**
- Total asset = 100000
- IBM: target = 20%, current = 10%, price = 150

**Steps:**
1. Run rebalancing calculation

**Expected Result:**
- Action: BUY
- Shares: ~66.67


---

## TC-02: Sell when current percentage is higher than target

**Preconditions:**
- Total asset = 100000
- ORCL: target = 20%, current = 30%, price = 220

**Steps:**
1. Run rebalancing calculation

**Expected Result:**
- Action: SELL
- Shares: ~45.45


---

## TC-03: Hold when current equals target

**Preconditions:**
- MSFT: target = 20%, current = 20%, price = 90

**Steps:**
1. Run rebalancing calculation

**Expected Result:**
- Action: HOLD
- Shares: 0


---

## TC-04: All securities are already balanced

**Preconditions:**
- All securities: target = current = 20%

**Steps:**
1. Run rebalancing calculation

**Expected Result:**
- All securities have action HOLD
- Shares = 0 for all


---

## Validation Tests

## TC-05: Unit price equals zero

**Preconditions:**
- Any security with unit price = 0

**Steps:**
1. Run rebalancing calculation

**Expected Result:**
- Error: "Unit price must be greater than 0"


---

## TC-06: Unit price is negative

**Preconditions:**
- Any security with unit price < 0

**Steps:**
1. Run rebalancing calculation

**Expected Result:**
- Error: "Unit price must be greater than 0"


---

## TC-07: Negative percentage value

**Preconditions:**
- Any security with current% or target% < 0

**Steps:**
1. Run rebalancing calculation

**Expected Result:**
- Error: "Percentage cannot be negative"


---

## TC-08: Total target percentage is not equal to 100

**Preconditions:**
- Sum of target% ≠ 100 (e.g. 90)

**Steps:**
1. Run rebalancing calculation

**Expected Result:**
- Error: "Total target percentage must equal 100"


---

## TC-09: Total current percentage is not equal to 100

**Preconditions:**
- Sum of current% ≠ 100 (e.g. 110)

**Steps:**
1. Run rebalancing calculation

**Expected Result:**
- Error: "Total current percentage must equal 100"


---

## TC-10: Empty securities list

**Preconditions:**
- securities = []

**Steps:**
1. Run rebalancing calculation

**Expected Result:**
- Error: "At least one security is required"


---


## Edge Case Tests


## TC-11: Decimal percentages handling

**Preconditions:**
- Securities with decimal percentages (e.g. 33.33%)

**Steps:**
1. Run rebalancing calculation

**Expected Result:**
- Correct BUY/SELL calculation
- Shares calculated with decimals


---

## TC-12: Small total asset value

**Preconditions:**
- Total asset = 100

**Steps:**
1. Run rebalancing calculation

**Expected Result:**
- Correct calculation
- No precision issues


---

## TC-13: Large total asset value

**Preconditions:**
- Total asset = 10,000,000

**Steps:**
1. Run rebalancing calculation

**Expected Result:**
- Correct calculation
- No overflow or precision issues


---

## Assumptions

- Shares are calculated up to 2 decimal places
- Fractional shares are allowed
- No transaction fees are applied
- Input data is provided as a structured portfolio object