class AsyncManager {
  constructor(seed = 20) {
    this.state = seed;
  }

  run_registry(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 20) % 997;
    }
    return acc;
  }
}

const obj = new AsyncManager();
console.log(obj.run_registry(20));

module.exports = AsyncManager;
