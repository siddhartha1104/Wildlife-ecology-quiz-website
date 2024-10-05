
const questions = [
    // 1
    {
        question: "Which of these is a positive check according to Malthus?",
        answers: [
            { text: "Late marriage", correct: false },
            { text: "War", correct: true },
            { text: "Celibacy", correct: false },
            { text: "Moral restraint", correct: false }
        ]
    },
    // 2
    {
        question: "The demographic transition sees a society move from",
        answers: [
            { text: "High birth rate, low death rate to low birth rate, low death rate", correct: false },
            { text: "Low birth rate, high death rate to low birth rate, low death rate", correct: false },
            { text: "High birth rate, high death rate to low birth rate, low death rate", correct: true },
            { text: "High birth rate, high death rate to low birth rate, high death rate", correct: false }
        ]
    },
    // 3
    {
        question: "According to the Malthusian model",
        answers: [
            { text: "Population grows in geometric progression, food supply increases in arithmetic progression", correct: true },
            { text: "Population grows in geometric progression, food supply increases in geometric progression", correct: false },
            { text: "Population grows in arithmetic progression, food supply increases in arithmetic progression", correct: false },
            { text: "Population grows in arithmetic progression, food supply increases in geometric progression", correct: false }
        ]
    },
    // 4
    {
        question: "The book 'An Essay on the Principle of Population' was written by",
        answers: [
            { text: "Darwin", correct: false },
            { text: "Malthus", correct: true },
            { text: "Spencer", correct: false },
            { text: "Owens", correct: false }
        ]
    },
    // 5
    {
        question: "_______ is used to identify which potential impacts are relevant to assess.",
        answers: [
            { text: "Screening", correct: false },
            { text: "Scoping", correct: true },
            { text: "Reporting", correct: false },
            { text: "Review", correct: false }
        ]
    },
    // 6
    {
        question: "Which of these is a preventive check according to Malthus?",
        answers: [
            { text: "Foresight", correct: true },
            { text: "Vice", correct: false },
            { text: "Misery", correct: false },
            { text: "Flood", correct: false }
        ]
    },
    // 7
    {
        question: "______ determines which projects or developments require a full or partial impact assessment study.",
        answers: [
            { text: "Screening", correct: true },
            { text: "Scoping", correct: false },
            { text: "Reporting", correct: false },
            { text: "Review", correct: false }
        ]
    },
    // 8
    {
        question: "Which of these is a pillar of sustainability?",
        answers: [
            { text: "Social sustainability", correct: true },
            { text: "Industrial sustainability", correct: false },
            { text: "Agricultural sustainability", correct: false },
            { text: "Trans-boundary sustainability", correct: false }
        ]
    },
    // 9
    {
        question: "Which of these is not a pillar of sustainability?",
        answers: [
            { text: "Environmental sustainability", correct: false },
            { text: "Economic sustainability", correct: false },
            { text: "Trans-boundary sustainability", correct: true },
            { text: "Agricultural sustainability", correct: false }
        ]
    },
    // 10
    {
        question: "The quantum of human impacts is given by",
        answers: [
            { text: "I = P X A X T", correct: true },
            { text: "I = P + A + T", correct: false },
            { text: "I = P + A - T", correct: false },
            { text: "I = P - (A + T)", correct: false }
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
            ${question.answers.map((answer, answerIndex) => `
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
                label.classList.add('correct'); // Highlight correct option in green
            } else if (option.value === selectedAnswer) {
                label.classList.add('wrong'); // Highlight incorrect selected option in red
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

    // Hide submit button and show try again button
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
    document.getElementById("submit-btn").classList.remove('hidden'); // Show submit button
    document.getElementById("try-again-btn").classList.add('hidden'); // Hide try again button
};

// Initialize Quiz
document.addEventListener("DOMContentLoaded", () => {
    prepareQuiz();
    displayQuestions();

    const quizForm = document.getElementById("quiz-form");
    quizForm.addEventListener("submit", handleSubmit);
    document.getElementById("try-again-btn").addEventListener("click", resetQuiz);
});
