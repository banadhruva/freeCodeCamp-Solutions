const questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "Geography",
    question: "What is the capital of India?",
    choices: ["Mumbai", "New Delhi", "Chennai"],
    answer: "New Delhi"
  },
  {
    category: "Mathematics",
    question: "What is the square root of 64?",
    choices: ["6", "8", "10"],
    answer: "8"
  },
  {
    category: "Computer Science",
    question: "Which language is primarily used for web development?",
    choices: ["Python", "JavaScript", "C++"],
    answer: "JavaScript"
  },
  {
    category: "History",
    question: "Who was the first President of India?",
    choices: ["Jawaharlal Nehru", "Dr. Rajendra Prasad", "Mahatma Gandhi"],
    answer: "Dr. Rajendra Prasad"
  }
];

function getRandomQuestion(questions) {
  const index = Math.floor(Math.random() * questions.length);
  return questions[index];
}

function getRandomComputerChoice(choices) {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  }
  return "The computer's choice is wrong. The correct answer is: " + question.answer;
}
