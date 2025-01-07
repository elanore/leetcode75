# leetcode75

- my journey through leetcode 75
- includes notes and problems with comments and explanation in javascript

# Probem 1 Merge strings alternately

- loop through the strings til the i and j are less than the string length and then add to merged variable word[i] and [j] and increase i and j .then return merged variable.
- using for loop , find the max length of the strings and loop throught untill max length and add to merged alternalevely string 1 and 2 untill its less than str1.length and str2.length

# Probem 2  find the greatest common divisor (GCD) of two strings
- A helper function computes the greatest common divisor (GCD) of two numbers. This function is based on the Euclidean algorithm
- first checks if the two strings can have a common divisor string
- If this condition isn’t true, it means there’s no valid GCD string, so it returns ""
- line 6 if str1 and str2 share a common divisor then result should be same like AB+AB = ABAB and AB+AB = ABAB , AB+CD=ABCD, CD+AB =CDAB

# Problem 3 if can have extra candies or not
- If candies = [2, 3, 5, 1, 3] and extraCandies = 3 
- If the total is greater than or equal to maxCandies, return true; otherwise, return false.
