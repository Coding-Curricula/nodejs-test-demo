function isPalindrome(str) {
    // convert input to a string in case it is a number
    str = str.toString();

    // remove an alphanumeric characters and convert to lower case
    const cleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

    // reverse the cleaned string
    const reversed = cleaned.split('').reverse().join('');

    return cleaned === reversed;
}

module.exports = isPalindrome;