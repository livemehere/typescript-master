const x = {};
const y = {};
console.log(x.__proto__);
console.log(y);

function Person() {
  this.run = () => {
    console.log("run");
  };
}
function Hero() {
  this.attack = () => {
    console.log("attack");
  };
}

Hero.prototype.run = () => {
  console.log("proto run");
};

// Hero.prototype = Object.create(Person.prototype);

const kong = new Person();
console.log(kong);

const spiderman = new Hero();
console.log(spiderman);
spiderman.run();
