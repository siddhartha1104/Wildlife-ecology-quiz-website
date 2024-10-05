const questions = [
    {
        question: "Hierarchy emerges almost inevitably through a wide variety of evolutionary processes, for the simple reason that hierarchical structures are _____ (fill in the blank)",
        answers:[
            {text: "perfect", correct: false},
            {text: "imperfect", correct: false},
            {text: "stable", correct: true},
            {text: "unstable", correct: false}
        ]
    },
    {
        question: "The mitochondrion is a/an",
        answers:[
            {text: "sub-cellular organelle", correct: true},
            {text: "cell", correct: false},
            {text: "tissue", correct: false},
            {text: "organ", correct: false}
        ]
    },
    {
        question: "The laboratory approach to ecology uses",
        answers:[
            {text: "equations", correct: false},
            {text: "models", correct: false},
            {text: "observations", correct: false},
            {text: "experiments", correct: true}
        ]
    },
    {
        question: '"The diversity that exists among different geographies" are',
        answers:[
            {text: "alpha biodiversity", correct: false},
            {text: "beta biodiversity", correct: false},
            {text: "gamma biodiversity", correct: true},
            {text: "delta biodiversity", correct: false}
        ]
    },
    {
        question: "The hierarchical system was given by",
        answers:[
            {text: "simon", correct: true},
            {text: "watson", correct: false},
            {text: "hutchinson", correct: false},
            {text: "humboldt", correct: false}
        ]
    },
    {
        question: '"Groups of actually or potentially interbreeding natural populations, which are reproductively isolated from other such species" is a definition of',
        answers:[
            {text: "cell", correct: false},
            {text: "species", correct: true},
            {text: "ecosystems", correct: false},
            {text: "biomes", correct: false}
        ]
    },
    {
        question: '"The diversity that exists within an ecosystem" is',
        answers:[
            {text: "alpha biodiversity", correct: true},
            {text: "beta biodiversity", correct: false},
            {text: "gamma biodiversity", correct: false},
            {text: "delta biodiversity", correct: false}
        ]
    },
    {
        question: "The emergent principle can be stated as",
        answers:[
            {text: "whole = sum of parts", correct: false},
            {text: "whole < sum of parts", correct: false},
            {text: "whole > sum of parts", correct: true},
            {text: "none of these", correct: false}
        ]
    },
    {
        question: "There is more biodiversity in areas with",
        answers:[
            {text: "less competition, less predation", correct: false},
            {text: "less competition, more predation", correct: false},
            {text: "more competition, more predation", correct: true},
            {text: "more competition, less predation", correct: false}
        ]
    },
    {
        question: "For more biodiversity, the level of disturbance should be",
        answers:[
            {text: "less", correct: false},
            {text: "intermediate", correct: true},
            {text: "more", correct: false},
            {text: "none of these", correct: false}
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
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    shuffle(questions);  // Shuffle questions
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
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

        if(answer.correct){
            button.dataset.correct = answer.correct; 
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";

    if(isCorrect){
        selectedBtn.classList.add("correct"); 
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Score: ${score} / ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();
