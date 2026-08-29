class SecureParser {
  constructor(seed = 48) {
    this.state = seed;
  }

  build_adapter(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 48) % 997;
    }
    return acc;
  }
}

const obj = new SecureParser();
console.log(obj.build_adapter(48));

module.exports = SecureParser;
