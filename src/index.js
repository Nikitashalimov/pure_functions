class Unit {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  status() {
    if (this.health >= 50) {
      return 'healthy';
    }
    if (this.health >= 15 && this.health < 50) {
      return 'wounded';
    }

    return 'critical';
  }
}

module.exports = Unit;
