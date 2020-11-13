export default class AgeCalculator {
  constructor(name, age) {
    this.name = name;
    this.age = Math.abs(age);
    this.relativeAge;
    this.expect;
    this.planet = [1, 0.24, 0.62, 1.88, 11.6];
  }
  mercuryAge() {
    this.relativeAge = Math.floor(parseInt(this.age) * this.planet[1]);
    return (`${this.name} is ${this.relativeAge} years old on Mercury!`);
  }
  venusAge() {
    this.relativeAge = Math.floor(parseInt(this.age) * this.planet[2]);
    return (`${this.name} is ${this.relativeAge} years old on Venus!`);
  }
  marsAge() {
    this.relativeAge = Math.floor(parseInt(this.age) * this.planet[3]);
    return (`${this.name} is ${this.relativeAge} years old on Mars!`);
  }
  jupiterAge() {
    this.relativeAge = Math.floor(parseInt(this.age) * this.planet[4]);
    return (`${this.name} is ${this.relativeAge} years old on Jupiter!`);
  }
  expectancy() {
    let diff = Math.abs(this.age - 80);
    let eAge = Math.floor(diff * this.planet[0]);
    let meAge = Math.floor(diff * this.planet[1]);
    let vAge = Math.floor(diff * this.planet[2]);
    let maAge = Math.floor(diff * this.planet[3]);
    let jAge = Math.floor(diff * this.planet[4]);
    if (this.age > 80) {
      return `Here's your life expectancy on different planets: You've lived ${eAge} years past your expected demise on Earth, ${meAge} years past your expected demise on Mercury, ${vAge} years past your expected demise on Venus, ${maAge} years past your expected demise on Mars, and ${jAge} years past your expected demise on Jupiter!`;
    }
    else {
      return `Here's your life expectancy on different planets: You have ${eAge} years left on Earth, ${meAge} years left on Mercury, ${vAge} years left on Venus, ${maAge} years left on Mars, and ${jAge} years left on Jupiter!`;
    }
  }    
}
