class RecentCounter {
  constructor() {
    this.requests = [];
  }

  ping(t) {
    this.requests.push(t);
    this.requests = this.requests.filter((time) => time >= t - 3000);
    return this.requests.length;
  }
}

// Example usage:
const obj = new RecentCounter();
console.log(obj.ping(1)); // Output: 1
console.log(obj.ping(100)); // Output: 2
console.log(obj.ping(3001)); // Output: 3
console.log(obj.ping(3002)); // Output: 3
