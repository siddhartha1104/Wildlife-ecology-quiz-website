const questions = [
    // 1
    {
        question: "According to Leopold, which of these is not a tool of habitat management?",
        answers: [
            { text: "Fire", correct: false },
            { text: "Gun", correct: false },
            { text: "Cattle", correct: false },
            { text: "Sickle", correct: true }
        ]
    },
    // 2
    {
        question: "Which of these correctly represents the process of habitat fragmentation and loss?",
        answers: [
            { text: "Original forest --> dissection --> perforation --> fragmentation --> attrition", correct: true },
            { text: "Original forest --> dissection --> attrition --> fragmentation --> perforation", correct: false },
            { text: "Original forest --> dissection --> perforation --> attrition --> fragmentation", correct: false },
            { text: "Original forest --> dissection --> fragmentation --> perforation --> attrition", correct: false }
        ]
    },
    // 3
    {
        question: "We prefer those areas for the creation of conservation reserve where the level of threat is?",
        answers: [
            { text: "Very high", correct: false },
            { text: "Medium", correct: true },
            { text: "Very low", correct: false },
            { text: "Non-existent", correct: false }
        ]
    },
    // 4
    {
        question: "\"Subset of physical and biotic environmental factors that permit an animal (or plant) to survive and reproduce\" is the definition of?",
        answers: [
            { text: "Habitat", correct: true },
            { text: "Ecosystem", correct: false },
            { text: "Biome", correct: false },
            { text: "Biosphere", correct: false }
        ]
    },
    // 5
    {
        question: "Captive breeding is an example of?",
        answers: [
            { text: "In-situ conservation", correct: false },
            { text: "Ex-situ conservation", correct: true },
            { text: "In-situ preservation", correct: false },
            { text: "Ex-situ preservation", correct: false }
        ]
    },
    // 6
    {
        question: "Which of these is a deterministic factor?",
        answers: [
            { text: "Environmental variation", correct: false },
            { text: "Forest fire", correct: false },
            { text: "Death rate", correct: true },
            { text: "Diseases", correct: false }
        ]
    },
    // 7
    {
        question: "Which of these is a stochastic factor?",
        answers: [
            { text: "Birth rate", correct: false },
            { text: "Death rate", correct: false },
            { text: "Population structure", correct: false },
            { text: "Environmental fluctuation", correct: true }
        ]
    },
    // 8
    {
        question: "Zoo is an example of?",
        answers: [
            { text: "In-situ conservation", correct: false },
            { text: "Ex-situ conservation", correct: true },
            { text: "In-situ preservation", correct: false },
            { text: "Ex-situ preservation", correct: false }
        ]
    },
    // 9
    {
        question: "The acronym HIPPO does not include?",
        answers: [
            { text: "Habitat loss", correct: false },
            { text: "Habitat enhancement", correct: true },
            { text: "Invasive species", correct: false },
            { text: "Human over-population", correct: false }
        ]
    },
    // 10
    {
        question: "The acronym HIPPO does not include?",
        answers: [
            { text: "Habitat loss", correct: false },
            { text: "Invasive species", correct: false },
            { text: "Pollination", correct: true },
            { text: "Pollution", correct: false }
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
