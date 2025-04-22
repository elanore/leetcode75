/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */

function findRestaurant(list1, list2) {
  let map1 = new Map();
  let result = [];
  let minIndexSum = Infinity;

  // Populate a map with the indices of elements in list1
  list1.forEach((item, index) => {
    map1.set(item, index);
  });

  // Iterate through list2 and find common strings with least index sum
  list2.forEach((item, index) => {
    if (map1.has(item)) {
      let indexSum = index + map1.get(item); // Calculate the index sum
      if (indexSum < minIndexSum) {
        // Found a smaller index sum, update results
        minIndexSum = indexSum;
        result = [item];
      } else if (indexSum === minIndexSum) {
        // Same index sum, add to results
        result.push(item);
      }
    }
  });

  return result;
}

// Example usage:
const list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
const list2 = [
  "Piatti",
  "The Grill at Torrey Pines",
  "Hungry Hunter Steakhouse",
  "Shogun",
];
console.log(findRestaurant(list1, list2)); // Output: ["Shogun"]

const list3 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
const list4 = ["KFC", "Shogun", "Burger King"];
console.log(findRestaurant(list3, list4)); // Output: ["Shogun"]
