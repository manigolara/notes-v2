# Palindrome Number

https://leetcode.com/problems/palindrome-number

## Description

Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.

#### Example:

Input: `x = 121`
Output: `true`

## Constraints:

`-2**31 <= x <= 2**31 - 1`

## Solution

```java
public boolean isPalindrome(int x) {
    // if the number is a negative number
    // or if the number end with 0 except the number zero
    if (x < 0 || (x != 0 && x % 10 == 00))
        return false;

    int reverse = 0;
    int num = x;

    while (num > reverse) {
        // We get the last digit
        int lastDigit = num % 10;
        // Appends the last digit to the reverse variable
        reverse = reverse * 10 + lastDigit;
        num = num / 10;
    }
    // we handle odd numbers, or even number
    return num == reverse / 10 || num == reverse;
}
```
