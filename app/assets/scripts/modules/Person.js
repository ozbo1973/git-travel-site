class Person {
  constructor(name, favColor) {
    this.fullname = name;
    this.favColor = favColor;
  }

  greet() {
    console.log(
      "Hello, " + this.fullname + " your fav color is " + this.favColor
    );
  }
}

export default Person;
