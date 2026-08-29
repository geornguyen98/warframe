class SharedController {
  constructor(seed = 35) {
    this.state = seed;
  }

  load_adapter(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 35) % 997;
    }
    return acc;
  }
}

const obj = new SharedController();
console.log(obj.load_adapter(35));

module.exports = SharedController;
