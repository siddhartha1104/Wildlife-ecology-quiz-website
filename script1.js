const questions = [
    {
        question: '"Enquiry into plants" is a book written by',
        answers:[
            {text: "Theophrastus", correct: true},
            {text: "Linnaeus", correct: false},
            {text: "Malthus", correct: false},
            {text: "Humboldt", correct: false}
        ]
    },
    {
        question: "In the Greek word root of Ecology, Oikos refers to",
        answers:[
            {text: "Household", correct: true},
            {text: "Preservation", correct: false},
            {text: "Environment", correct: false},
            {text: "Study", correct: false}
        ]
    },
    {
        question: "In the Greek word root of Ecology, logos refers to",
        answers:[
            {text: "Household", correct: false},
            {text: "Preservation", correct: false},
            {text: "Environment", correct: false},
            {text: "Study", correct: true}
        ]
    },
    {
        question: "Ecology is the scientific study of interactions among organisms and their_____. (fill in the blanks)",
        answers:[
            {text: "Habitat", correct: false},
            {text: "Niche", correct: false},
            {text: "Environment", correct: true},
            {text: "Population", correct: false}
        ]
    },
    {
        question: "Who amongst these is considered the father of Biogeography?",
        answers:[
            {text: "Theophrastus", correct: false},
            {text: "Linnaeus", correct: false},
            {text: "Malthus", correct: false},
            {text: "Humboldt", correct: true}
        ]
    },
    {
        question: "Which of these is not a characteristic of fitness?",
        answers:[
            {text: "Fitness is environment-specific", correct: false},
            {text: "Fitness is species-specific", correct: false},
            {text: "Higher reproductive rate means higher fitness", correct: true},
            {text: "Fitness should be measured across several generations", correct: false}
        ]
    },
    {
        question: "Which of these is not a kind of selection?",
        answers:[
            {text: "Directional", correct: false},
            {text: "Stochastic", correct: true},
            {text: "Disruptive", correct: false},
            {text: "Stabilising", correct: false}
        ]
    },
    {
        question: "Ecology is the scientific study of _______that determine the distribution and abundance of organisms. (Fill in the blanks)",
        answers:[
            {text: "Statics", correct: false},
            {text: "Interactions", correct: true},
            {text: "Dynamics", correct: false},
            {text: "Habitat", correct: false}
        ]
    },
    {
        question: "Which of these is not a characteristic of fitness?",
        answers:[
            {text: "Fitness is environment-specific", correct: false},
            {text: "Fitness is species-specific", correct: false},
            {text: "Fitness works on traits such as size and speed", correct: true},
            {text: "Fitness should be measured across several generations", correct: false}
        ]
    },
    {
        question: "Which of these is not a step in natural selection?",
        answers:[
            {text: "Variation", correct: false},
            {text: "Underpopulation", correct: true},
            {text: "Struggle for existence", correct: false},
            {text: "Survival of the fittest", correct: false}
        ]
    }
];

// Get the necessary HTML elements
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
