# Single Number

https://leetcode.com/problems/single-number

- Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one.
- You must implement a solution with a linear runtime complexity and use only constant extra space.

### Example:

Input: nums = [2,2,1]<br>
Output: 1

## Constraints:

- `1 <= nums.length <= 3 * 10**4`
- `-3 * 10**4 <= nums[i] <= 3 * 10**4`
- Each element in the array **appears twice** except for one element which appears only once.

## Solution

```java
public int singleNumber(int[] nums) {
    int ans = nums[0];
    for (int i = 1; i < nums.length; i++) {
        // Applies the XOR (^) operation between ans and the current element (nums[i]),
        // effectively eliminating pairs of equal numbers
        ans = ans ^ nums[i];
    }
    return ans;
}
```
