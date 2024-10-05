const questions = shuffle([
    // 1
    {
        question: "According to Leopold, which of these is not a tool of habitat management?",
        answers: shuffle([
            {text: "fire", correct: false},
            {text: "gun", correct: false},
            {text: "cattle", correct: false},
            {text: "sickle", correct: true}
        ])
    },
    // 2
    {
        question: "which of these correctly represents the process of habitat fragmentation and loss?",
        answers: shuffle([
            {text: "original forest --> dissection --> perforation --> fragmentation --> attrition", correct: true},
            {text: "original forest --> dissection --> attrition --> fragmentation --> perforation", correct: false},
            {text: "original forest --> dissection --> perforation --> attrition --> fragmentation", correct: false},
            {text: "original forest --> dissection --> fragmentation --> perforation --> attrition", correct: false}
        ])
    },
    // 3
    {
        question: "we prefer those areas for the creation of conservation reserve where the level of threat is?",
        answers: shuffle([
            {text: "very high", correct: false},
            {text: "medium", correct: true},
            {text: "very low", correct: false},
            {text: "non-existent", correct: false}
        ])
    },
    // 4
    {
        question: "\"subset of physical and biotic environmental factors that permit an animal (or plant) to survive and reproduce\" is the definition of?",
        answers: shuffle([
            {text: "habitat", correct: true},
            {text: "ecosystem", correct: false},
            {text: "biome", correct: false},
            {text: "biosphere", correct: false}
        ])
    },
    // 5
    {
        question: "captive breeding is an example of?",
        answers: shuffle([
            {text: "in-situ conservation", correct: false},
            {text: "ex-situ conservation", correct: true},
            {text: "in-situ preservation", correct: false},
            {text: "ex-situ preservation", correct: false}
        ])
    },
    // 6
    {
        question: "which of these is a deterministic factor?",
        answers: shuffle([
            {text: "environmental variation", correct: false},
            {text: "forest fire", correct: false},
            {text: "death rate", correct: true},
            {text: "diseases", correct: false}
        ])
    },
    // 7
    {
        question: "which of these is a stochastic factor?",
        answers: shuffle([
            {text: "birth rate", correct: false},
            {text: "death rate", correct: false},
            {text: "population structure", correct: false},
            {text: "environmental fluctuation", correct: true}
        ])
    },
    // 8
    {
        question: "zoo is an example of?",
        answers: shuffle([
            {text: "in-situ conservation", correct: false},
            {text: "ex-situ conservation", correct: true},
            {text: "in-situ preservation", correct: false},
            {text: "ex-situ preservation", correct: false}
        ])
    },
    // 9
    {
        question: "the acronym HIPPO does not include?",
        answers: shuffle([
            {text: "habitat loss", correct: false},
            {text: "habitat enhancement", correct: true},
            {text: "invasive species", correct: false},
            {text: "human over- population", correct: false}
        ])
    },
    // 10
    {
        question: "the acronym HIPPO does not include?",
        answers: shuffle([
            {text: "habitat loss", correct: false},
            {text: "invasive species", correct: false},
            {text: "pollination", correct: true},
            {text: "pollution", correct: false}
        ])
    }
]);

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

// Function to shuffle questions and answers
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

startQuiz();
