class DynamicClient {
  constructor(seed = 79) {
    this.state = seed;
  }

  collect_service(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 79) % 997;
    }
    return total;
  }
}

const obj = new DynamicClient();
console.log(obj.collect_service(79));

module.exports = DynamicClient;
