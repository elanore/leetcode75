# leetcode75

- my journey through leetcode 75
- includes notes and problems with comments and explanation in javascript

# Probem 1 Merge strings alternately

- loop through the strings til the i and j are less than the string length and then add to merged variable word[i] and [j] and increase i and j .then return merged variable.
- using for loop , find the max length of the strings and loop throught untill max length and add to merged alternalevely string 1 and 2 untill its less than str1.length and str2.length

# Probem 2 find the greatest common divisor (GCD) of two strings

- A helper function computes the greatest common divisor (GCD) of two numbers. This function is based on the Euclidean algorithm
- first checks if the two strings can have a common divisor string
- If this condition isn’t true, it means there’s no valid GCD string, so it returns ""
- line 6 if str1 and str2 share a common divisor then result should be same like AB+AB = ABAB and AB+AB = ABAB , AB+CD=ABCD, CD+AB =CDAB

# Problem 3 if can have extra candies or not

- If candies = [2, 3, 5, 1, 3] and extraCandies = 3
- If the total is greater than or equal to maxCandies, return true; otherwise, return false.
- const result = candies.map((candy) => candy + extraCandies >= maxCandies); - creates a new array, result, by checking each child's candies using .map()
- max candy is found using Math.Max(candies)

# Problem 4 can flowers

-

# Problem 5 Reverse vowels of a string

-

# Problem 6 Move zeros - two pointer problem

- lastNonZeroIndex is a pointer that keeps track of where to place the next non-zero element.
- move throught the nums array and if its non zero ,move it as per the lastnonzeroIndex and increment the lastnonzeroindex with 1 and if the value is zero ,do nothing
- final last nonzeroindexnumber and length of nums array , assign the rest of the index values to zero
- for (let i = lastNonZeroIndex; i < nums.length; i++) {nums[i] = 0;}

# Problem 7 isSubsequence

-

# Problem 8 max average of array subset

-

# Problem 9 - max altitude biker

- initially we give maxaltitude and current altitude value as zero
- iterate through gain array and calculate currentaltitude = gain+ current altitude
- compare if currentaltitude is greater than maxaltitude, if yes then assign that value to max altitude
- return maxatitude

# Problem 10 Pivot index

- first find total sum and initail leftsum wil be 0
- using formula rightsum = totalsum - leftsum -num[i]
- if right sum != leftsum then continue, leftsum = leftsum+num[i]
- if rightsum= leftsum then that index is pivotindex
- if rightsum 1=leftsum in the array then pivot index is -1

# Problem 11 Difference in array findDifference.js

-

# Problem 12 Unique Number of Occurrences

-

# Problem 13 recent Counter


# Problem  14 Reversed LinkedList

# Problem 15 Max Depth Problem

# Problem 16 Similar Leaf Problem Binary Tree - DFS

# Problem 17 Binary Tree - DFS 



