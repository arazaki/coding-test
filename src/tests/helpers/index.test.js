import { totalAmountAvailable, formatCurrency, termRemaining, decreaseAvailable } from '../../helpers/index';

describe('totalAmountAvailable', () => {
    const loans = [
        { "available": "10,000" },
        { "available": "20,000" }
    ]
    test('returns correct total amount available', () => {
        const amount = totalAmountAvailable(loans);
        expect(amount).toBe(30000);
    });
});

describe('formatCurrency', () => {
    const value = 31235;
    test('returns correct currency format', () => {
        const formattedValue = formatCurrency(value);
        expect(formattedValue).toMatch("31,235");
    });
});

describe('termRemaining', () => {
    const value = 864000;
    test('format the term remaining value', () => {
        const formattedValue = termRemaining(value);
        expect(formattedValue).toMatch("10 days");
    });
});

describe('decreaseAvailable', () => {
    const available = "4000";
    const value = "1000";
    test('format the term remaining value', () => {
        const result = decreaseAvailable(available, value);
        expect(result).toBe(3000);
    });
});