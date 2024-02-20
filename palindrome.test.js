const isPalindrome = require('./palindrome');

describe('isPalindrome', () => {
    test('should return true for a palindrome string', () => {
        expect(isPalindrome('tacocat')).toBe(true);
    });

    test('should return false for a non-palindrome string', () => {
        expect(isPalindrome('hello')).toBe(false);
    });

    test('should return true for a palindrome number', () => {
        expect(isPalindrome(12321)).toBe(true);
    });

    test('should return false for a non-palindrome number', () => {
        expect(isPalindrome(12345)).toBe(false);
    });

    test('should return true for mixed cases', () => {
        expect(isPalindrome('Racecar')).toBe(true);
    });

    test('should return true for a palindrome with special characters', () => {
        expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    });

    test('should return true for a palindrome with spaces', () => {
        expect(isPalindrome('taco cat')).toBe(true);
    });
});