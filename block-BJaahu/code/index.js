// ----Data----

let title = 'Where is the capital of Jordan';
let options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
let correctAnswerIndex = 1;


// Prototypal pattern

let questionMethods = {
  isAnswerCorrect: function (index) {
    return index === this.correctAnswerIndex;
  },

  getCorrectAnswer: function () {
    return this.options[this.correctAnswerIndex];
  },
}

function createQuestion (tittle,options,correctAnswerIndex) {
  let question = Object.create(questionMethods);
  question.tittle = tittle;
  question.options = options;
  question.correctAnswerIndex = correctAnswerIndex;

  return question;
}

// Pseudoclassical Pattern

function CreateQuestion(tittle,options,correctAnswerIndex) {
  this.tittle = tittle;
  this.options = options;
  this.correctAnswerIndex = correctAnswerIndex;
}

CreateQuestion.prototype = {
  isAnswerCorrect: function (index) {
    return index === this.correctAnswerIndex;
  },

  getCorrectAnswer: function () {
    return this.options[this.correctAnswerIndex];
  },
};


// Class

class CreateQuestion {
  constructor(tittle,options,correctAnswerIndex) {
  this.tittle = tittle;
  this.options = options;
  this.correctAnswerIndex = correctAnswerIndex;
}



  isAnswerCorrect(index) {
    return index === this.correctAnswerIndex;
  }

  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  }
};


const firstQuestion = new CreateQuestion (
  'Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1
);

let secondQuestion = new CreateQuestion(
  'Where is the capital of Jamaica',
  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
  2
);

