const questions = [
    // 1
    {
        question: "birds on giraffe are an example of",
        answers: [
            { text: "colony", correct: false },
            { text: "commensalism", correct: false },
            { text: "protocooperation", correct: true },
            { text: "allelopathy", correct: false }
        ]
    },
    // 2
    {
        question: "egrets with buffaloes are an example of",
        answers: [
            { text: "colony", correct: false },
            { text: "commensalism", correct: true },
            { text: "protocooperation", correct: false },
            { text: "allelopathy", correct: false }
        ]
    },
    // 3
    {
        question: "the scientific study of animal behaviour is called",
        answers: [
            { text: "behaviourism", correct: false },
            { text: "ecology", correct: false },
            { text: "ethology", correct: true },
            { text: "prey-predator dynamics", correct: false }
        ]
    },
    // 4
    {
        question: "the interaction between exotic shrubs and trees through the action of seed predators is an example of",
        answers: [
            { text: "infraspecific competition", correct: false },
            { text: "apparent competition", correct: true },
            { text: "disguised competition", correct: false },
            { text: "harmonious competition", correct: false }
        ]
    },
    // 5
    {
        question: "harmonious competition occurs where",
        answers: [
            { text: "at least one participant is benefited", correct: false },
            { text: "at least one participant is unharmed", correct: false },
            { text: "both participants are benefited", correct: true },
            { text: "both participants are unharmed", correct: false }
        ]
    },
    // 6
    {
        question: "Hamilton's rule can be stated as",
        answers: [
            { text: "rB < C", correct: false },
            { text: "rB > C", correct: true },
            { text: "rB = C", correct: false },
            { text: "rB + C = 0", correct: false }
        ]
    },
    // 7
    {
        question: "trampling of grass due to the movement of animals is an example of",
        answers: [
            { text: "mutualism", correct: false },
            { text: "ammensalism", correct: true },
            { text: "commensalism", correct: false },
            { text: "protocooperation", correct: false }
        ]
    },
    // 8
    {
        question: "I observe a monkey take a tick out of another monkey's head and eat it. In the social context, this behaviour would be called",
        answers: [
            { text: "tick hunting", correct: false },
            { text: "auto grooming", correct: false },
            { text: "allo grooming", correct: true },
            { text: "foraging", correct: false }
        ]
    },
    // 9
    {
        question: "an inventory of behaviours exhibited by an animal during a behaviour exercise is called",
        answers: [
            { text: "ecogram", correct: false },
            { text: "ethogram", correct: true },
            { text: "behaviourogram", correct: false },
            { text: "animalogram", correct: false }
        ]
    },
    // 10
    {
        question: "I observe a bird take a tick out of another bird's head and eat it. In the social context, this behaviour would be called",
        answers: [
            { text: "tick hunting", correct: false },
            { text: "auto grooming", correct: false },
            { text: "allo grooming", correct: true },
            { text: "foraging", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

// Function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle the questions before starting the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    shuffle(questions); // Shuffle questions
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // Shuffle answers before displaying
    shuffle(currentQuestion.answers);

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
