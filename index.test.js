const { sum } = require('./index');

describe('sum', () => {
    test('adds 1 plus 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('adds 10 plus 20 to equal 30', () => {
        expect(sum(10, 20)).toBe(30);
    });
});