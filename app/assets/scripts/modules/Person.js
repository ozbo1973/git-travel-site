function Person(name, color) {
  this.fullname = name;
  this.favColor = color;
  greet = function() {
    console.log(
      "Hello, " + this.fullname + " your fav color is " + this.favColor
    );
  };
}

module.exports = Person;
