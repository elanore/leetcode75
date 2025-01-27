// Definition for a singly linked list node
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Function to reverse the linked list
function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let nextTemp = current.next; // Save the next node
    current.next = prev; // Reverse the link
    prev = current; // Move prev forward
    current = nextTemp; // Move current forward
  }

  return prev; // New head of the reversed list
}

// Helper function to convert an array to a linked list
function arrayToLinkedList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head) {
  let result = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// Example usage:
let head = arrayToLinkedList([1, 2, 3, 4, 5]);
let reversedHead = reverseLinkedList(head);
console.log(linkedListToArray(reversedHead)); // Output: [5, 4, 3, 2, 1]
