// script.js
var questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            { text: 'script', correct: true },
            { text: 'javascript', correct: false },
            { text: 'js', correct: false }
        ]
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        answers: [
            { text: 'The head section', correct: false },
            { text: 'The body section', correct: true },
            { text: 'Both the head and body section are correct', correct: false }
        ]
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        answers: [
            { text: 'script href="xxx.js"', correct: false },
            { text: 'script name="xxx.js"', correct: false },
            { text: 'script src="xxx.js"', correct: true }
        ]
    }
];

var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');
var nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    nextButton.classList.add('hide');
    showQuestion();
}

function showQuestion() {
    resetState();
    var currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        var button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    if (correct) {
        selectedButton.classList.add('correct');
    } else {
        selectedButton.classList.add('incorrect');
    }
    if (questions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        nextButton.innerText = 'Restart';
        nextButton.classList.remove('hide');
    }
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion();
});

startQuiz();
