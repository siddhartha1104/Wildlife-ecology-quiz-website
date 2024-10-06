const questions = [
    // 1
    {
        question: "Which of these is correct?",
        answers: [
            { text: "R + G = M + F", correct: true },
            { text: "R + M = G + F", correct: false },
            { text: "R + F = M + G", correct: false },
            { text: "R + G + M + F = 0", correct: false }
        ]
    },
    // 2
    {
        question: "Which of these is not an impact of toxic chemicals?",
        answers: [
            { text: "lethal effects", correct: false },
            { text: "sub- lethal effects", correct: false },
            { text: "reduction of existing stressors", correct: true },
            { text: "reduced fecundity", correct: false }
        ]
    },
    // 3
    {
        question: "A pest population is called controlled when",
        answers: [
            { text: "it is not increasing", correct: false },
            { text: "it is decreasing", correct: false },
            { text: "it is not causing any economic damage", correct: false },
            { text: "it is not causing excessive economic damage", correct: true }
        ]
    },
    // 4
    {
        question: "A deciduous forest in Madhya Pradesh was converted to a mine. After the mining operations were over, the pits were filled up with soil and species of deciduous forest planted again. This is an example of",
        answers: [
            { text: "recovery", correct: false },
            { text: "restoration", correct: true },
            { text: "enhancement", correct: false },
            { text: "replacement", correct: false }
        ]
    },
    // 5
    {
        question: "The root zone treatment plant is an example of",
        answers: [
            { text: "phytoremediation", correct: true },
            { text: "biological control", correct: false },
            { text: "biomagnification", correct: false },
            { text: "bioaccumulation", correct: false }
        ]
    },
    // 6
    {
        question: "A pest population is called uncontrolled when",
        answers: [
            { text: "it is increasing", correct: false },
            { text: "it is not decreasing", correct: false },
            { text: "it is causing some economic damage", correct: false },
            { text: "it is causing excessive economic damage", correct: true }
        ]
    },
    // 7
    {
        question: "The impact of El Nino on fishery in Peru is explained by",
        answers: [
            { text: "match hypothesis", correct: false },
            { text: "mismatch hypothesis", correct: false },
            { text: "match- mismatch hypothesis", correct: true },
            { text: "none of these", correct: false }
        ]
    },
    // 8
    {
        question: "Which of these is correct?",
        answers: [
            { text: "the maximum sustainable yield is near the beginning of the sigmoidal curve", correct: false },
            { text: "the maximum sustainable yield is near the mid-point of the sigmoidal curve", correct: true },
            { text: "the maximum sustainable yield is near the end of the sigmoidal curve", correct: false },
            { text: "none of these", correct: false }
        ]
    },
    // 9
    {
        question: "Ludwig's ratchet predicts",
        answers: [
            { text: "decreasing harvesting rate", correct: false },
            { text: "constant harvesting rate", correct: false },
            { text: "increasing harvesting rate", correct: true },
            { text: "fluctuating harvesting rate", correct: false }
        ]
    },
    // 10
    {
        question: "A deciduous forest in Madhya Pradesh was converted to a mine. After the mining operations were over, the pits were filled up with water and a lake was created. It is now visited by several migratory birds. This is an example of",
        answers: [
            { text: "recovery", correct: false },
            { text: "restoration", correct: false },
            { text: "enhancement", correct: false },
            { text: "replacement", correct: true }
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
