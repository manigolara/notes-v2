# Reverse Integer

https://leetcode.com/problems/reverse-integer

## Description

- Given a signed 32-bit integer `x`, return `x` with its digits reversed.
- If reversing `x` causes the value to go outside the signed 32-bit integer range `[-2**31, 2**31 - 1]`, then return `0`.
- Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

#### Example 1:

Input: `x = 123`<br>
Output: `321`

#### Example 2:

Input: `x = -123`<br>
Output: `-321`

#### Example 3:

Input: `x = 120`<br>
Output: `21`

## Constraints:

`-2**31 <= x <= 2**31 - 1`

## Solution

```java
public int reverse(int x) {
    int reversed = 0;
    int min = Integer.MIN_VALUE;
    int max = Integer.MAX_VALUE;

    while (x != 0) {
        int lastDigit = x % 10;

        // Overflow checks: if adding the next digit would exceed the maximum integer
        // value (max), or if adding it would make it equal, but the last digit is
        // greater than the last digit of the maximum value
        if (reversed > max / 10 || (reversed == max / 10 && lastDigit > Integer.MAX_VALUE % 10))
            return 0;
        // same checks for negative numbers
        if (reversed < min / 10 || (reversed == min / 10 && lastDigit < -Integer.MIN_VALUE % 10))
            return 0;

        // Appends the last digit to reversed
        reversed = reversed * 10 + lastDigit;
        // and divides x by 10 to remove the last digit
        x = x / 10;
    }

    return reversed;
}
```
