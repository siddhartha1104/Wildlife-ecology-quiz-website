const questions = [
    // 1
    {
        question: "which of these is a positive check according to Malthus?",
        answers: [
            { text: "late marriage", correct: false },
            { text: "war", correct: true },
            { text: "celibacy", correct: false },
            { text: "moral restraint", correct: false }
        ]
    },
    // 2
    {
        question: "the demographic transition sees a society move from",
        answers: [
            { text: "high birth rate, low death rate to low birth rate, low death rate", correct: false },
            { text: "low birth rate, high death rate to low birth rate, low death rate", correct: false },
            { text: "high birth rate, high death rate to low birth rate, low death rate", correct: true },
            { text: "high birth rate, high death rate to low birth rate, high death rate", correct: false }
        ]
    },
    // 3
    {
        question: "according to Malthusian model",
        answers: [
            { text: "population grows in geometric progression, food supply increases in arithmetic progression", correct: true },
            { text: "population grows in geometric progression, food supply increases in geometric progression", correct: false },
            { text: "population grows in arithmetic progression, food supply increases in arithmetic progression", correct: false },
            { text: "population grows in arithmetic progression, food supply increases in geometric progression", correct: false }
        ]
    },
    // 4
    {
        question: "the book 'An essay on the principle of population' was written by",
        answers: [
            { text: "Darwin", correct: false },
            { text: "Malthus", correct: true },
            { text: "Spencer", correct: false },
            { text: "Owens", correct: false }
        ]
    },
    // 5
    {
        question: "_______ is used to identify which potential impacts are relevant to assess.",
        answers: [
            { text: "screening", correct: false },
            { text: "scoping", correct: true },
            { text: "reporting", correct: false },
            { text: "review", correct: false }
        ]
    },
    // 6
    {
        question: "which of these is preventive check according to Malthus?",
        answers: [
            { text: "foresight", correct: true },
            { text: "vice", correct: false },
            { text: "misery", correct: false },
            { text: "flood", correct: false }
        ]
    },
    // 7
    {
        question: "______ determines which projects or developments require a full or partial impact assessment study.",
        answers: [
            { text: "screening", correct: true },
            { text: "scoping", correct: false },
            { text: "reporting", correct: false },
            { text: "review", correct: false }
        ]
    },
    // 8
    {
        question: "which of these is a pillar of sustainability",
        answers: [
            { text: "social sustainability", correct: true },
            { text: "industrial sustainability", correct: false },
            { text: "agricultural sustainability", correct: false },
            { text: "trans-boundary sustainability", correct: false }
        ]
    },
    // 9
    {
        question: "which of these is not a pillar of sustainability ?",
        answers: [
            { text: "environmental sustainability", correct: false },
            { text: "economic sustainability", correct: false },
            { text: "trans-boundary sustainability", correct: true },
            { text: "agricultural sustainability", correct: false }
        ]
    },
    // 10
    {
        question: "the quantum of human impacts is given by",
        answers: [
            { text: "I = P X A X T", correct: true },
            { text: "I = P + A + T", correct: false },
            { text: "I = P + A - T", correct: false },
            { text: "I = P - (A + T)", correct: false }
        ]
    }
];

// Shuffle function for questions
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle function for answers
function shuffleAnswers(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle questions and their answers
shuffleQuestions(questions);
questions.forEach(question => shuffleAnswers(question.answers));

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Score: ${score} / ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
