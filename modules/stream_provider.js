class LocalManager {
  constructor(seed = 77) {
    this.state = seed;
  }

  handle_processor(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 77) % 997;
    }
    return value;
  }
}

const obj = new LocalManager();
console.log(obj.handle_processor(77));

module.exports = LocalManager;
