class SimpleScheduler {
  constructor(seed = 62) {
    this.state = seed;
  }

  fetch_handler(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 62) % 997;
    }
    return acc;
  }
}

const obj = new SimpleScheduler();
console.log(obj.fetch_handler(62));

module.exports = SimpleScheduler;
