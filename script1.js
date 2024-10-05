// Sample Questions Array for Week 1
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

// Shuffle Function
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

// Shuffle Questions and Answers
const prepareQuiz = () => {
    shuffleArray(questions);
    questions.forEach(question => {
        shuffleArray(question.answers);
    });
};

// Display Questions
const displayQuestions = () => {
    const questionsContainer = document.getElementById("questions-container");
    questionsContainer.innerHTML = '';
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <label class="question-label">${index + 1}. ${question.question}</label>
            ${question.answers.map((answer) => `
                <label>
                    <input type="radio" name="question${index}" value="${answer.text}" required>
                    ${answer.text}
                </label>
            `).join('')}
        `;
        questionsContainer.appendChild(questionDiv);
    });
};

// Handle Form Submission
const handleSubmit = (event) => {
    event.preventDefault();
    const userAnswers = Array.from(document.querySelectorAll('input[type="radio"]:checked'));
    const resultDiv = document.getElementById("result");
    const warningDiv = document.getElementById("warning");
    const submitButton = document.getElementById("submit-btn");
    const tryAgainButton = document.getElementById("try-again-btn");
    
    warningDiv.classList.add('hidden');

    if (userAnswers.length !== questions.length) {
        warningDiv.classList.remove('hidden');
        return;
    }

    let score = 0;

    // Clear previous result
    resultDiv.innerHTML = '';
    
    userAnswers.forEach((answer, index) => {
        const selectedAnswer = answer.value;
        const correctAnswer = questions[index].answers.find(ans => ans.correct).text;

        // Highlight the option the user selected
        const options = document.querySelectorAll(`input[name="question${index}"]`);
        options.forEach(option => {
            const label = option.parentElement;

            // Add classes based on correctness
            if (option.checked) {
                label.classList.add('selected'); // Highlight selected option
            }
            if (option.value === correctAnswer) {
                label.classList.add('correct'); // Highlight correct option
            } else if (option.value === selectedAnswer) {
                label.classList.add('wrong'); // Highlight incorrect selected option
            }
        });

        // Update score
        if (selectedAnswer === correctAnswer) {
            score++;
        }
    });

    // Show results
    resultDiv.innerHTML = `<h2>Your Score: ${score}/${questions.length}</h2>`;
    resultDiv.classList.remove('hidden');

    // Hide submit button, show try again button
    submitButton.classList.add('hidden');
    tryAgainButton.classList.remove('hidden');
};

// Reset Quiz
const resetQuiz = () => {
    const quizForm = document.getElementById("quiz-form");
    quizForm.reset(); // Reset the form
    prepareQuiz(); // Shuffle questions and options
    displayQuestions(); // Display the questions again
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ''; // Clear previous results
    resultDiv.classList.add('hidden'); // Hide the result section
    document.getElementById("submit-btn").classList.remove('hidden'); // Show submit button again
    document.getElementById("try-again-btn").classList.add('hidden'); // Hide try again button
};

// Initialize Quiz
document.addEventListener("DOMContentLoaded", () => {
    prepareQuiz();
    displayQuestions();

    const quizForm = document.getElementById("quiz-form");
    quizForm.addEventListener("submit", handleSubmit);

    const tryAgainButton = document.getElementById("try-again-btn");
    tryAgainButton.addEventListener("click", resetQuiz);
});
