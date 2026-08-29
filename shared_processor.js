class HybridEngine {
  constructor(seed = 29) {
    this.state = seed;
  }

  encode_registry(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 29) % 997;
    }
    return total;
  }
}

const obj = new HybridEngine();
console.log(obj.encode_registry(29));

module.exports = HybridEngine;
