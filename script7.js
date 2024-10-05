
const questions = [
    // 1
    {
        question: "I tried growing vegetables under my teak plantation, but the vegetable plants died out. I should be concerned about:",
        answers: shuffle([
            { text: "Autophagy", correct: false },
            { text: "Allelopathy", correct: true },
            { text: "Autopathy", correct: false },
            { text: "Allelopathy", correct: false }
        ])
    },
    // 2
    {
        question: "Which of these is a physical factor of habitat?",
        answers: shuffle([
            { text: "Soil", correct: false },
            { text: "Moisture", correct: false },
            { text: "Predators", correct: true },
            { text: "Temperatures", correct: false }
        ])
    },
    // 3
    {
        question: "\"The rate of biological process is limited by that factor in least amount relative to requirement, so there is a single limiting factor\" this is the statement for:",
        answers: shuffle([
            { text: "Liebig's law of minimum", correct: true },
            { text: "Liebig's law of maximum", correct: false },
            { text: "Shelford's law of tolerance", correct: false },
            { text: "Shelford's law of intolerance", correct: false }
        ])
    },
    // 4
    {
        question: "Transplantation experiments are used to find:",
        answers: shuffle([
            { text: "Potential range", correct: true },
            { text: "Effective range", correct: false },
            { text: "Actual range", correct: false },
            { text: "Economic range", correct: false }
        ])
    },
    // 5
    {
        question: "\"Quick movement over large distances, often across unsuitable terrain\" is a definition of:",
        answers: shuffle([
            { text: "Diffusion", correct: false },
            { text: "Secular dispersal", correct: false },
            { text: "Jump dispersal", correct: true },
            { text: "Drifting", correct: false }
        ])
    },
    // 6
    {
        question: "The movement of lions across the Gir landscape is an example of:",
        answers: shuffle([
            { text: "Diffusion", correct: true },
            { text: "Secular dispersal", correct: false },
            { text: "Jump dispersal", correct: false },
            { text: "Drifting", correct: false }
        ])
    },
    // 7
    {
        question: "Good climate is a:",
        answers: shuffle([
            { text: "Chemical factor", correct: false },
            { text: "Demographic factor", correct: false },
            { text: "Push factor", correct: false },
            { text: "Pull factor", correct: true }
        ])
    },
    // 8
    {
        question: "Scarcity of food is a:",
        answers: shuffle([
            { text: "Chemical factor", correct: false },
            { text: "Demographic factor", correct: false },
            { text: "Push factor", correct: true },
            { text: "Pull factor", correct: false }
        ])
    },
    // 9
    {
        question: "\"The geographical distribution of a species will be controlled by that environment factor for which the organism has the narrowest range of tolerance\" this is the statement for:",
        answers: shuffle([
            { text: "Liebig's law of minimum", correct: false },
            { text: "Liebig's law of maximum", correct: false },
            { text: "Shelford's law of tolerance", correct: true },
            { text: "Shelford's law of intolerance", correct: false }
        ])
    },
    // 10
    {
        question: "The movement of individuals away from their place of birth or hatching or seed production into a new habitat or area to survive and reproduce is called:",
        answers: shuffle([
            { text: "Translocation", correct: false },
            { text: "Migration", correct: false },
            { text: "Dispersal", correct: true },
            { text: "Drifting", correct: false }
        ])
    }
];

// Shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

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
