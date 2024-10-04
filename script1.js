const questions = [
    {
        question: '"Enquiry into plants" is a book written by',
        answers:[
            {text: "Theophrastus", correct: true},
            {text: "Linnaeus", correct: false},
            {text: " Malthus", correct: false},
            {text: " Humboldt", correct: false}
        ]
    },
    {
        question: "In the Greek word root of Ecology, Oikos refers to",
        answers:[
            {text: "household ", correct: true},
            {text: "preservation  ", correct: false},
            {text: "environment", correct: false},
            {text: "study", correct: false}
        ]
    },
    {
        question: "In the Greek word root of Ecology, logos refers to ",
        answers:[
            {text: "household", correct: false},
            {text: "preservation", correct: false},
            {text: "environment", correct: false},
            {text: "study ", correct: true},
        ]
    },
    {
        question: "Ecology is the scientific study of interactions among organisms and their_____. (fill in the blanks)",
        answers:[
            {text: "habitat", correct: false},
            {text: "niche", correct: false},
            {text: "environment", correct: true},
            {text: "population ", correct: false},
        ]
    },
    {
        question: "Who amongst these is considered the father of Biogeography?",
        answers:[
            {text: "Theophrastus", correct: false},
            {text: " Linnaeus", correct: false},
            {text: " Malthus", correct: false},
            {text: " Humboldt ", correct: true},
        ]
    },
    {
        question: "Which of these is not a characteristics of fitness?",
        answers:[
            {text: " Fitness id environment- specific ", correct: false},
            {text: " Fitness is species- specific ", correct: false},
            {text: " Higher reproductive rate means higher fitness ", correct: true},
            {text: "Fitness should be measured across several generations  ", correct: false},
        ]
    },
    {
        question: "Which of these is not a kind of selection",
        answers:[
            {text: " directional ", correct: false},
            {text: "  stochastic ", correct: true},
            {text: "  disruptive ", correct: false},
            {text: " stabilising ", correct: false},
        ]
    },
    {
        question: "Ecology is the scientific study of _______that determine the distribution and abundance of organisms. (Fill in the blanks)",
        answers:[
            {text: "statics", correct: false},
            {text: "interactions", correct: true},
            {text: "dynamics", correct: false},
            {text: "habitat", correct: false},
        ]
    },
    {
        question: "Which of these is not a characteristic of fitness?",
        answers:[
            {text: "Fitness is environment-specific.", correct: false},
            {text: "Fitness is species-specific.", correct: false},
            {text: "Fitness works on traits such as size and speed.", correct: true},
            {text: "Fitness should be measured across several generations.", correct: false},
        ]
    },
    {
        question: "Which of these is not a step in natural selection?",
        answers:[
            {text: "variation", correct: false},
            {text: "underpopulation", correct: true},
            {text: "struggle for existence", correct: false},
            {text: "survival of the fittest", correct: false},
        ]
    },

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
 
function showQuestion(){

    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

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

