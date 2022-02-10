// --------Animal------

let animalMethod = {
  eat: function() {
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation: function (newLocation) {
    this.location = newLocation;
    return this.location
  },
};

