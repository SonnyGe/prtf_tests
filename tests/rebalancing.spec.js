const { test, expect, describe } = require('@playwright/test');
const { calculateRebalancing } = require('../src/rebalancing');
const portfolios = require('../test-data/portfolios.json');


// =========================
// Business Logic Tests
// =========================

describe('Business Logic Tests', () => {

    test('TC-01: should BUY when current < target', () => {
        const result = calculateRebalancing(portfolios.valid);

        expect(result.find(s => s.symbol === 'IBM')).toEqual({
            symbol: 'IBM',
            action: 'BUY',
            shares: 66.67
        });
    });


    test('TC-02: should SELL when current > target', () => {
        const result = calculateRebalancing(portfolios.valid);

        expect(result.find(s => s.symbol === 'ORCL')).toEqual({
            symbol: 'ORCL',
            action: 'SELL',
            shares: 45.45
        });
    });


    test('TC-03: should HOLD when current = target', () => {
        const result = calculateRebalancing(portfolios.valid);

        expect(result.find(s => s.symbol === 'MSFT')).toEqual({
            symbol: 'MSFT',
            action: 'HOLD',
            shares: 0
        });
    });


    test('TC-04: should return HOLD for all when balanced', () => {
        const result = calculateRebalancing(portfolios.balanced);

        expect(result.every(s => s.action === 'HOLD' && s.shares === 0)).toBeTruthy();
    });

});


// =========================
// Validation Tests
// =========================

describe('Validation Tests', () => {

    test('TC-05: should throw error when unit price = 0', () => {
        expect(() => calculateRebalancing(portfolios.invalidPriceZero))
            .toThrow('Unit price must be greater than 0');
    });


    test('TC-06: should throw error when unit price < 0', () => {
        expect(() => calculateRebalancing(portfolios.invalidPriceNegative))
            .toThrow('Unit price must be greater than 0');
    });


    test('TC-07: should throw error when percentage is negative', () => {
        expect(() => calculateRebalancing(portfolios.invalidPercentage))
            .toThrow('Percentage cannot be negative');
    });


    test('TC-08: should throw error when target sum != 100', () => {
        expect(() => calculateRebalancing(portfolios.invalidTargetSum))
            .toThrow('Total target percentage must equal 100');
    });


    test('TC-09: should throw error when current sum != 100', () => {
        expect(() => calculateRebalancing(portfolios.invalidCurrentSum))
            .toThrow('Total current percentage must equal 100');
    });


    test('TC-10: should throw error when securities list is empty', () => {
        expect(() => calculateRebalancing(portfolios.empty))
            .toThrow('At least one security is required');
    });

});


// =========================
// Edge Cases
// =========================

describe('Edge Case Tests', () => {

    test('TC-11: should correctly handle decimal percentages', () => {
        const result = calculateRebalancing(portfolios.decimal);

        expect(result).toEqual([
            { symbol: 'AAA', action: 'BUY', shares: 33.3 },
            { symbol: 'BBB', action: 'HOLD', shares: 0 },
            { symbol: 'CCC', action: 'SELL', shares: 33.3 }
        ]);
    });


    test('TC-12: should work with small portfolio value', () => {
        const result = calculateRebalancing(portfolios.small);

        expect(result).toEqual([
            { symbol: 'AAA', action: 'BUY', shares: 1 },
            { symbol: 'BBB', action: 'SELL', shares: 1 }
        ]);
    });


    test('TC-13: should work with large portfolio value', () => {
        const result = calculateRebalancing(portfolios.large);

        expect(result).toEqual([
            { symbol: 'AAA', action: 'BUY', shares: 10000 },
            { symbol: 'BBB', action: 'SELL', shares: 10000 }
        ]);
    });

});