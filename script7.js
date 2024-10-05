const questions = shuffle([
    // 1
    {
        question: "I tried growing vegetables under my teak plantation, but the vegetable plants died out. I should be concerned about",
        answers: shuffle([
            { text: "autophagy", correct: false },
            { text: "allelophagy", correct: false },
            { text: "autopathy", correct: false },
            { text: "allelopathy", correct: true }
        ])
    },
    // 2
    {
        question: "Which of these is a physical factor of habitat?",
        answers: shuffle([
            { text: "soil", correct: false },
            { text: "moisture", correct: false },
            { text: "predators", correct: true },
            { text: "temperatures", correct: false }
        ])
    },
    // 3
    {
        question: "\"The rate of biological process is limited by that factor in least amount relative to requirement, so there is a single limiting factor\" this is the statement for",
        answers: shuffle([
            { text: "Liebig's law of minimum", correct: true },
            { text: "Liebig's law of maximum", correct: false },
            { text: "Shelford's law of tolerance", correct: false },
            { text: "Shelford's law of intolerance", correct: false }
        ])
    },
    // 4
    {
        question: "Transplantation experiments are used to find",
        answers: shuffle([
            { text: "potential range", correct: true },
            { text: "effective range", correct: false },
            { text: "actual range", correct: false },
            { text: "economic range", correct: false }
        ])
    },
    // 5
    {
        question: "\"Quick movement over large distances, often across unsuitable terrain\" is a definition of",
        answers: shuffle([
            { text: "diffusion", correct: false },
            { text: "secular dispersal", correct: false },
            { text: "jump dispersal", correct: true },
            { text: "drifting", correct: false }
        ])
    },
    // 6
    {
        question: "The movement of lions across the Gir landscape is an example of",
        answers: shuffle([
            { text: "diffusion", correct: true },
            { text: "secular dispersal", correct: false },
            { text: "jump dispersal", correct: false },
            { text: "drifting", correct: false }
        ])
    },
    // 7
    {
        question: "Good climate is a",
        answers: shuffle([
            { text: "chemical factor", correct: false },
            { text: "demographic factor", correct: false },
            { text: "push factor", correct: false },
            { text: "pull factor", correct: true }
        ])
    },
    // 8
    {
        question: "Scarcity of food is a",
        answers: shuffle([
            { text: "chemical factor", correct: false },
            { text: "demographic factor", correct: false },
            { text: "push factor", correct: true },
            { text: "pull factor", correct: false }
        ])
    },
    // 9
    {
        question: "\"The geographical distribution of a species will be controlled by that environment factor for which the organism has the narrowest range of tolerance\" this is the statement for",
        answers: shuffle([
            { text: "Liebig's law of minimum", correct: false },
            { text: "Liebig's law of maximum", correct: false },
            { text: "Shelford's law of tolerance", correct: true },
            { text: "Shelford's law of intolerance", correct: false }
        ])
    },
    // 10
    {
        question: "The movement of individuals away from their place of birth or hatching or seed production into a new habitat or area to survive and reproduce is called",
        answers: shuffle([
            { text: "translocation", correct: false },
            { text: "migration", correct: false },
            { text: "dispersal", correct: true },
            { text: "drifting", correct: false }
        ])
    }
]);

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

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
