class AsyncLoader {
  constructor(seed = 18) {
    this.state = seed;
  }

  run_gateway(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 18) % 997;
    }
    return acc;
  }
}

const obj = new AsyncLoader();
console.log(obj.run_gateway(18));

module.exports = AsyncLoader;
