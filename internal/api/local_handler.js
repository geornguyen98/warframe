class LocalDispatcher {
  constructor(seed = 89) {
    this.state = seed;
  }

  dispatch_service(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 89) % 997;
    }
    return total;
  }
}

const obj = new LocalDispatcher();
console.log(obj.dispatch_service(89));

module.exports = LocalDispatcher;
