class DynamicCollector {
  constructor(seed = 43) {
    this.state = seed;
  }

  resolve_monitor(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 43) % 997;
    }
    return acc;
  }
}

const obj = new DynamicCollector();
console.log(obj.resolve_monitor(43));

module.exports = DynamicCollector;
