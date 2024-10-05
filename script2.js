// Week 2 Questions Array
const questions = [
    {
        question: "Hierarchy emerges almost inevitably through a wide variety of evolutionary processes, for the simple reason that hierarchical structures are _____ (fill in the blank)",
        answers: [
            { text: "perfect", correct: false },
            { text: "imperfect", correct: false },
            { text: "stable", correct: true },
            { text: "unstable", correct: false }
        ]
    },
    {
        question: "The mitochondrion is a/an",
        answers: [
            { text: "sub-cellular organelle", correct: true },
            { text: "cell", correct: false },
            { text: "tissue", correct: false },
            { text: "organ", correct: false }
        ]
    },
    {
        question: "The laboratory approach to ecology uses",
        answers: [
            { text: "equations", correct: false },
            { text: "models", correct: false },
            { text: "observations", correct: false },
            { text: "experiments", correct: true }
        ]
    },
    {
        question: '"The diversity that exists among different geographies" are',
        answers: [
            { text: "alpha biodiversity", correct: false },
            { text: "beta biodiversity", correct: false },
            { text: "gamma biodiversity", correct: true },
            { text: "delta biodiversity", correct: false }
        ]
    },
    {
        question: "The hierarchical system was given by",
        answers: [
            { text: "simon", correct: true },
            { text: "watson", correct: false },
            { text: "hutchinson", correct: false },
            { text: "humboldt", correct: false }
        ]
    },
    {
        question: '"Groups of actually or potentially interbreeding natural populations, which are reproductively isolated from other such species" is a definition of',
        answers: [
            { text: "cell", correct: false },
            { text: "species", correct: true },
            { text: "ecosystems", correct: false },
            { text: "biomes", correct: false }
        ]
    },
    {
        question: '"The diversity that exists within an ecosystem" is',
        answers: [
            { text: "alpha biodiversity", correct: true },
            { text: "beta biodiversity", correct: false },
            { text: "gamma biodiversity", correct: false },
            { text: "delta biodiversity", correct: false }
        ]
    },
    {
        question: "The emergent principle can be stated as",
        answers: [
            { text: "whole = sum of parts", correct: false },
            { text: "whole < sum of parts", correct: false },
            { text: "whole > sum of parts", correct: true },
            { text: "none of these", correct: false }
        ]
    },
    {
        question: "There is more biodiversity in areas with",
        answers: [
            { text: "less competition, less predation", correct: false },
            { text: "less competition, more predation", correct: false },
            { text: "more competition, more predation", correct: true },
            { text: "more competition, less predation", correct: false }
        ]
    },
    {
        question: "For more biodiversity, the level of disturbance should be",
        answers: [
            { text: "less", correct: false },
            { text: "intermediate", correct: true },
            { text: "more", correct: false },
            { text: "none of these", correct: false }
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
