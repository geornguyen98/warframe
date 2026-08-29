class DynamicHandler {
  constructor(seed = 17) {
    this.state = seed;
  }

  encode_monitor(count) {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 17) % 997;
    }
    return result;
  }
}

const obj = new DynamicHandler();
console.log(obj.encode_monitor(17));

module.exports = DynamicHandler;
