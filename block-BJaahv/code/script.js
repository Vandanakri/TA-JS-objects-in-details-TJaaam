//  Data:
let name = 'My name is Vandana Sah';
let id = 'vandana123annusah@gmail.com';
let noOfProjects = 1;

// prototype Pattern

let questionMethod = {

increaseNoOfProjects: function(value) {
  this.noOfProjects = this.noOfProjects + value;
  return this.noOfProjects;
},
decreaseNoOfProjects: function(value) {
  this.noOfProjects = this.noOfProjects - value;
  return this.noOfProjects;
},
changeName: function (name) {
  this.name = name;
  return this.name;
}, 
getId: function(id) {
  this.id = id;
  return this.id;
},
};

function createUser (name,id,noOfProjects) {
  let question = Object.create(questionMethod);
  question.name = name;
  question.id = id;
  question.noOfProjects = noOfProjects;

  return question;
}

// Pseudoclassical

function createUser(name,id,noOfProjects) {
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;
}

createUser.prototype =  {
  increaseNoOfProjects: function(value = 1) {
    this.noOfProjects = this.noOfProjects + value;
    return this.noOfProjects;
  },
  decreaseNoOfProjects: function(value = 1) {
    this.noOfProjects = this.noOfProjects - value;
    return this.noOfProjects;
  },
  changeName: function (name) {
    this.name = name;
    return this.name;
  },
  getId: function(id) {
    this.id = id;
    return this.id;
  },
};

// Class

class createUser {
  constructor(name,id,noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }
  increaseNoOfProjects(value) {
    this.noOfProjects = this.noOfProjects + value;
    return this.noOfProjects;
  }
  decreaseNoOfProjects(value) {
    this.noOfProjects = this.noOfProjects - value;
    return this.noOfProjects;
  }
  changeName(name) {
    this.name = name;
    return this.name;
  }
  getId(id) {
    this.id = id;
    return this.id;
  }
}


let user1 = new createUser("Sameer","vandana123annusah@gmail.com",5);
let user2 = new createUser("Vandana Sah","vandana123annusah@gmail.com",10);