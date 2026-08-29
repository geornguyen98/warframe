class RemoteWorker {
  constructor(seed = 12) {
    this.state = seed;
  }

  build_buffer(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 12) % 997;
    }
    return count;
  }
}

const obj = new RemoteWorker();
console.log(obj.build_buffer(12));

module.exports = RemoteWorker;
