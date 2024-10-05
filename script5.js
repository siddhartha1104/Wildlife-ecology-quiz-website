
const questions = [
    // 1
    {
        question: "____ is how close the measured values are to the correct value",
        answers: [
            { text: "Precision", correct: false },
            { text: "Bias", correct: false },
            { text: "Accuracy", correct: true },
            { text: "Variance", correct: false }
        ]
    },
    // 2
    {
        question: "Which of these is not a measure of absolute population density?",
        answers: [
            { text: "Total count", correct: false },
            { text: "Capture-recapture method", correct: false },
            { text: "Pelt count", correct: true },
            { text: "Removal method", correct: false }
        ]
    },
    // 3
    {
        question: "The logistic growth equation, when plotted, appears:",
        answers: [
            { text: "I shaped", correct: false },
            { text: "S shaped", correct: true },
            { text: "J shaped", correct: false },
            { text: "O shaped", correct: false }
        ]
    },
    // 4
    {
        question: "______ employs a simple rule of selecting every kth unit starting with a number chosen at random from 1 to k as the random start",
        answers: [
            { text: "Simple random sampling", correct: false },
            { text: "Systematic sampling", correct: true },
            { text: "Stratified sampling", correct: false },
            { text: "Multistage sampling", correct: false }
        ]
    },
    // 5
    {
        question: "The juvenile mortality rate is the annual number of deaths of juveniles per:",
        answers: [
            { text: "100 births", correct: false },
            { text: "1000 births", correct: false },
            { text: "1000 live births", correct: true },
            { text: "100 live births", correct: false }
        ]
    },
    // 6
    {
        question: "The minimum replacement level fertility for a population to grow should be greater than:",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "4", correct: false },
            { text: "3", correct: false }
        ]
    },
    // 7
    {
        question: "Pan traps are used for sampling:",
        answers: [
            { text: "Non-pollinator insects", correct: false },
            { text: "Butterflies", correct: false },
            { text: "Pollinator insects", correct: true },
            { text: "Bees", correct: false }
        ]
    },
    // 8
    {
        question: "Which of these is true:",
        answers: [
            { text: "a. Physiological longevity > Ecological longevity", correct: false },
            { text: "b. Physiological longevity = Ecological longevity", correct: false },
            { text: "c. Physiological longevity < Ecological longevity", correct: false },
            { text: "A or B", correct: true }
        ]
    },
    // 9
    {
        question: "A sampling procedure such that each possible combination of sampling units out of the population has the same chance of being selected is referred to as:",
        answers: [
            { text: "Systematic sampling", correct: false },
            { text: "Simple random sampling", correct: true },
            { text: "Stratified sampling", correct: false },
            { text: "Multistage sampling", correct: false }
        ]
    },
    // 10
    {
        question: "Cover board surveys are typically used for sampling:",
        answers: [
            { text: "Fishes", correct: false },
            { text: "Large mammals", correct: false },
            { text: "Herpetofauna", correct: true },
            { text: "Carnivores", correct: false }
        ]
    }
];

// Add your existing quiz functionality below this line

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
