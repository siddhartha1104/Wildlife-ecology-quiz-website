const questions = [
    // 1
    {
        question: "a climax caused by wildfires is an example of",
        answers: [
            { text: "climatic climax", correct: false },
            { text: "edaphic climax", correct: false },
            { text: "disclimax", correct: false },
            { text: "catastrophic climax", correct: true }
        ]
    },
    // 2
    {
        question: "when compared to generalist species, specialist species have",
        answers: [
            { text: "narrower niches", correct: true },
            { text: "broader niches", correct: false },
            { text: "same-size niches", correct: false },
            { text: "none of these", correct: false }
        ]
    },
    // 3
    {
        question: "which of these depicts correctly the lithosere primary succession",
        answers: [
            { text: "rock --> crustose lichen --> foliose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax", correct: true },
            { text: "rock --> foliose lichen --> crustose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax", correct: false },
            { text: "moss --> crustose lichen --> foliose lichen --> rock --> herbaceous stage --> shrub --> woodland --> climax", correct: false },
            { text: "rock --> crustose lichen --> foliose lichen --> shrub --> herbaceous stage --> moss --> woodland --> climax", correct: false }
        ]
    },
    // 4
    {
        question: "importance value can be written as",
        answers: [
            { text: "relative density + relative frequency X relative dominance", correct: false },
            { text: "relative density X relative frequency + relative dominance", correct: false },
            { text: "relative density + relative frequency + relative dominance", correct: true },
            { text: "relative density X relative frequency X relative dominance", correct: false }
        ]
    },
    // 5
    {
        question: "lithosere is an example of",
        answers: [
            { text: "hydrosere", correct: false },
            { text: "xerosere", correct: true },
            { text: "psammosere", correct: false },
            { text: "halosere", correct: false }
        ]
    },
    // 6
    {
        question: "importance value varies from",
        answers: [
            { text: "0 to 10", correct: false },
            { text: "0 to 50", correct: false },
            { text: "0 to 100", correct: false },
            { text: "0 to 300", correct: true }
        ]
    },
    // 7
    {
        question: "a species found most frequently in a particular community, but also present occasionally in others is called",
        answers: [
            { text: "accidental species", correct: false },
            { text: "indifferent species", correct: false },
            { text: "selective species", correct: true },
            { text: "exclusive species", correct: false }
        ]
    },
    // 8
    {
        question: "the climax near Tindi village is being controlled by disturbance by cattle. this is an example of",
        answers: [
            { text: "climatic climax", correct: false },
            { text: "edaphic climax", correct: false },
            { text: "disclimax", correct: true },
            { text: "catastrophic climax", correct: false }
        ]
    },
    // 9
    {
        question: "which of these is correct?",
        answers: [
            { text: "a. fundamental niche > realised niche", correct: false },
            { text: "b. fundamental niche = realised niche", correct: false },
            { text: "c. fundamental niche < realised niche", correct: false },
            { text: "a or b", correct: true }
        ]
    },
    // 10
    {
        question: "which of these is not a characteristic of pioneer species?",
        answers: [
            { text: "ability to grow on bare rocks", correct: false },
            { text: "ability to tolerate extreme temperatures", correct: false },
            { text: "large size", correct: true },
            { text: "short life span", correct: false }
        ]
    }
];

// Shuffle questions function
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle answers function
function shuffleAnswers(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    shuffleQuestions(questions); // Shuffle questions
    showQuestion();
}

function showQuestion() {
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    shuffleAnswers(currentQuestion.answers); // Shuffle answers

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
    const isCorrect = selectedBtn.dataset.correct === "true";

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
