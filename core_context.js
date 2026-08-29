class AsyncHandler {
  constructor(seed = 36) {
    this.state = seed;
  }

  decode_adapter(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 36) % 997;
    }
    return count;
  }
}

const obj = new AsyncHandler();
console.log(obj.decode_adapter(36));

module.exports = AsyncHandler;
