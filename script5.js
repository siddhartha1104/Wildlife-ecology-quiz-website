const questions = [
    // 1
    {
        question: "____ is how close the measured values are to the correct value",
        answers:[
            {text: "precision", correct: false},
            {text: "bias", correct: false},
            {text: "accuracy", correct: true},
            {text: "variance", correct: false}
        ]
    },
    // 2
    {
        question: "which of these us not a measure of absolute population density?",
        answers:[
            {text: " total count", correct: false},
            {text: " capture- recapture method ", correct: false},
            {text: " pelt count", correct: true},
            {text: " removal method ", correct: false}
        ]
    },
    // 3
    {
        question: "the logistic growth equation, when plotted, appears",
        answers:[
            {text: "I shaped ", correct: false},
            {text: "S shaped", correct: true},
            {text: "J shaped ", correct: false},
            {text: "O shaped ", correct: false},
        ]
    },
    // 4
    {
        question: "______ employs a simple rule of selecting every kth unit starting with a number chosen at random from 1 to k as the random start",
        answers:[
            {text: "simple random sampling", correct: false},
            {text: " systematic sampling ", correct: true},
            {text: " stratifies sampling", correct: false},
            {text: " multistage sampling ", correct: false},
        ]
    },
    // 5
    {
        question: "the juvenile mortality rate is the annual number of death of juveniles per",
        answers:[
            {text: "100 births", correct: false},
            {text: "1000 births", correct: false},
            {text: "1000 live births ", correct: true},
            {text: "100 live births", correct: false},
        ]
    },
    // 6
    {
        question: "the minimum replacement level fertility for a population to grow should be greater than",
        answers:[
            {text: "a. 1", correct: false},
            {text: "b. 2", correct: true},
            {text: "c. 4", correct: false},
            {text: "d. 3", correct: false},
        ]
    },
    // 7
    {
        question: "pan traps are used for sampling",
        answers:[
            {text: " non- pollinator insects", correct: false},
            {text: " butterflies", correct: false},
            {text: "pollinator insects ", correct: true},
            {text: "bees ", correct: false},
        ]
    },
    // 8
    {
        question: "which of these is true",
        answers:[
            {text: "physiological longevity > ecological longevity", correct: false},
            {text: "physiological longevity = ecological longevity", correct: false},
            {text: "physiological longevity < ecological longevity", correct: false},
            {text: "a or b", correct: true},
        ]
    },
    // 9
    {
        question: "a sampling procedure such that each possible combination of sampling units out of the population has the same chance of being selected is referred to as",
        answers:[
            {text: " systematic sampling", correct: false},
            {text: "simple random sampling", correct: true},
            {text: "stratified sampling", correct: false},
            {text: "multistage sampling", correct: false},
        ]
    },
    // 10
    {
        question: "cover board surveys are typically used for sampling",
        answers:[
            {text: "fishes", correct: false},
            {text: "large mammals", correct: false},
            {text: " herpetofauna", correct: true},
            {text: "carnivores", correct: false},
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

