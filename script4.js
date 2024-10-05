const questions = [
    // 1
    {
        question: "Consider the food chain: grass → grasshopper → frog → snake → hawk. As we move up the food chain:",
        answers: [
            { text: "Available energy decreases", correct: true },
            { text: "Available energy increases", correct: false },
            { text: "Available energy remains same", correct: false },
            { text: "Available energy is zero everywhere", correct: false }
        ]
    },
    // 2
    {
        question: "Consider the food chain: grass → grasshopper → frog → snake → hawk. In the food chain:",
        answers: [
            { text: "Hawk is producer", correct: false },
            { text: "Hawk is consumer and carnivore", correct: true },
            { text: "Hawk is consumer and herbivore", correct: false },
            { text: "Hawk is decomposer", correct: false }
        ]
    },
    // 3
    {
        question: "Trees → birds → parasites → hyperparasites represent:",
        answers: [
            { text: "Upright pyramid of numbers", correct: false },
            { text: "Inverted pyramid of numbers", correct: true },
            { text: "Spindle pyramid of numbers", correct: false },
            { text: "Dumb-bell pyramid of numbers", correct: false }
        ]
    },
    // 4
    {
        question: "Consider the food chain: grass → grasshopper → frog → snake → hawk. In this food chain:",
        answers: [
            { text: "Frog is producer", correct: false },
            { text: "Frog is consumer and carnivore", correct: true },
            { text: "Frog is consumer and herbivore", correct: false },
            { text: "Frog is decomposer", correct: false }
        ]
    },
    // 5
    {
        question: "At the compensation point:",
        answers: [
            { text: "Photosynthesis = respiration", correct: true },
            { text: "Photosynthesis < respiration", correct: false },
            { text: "Photosynthesis > respiration", correct: false },
            { text: "Photosynthesis = 0", correct: false }
        ]
    },
    // 6
    {
        question: "Tree → frugivorous birds → hawk represents:",
        answers: [
            { text: "Upright pyramid of numbers", correct: false },
            { text: "Inverted pyramid of numbers", correct: false },
            { text: "Spindle pyramid of numbers", correct: true },
            { text: "Dumb-bell pyramid of numbers", correct: false }
        ]
    },
    // 7
    {
        question: "Glacial lakes are typical examples of:",
        answers: [
            { text: "Eutrophic lakes", correct: false },
            { text: "Hypereutrophic lakes", correct: false },
            { text: "Oligotrophic lakes", correct: true },
            { text: "Mesotrophic lakes", correct: false }
        ]
    },
    // 8
    {
        question: "Consider the food chain: grass → grasshopper → frog → snake → hawk. In this food chain:",
        answers: [
            { text: "More numbers of hawks than grasshoppers can be supported", correct: false },
            { text: "More numbers of grasshoppers than hawks can be supported", correct: true },
            { text: "Equal numbers of hawks and grasshoppers can be supported", correct: false },
            { text: "None of these", correct: false }
        ]
    },
    // 9
    {
        question: "If we all become vegetarians, we'll be able to support our large populations. This can be explained through:",
        answers: [
            { text: "1% rule", correct: false },
            { text: "10% rule", correct: true },
            { text: "Biodiversity", correct: false },
            { text: "Trophic cascades", correct: false }
        ]
    },
    // 10
    {
        question: "Net primary productivity is given by:",
        answers: [
            { text: "APAR / LUE", correct: false },
            { text: "APAR - LUE", correct: false },
            { text: "APAR x LUE", correct: true },
            { text: "APAR + LUE", correct: false }
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
