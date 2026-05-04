# Portfolio Rebalancing Tests

## Overview

This project contains manual and automated tests for a portfolio rebalancing calculation.

## Tech Stack

- JavaScript
- Playwright Test

## Project Structure

- `src/rebalancing.js` - calculation logic
- `tests/rebalancing.spec.js` - automated tests
- `test-data/portfolios.json` - test data
- `docs/test-cases.md` - manual test cases
- `docs/calculations.md` - calculation details

## How to Run


```bash
npm install
npm test
```

## Assumptions

- Shares are calculated up to 2 decimal places
- Fractional shares are allowed
- No transaction fees are applied
- Input data is provided as a structured portfolio object