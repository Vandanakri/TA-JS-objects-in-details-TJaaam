// data

let title = 'Where is the capital of Jordan';
let options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
let correctAnswerIndex = 1;

// method 
// Without Object

function isAnswerCorrect(index) {
  return index === correctAnswerIndex;
}

function getCorrectAnswer(){
  return options[correctAnswerIndex];
}

// Organize using object

let question = {
  title: 'Where is the capital of Jordan',
  options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  correctAnswerIndex: 1,

isAnswerCorrect(index) {
  return index === question.correctAnswerIndex;
},

getCorrectAnswer(){
  return question.option[question.correctAnswerIndex];
},
};

function createQuestion(tittle, options, correctAnswerIndex) {
  let question = {};
  question.title = tittle;
  question.options = options;
  question.correctAnswerIndex = correctAnswerIndex;
  question.isAnswerCorrect = function(index) {
    return index === this.correctAnswerIndex;
  };
  question.getCorrectAnswer = function() {
    return this.options[this.correctAnswerIndex];
  };
  return question;
}

const totalQueation =  createQuestion(
   'Where is the capital of Jordan',
   ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
   1,
);

