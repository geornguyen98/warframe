class RemoteSession {
  constructor(seed = 91) {
    this.state = seed;
  }

  build_parser(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 91) % 997;
    }
    return acc;
  }
}

const obj = new RemoteSession();
console.log(obj.build_parser(91));

module.exports = RemoteSession;
