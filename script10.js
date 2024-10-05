const questions = [
    // 1
    {
        question: "Which of these is not a climatic forcing for Earth?",
        answers: [
            { text: "changes in plates tectonics", correct: false },
            { text: "changes in Earth's orbit", correct: false },
            { text: "changes in Sun's orbit", correct: true },
            { text: "changes in Sun's strength", correct: false }
        ]
    },
    // 2
    {
        question: "Mesodebris in the context of plastic debris has fragment of size.",
        answers: [
            { text: ">20mm", correct: false },
            { text: "5-20 mm", correct: true },
            { text: "<5mm", correct: false },
            { text: "<1mm", correct: false }
        ]
    },
    // 3
    {
        question: "Macrodebris in the context of plastic debris had fragment of size.",
        answers: [
            { text: ">20mm", correct: true },
            { text: "5-20mm", correct: false },
            { text: "<5mm", correct: false },
            { text: "<1mm", correct: false }
        ]
    },
    // 4
    {
        question: "\"Any changes in natural or human systems that inadvertently increase vulnerability to climatic stimuli; an adaptation that does not succeed in reducing vulnerability but increase it instead\" is a definition of.",
        answers: [
            { text: "adaptation", correct: false },
            { text: "mitigation", correct: false },
            { text: "maladaptation", correct: true },
            { text: "malmitigation", correct: false }
        ]
    },
    // 5
    {
        question: "Which of these is not a principle of ecological restoration?",
        answers: [
            { text: "ecological integrity", correct: false },
            { text: "long term sustainability", correct: false },
            { text: "benefits and engages scientists", correct: true },
            { text: "informed by past and future", correct: false }
        ]
    },
    // 6
    {
        question: "The government came up with a regulation that incandescent bulbs be replaced by LED bulbs, so that electricity consumption and release of carbon dioxide from power plants is reduced. In the context of climate change, such an action would be called.",
        answers: [
            { text: "adaptation", correct: false },
            { text: "mitigation", correct: true },
            { text: "deceleration", correct: false },
            { text: "maladaptation", correct: false }
        ]
    },
    // 7
    {
        question: "Which of these is not a principle of ecological restoration?",
        answers: [
            { text: "ecological integrity", correct: false },
            { text: "short term sustainability", correct: true },
            { text: "benefits and engages society", correct: false },
            { text: "informed by past and future", correct: false }
        ]
    },
    // 8
    {
        question: "\"The ability of a system to adjust to climate change (including climate variability and extremes) to moderate potential damages, to take advantage of opportunities, or to cope with the consequences\" is a definition of.",
        answers: [
            { text: "adaptive response", correct: false },
            { text: "adaptive capacity", correct: true },
            { text: "mitigative response", correct: false },
            { text: "mitigative capacity", correct: false }
        ]
    },
    // 9
    {
        question: "Which of these is not a climatic forcing for Earth?",
        answers: [
            { text: "changes in plate tectonics", correct: false },
            { text: "changes in Earth's orbit", correct: false },
            { text: "changes in Moon's orbit", correct: true },
            { text: "changes in Sun's strength", correct: false }
        ]
    },
    // 10
    {
        question: "Because of climate change, Mudumalai tiger reserve is suffering from frequent droughts. The management has built several artificial water holes for animals, and fills them up regularly with tankers. In the context of climate change, such an action would be called.",
        answers: [
            { text: "adaptation", correct: true },
            { text: "mitigation", correct: false },
            { text: "deceleration", correct: false },
            { text: "maladaptation", correct: false }
        ]
    },
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

// Shuffle the questions and their answers
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
