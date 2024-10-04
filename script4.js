const questions = [
    // 1
    {
        question: "consider the food </br>chain grass-->grasshopper-->frog-->snake-->hawk <br> as we move up the food chain:",
        answers:[
            {text: "available energy decreases ", correct: true},
            {text: "available energy increases ", correct: false},
            {text: "available energy remains same", correct: false},
            {text: "available energy is zero everywhere ", correct: false}
        ]
    },
    // 2
    {
        question: "consider the food chain <br> grass --> grasshopper --> frog --> snake --> hawk <br>in the food chain:",
        answers:[
            {text: "hawk is producer ", correct: false},
            {text: "hawk is consumer and carnivore ", correct: true},
            {text: "hawk is consumer and herbivore ", correct: false},
            {text: "hawk is decomposer", correct: false}
        ]
    },
    // 3
    {
        question: "trees --> birds --> parasites --> hyperparasites represent",
        answers:[
            {text: "upright pyramid of numbers", correct: false},
            {text: "inverted pyramid of numbers ", correct: true},
            {text: "spindle pyramid of numbers ", correct: false},
            {text: "dumb-bell pyramid of numbers ", correct: false},
        ]
    },
    // 4
    {
        question: "consider the food chain <br>grass --> grasshopper --> frog --> snake --> hawk<br> in this food chain",
        answers:[
            {text: "frog is producer", correct: false},
            {text: "frog is consumer and carnivore", correct: true},
            {text: "frog is consumer and herbivore", correct: false},
            {text: "frog is decomposer", correct: false},
        ]
    },
    // 5
    {
        question: "at the compensation point",
        answers:[
            {text: "photosynthesis = respiration", correct: true},
            {text: "photosynthesis < respiration", correct: false},
            {text: "photosynthesis > respiration", correct: false},
            {text: "photosynthesis = 0", correct: false},
        ]
    },
    // 6
    {
        question: "tree --> frugivorous birds --> hawk represents",
        answers:[
            {text: "upright pyramid of numbers", correct: false},
            {text: "inverted pyramid of numbers", correct: false},
            {text: "spindle pyramid of numbers", correct: true},
            {text: "dumb-bell pyramid of numbers", correct: false},
        ]
    },
    // 7
    {
        question: "glacial lakes are typical examples of",
        answers:[
            {text: "eutrophic lakes", correct: false},
            {text: "hypereutrophic lakes", correct: false},
            {text: "oligotrophic lakes", correct: true},
            {text: "mesotrophic lakes", correct: false},
        ]
    },
    // 8
    {
        question: "consider the food chain <br>grass --> grasshopper --> frog --> snake -->hawk <br>in this food chain",
        answers:[
            {text: "more numbers of hawks than grasshoppers can be supported", correct: false},
            {text: "more numbers of grasshoppers than hawks can be supported", correct: true},
            {text: "equal numbers of hawks and grasshoppers can be supported", correct: false},
            {text: "non of these", correct: false},
        ]
    },
    // 9
    {
        question: "if we all become vegetarians, we'll be able to support our large populations. this can be explained through",
        answers:[
            {text: "1% rule", correct: false},
            {text: "10% rule", correct: true},
            {text: "biodiversity", correct: false},
            {text: "trophic cascades", correct: false},
        ]
    },
    // 10
    {
        question: "net primary productivity is given by",
        answers:[
            {text: "APAR / LUE", correct: false},
            {text: "APAR - LUE", correct: false},
            {text: "APAR x LUE", correct: true},
            {text: "APAR + LUE", correct: false},
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

