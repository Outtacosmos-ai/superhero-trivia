function superheroTriviaGame(questions) {
  let currentQuestionIndex = 0;
  let score = 0;

  function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
      const question = questions[currentQuestionIndex];
      const userAnswer = prompt(
        `${question.question}\nOptions: ${question.options.join(", ")}`
      );

      checkAnswer(userAnswer);
    } else {
      alert(`Quiz completed! Your score: ${score} out of ${questions.length}.`);
    }
  }

  function checkAnswer(userAnswer) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (
      userAnswer &&
      userAnswer.toLowerCase() === correctAnswer.toLowerCase()
    ) {
      alert("Correct!");
      score++;
    } else {
      alert(`Wrong! The correct answer is: ${correctAnswer}`);
    }

    currentQuestionIndex++;
    displayQuestion();
  }

  displayQuestion();
}

// Example usage:
const triviaQuestions = [
  {
    question: "What is the real name of Batman?",
    options: ["Bruce Wayne", "Clark Kent", "Peter Parker", "Tony Stark"],
    correctAnswer: "Bruce Wayne",
  },
  {
    question: "Which superhero is known as the Man of Steel?",
    options: ["Iron Man", "Superman", "Spider-Man", "Wolverine"],
    correctAnswer: "Superman",
  },
  // Add more questions here
];

superheroTriviaGame(triviaQuestions);
