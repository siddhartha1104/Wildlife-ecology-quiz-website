const questions = [
    // 1
    {
        question: "A climax caused by wildfires is an example of:",
        answers: [
            { text: "Climatic climax", correct: false },
            { text: "Edaphic climax", correct: false },
            { text: "Disclimax", correct: false },
            { text: "Catastrophic climax", correct: true }
        ]
    },
    // 2
    {
        question: "When compared to generalist species, specialist species have:",
        answers: [
            { text: "Narrower niches", correct: true },
            { text: "Broader niches", correct: false },
            { text: "Same-size niches", correct: false },
            { text: "None of these", correct: false }
        ]
    },
    // 3
    {
        question: "Which of these depicts correctly the lithosere primary succession?",
        answers: [
            { text: "Rock --> crustose lichen --> foliose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax", correct: true },
            { text: "Rock --> foliose lichen --> crustose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax", correct: false },
            { text: "Moss --> crustose lichen --> foliose lichen --> rock --> herbaceous stage --> shrub --> woodland --> climax", correct: false },
            { text: "Rock --> crustose lichen --> foliose lichen --> shrub --> herbaceous stage --> moss --> woodland --> climax", correct: false }
        ]
    },
    // 4
    {
        question: "Importance value can be written as:",
        answers: [
            { text: "Relative density + relative frequency X relative dominance", correct: false },
            { text: "Relative density X relative frequency + relative dominance", correct: false },
            { text: "Relative density + relative frequency + relative dominance", correct: true },
            { text: "Relative density X relative frequency X relative dominance", correct: false }
        ]
    },
    // 5
    {
        question: "Lithosere is an example of:",
        answers: [
            { text: "Hydrosere", correct: false },
            { text: "Xerosere", correct: true },
            { text: "Psammosere", correct: false },
            { text: "Halosere", correct: false }
        ]
    },
    // 6
    {
        question: "Importance value varies from:",
        answers: [
            { text: "0 to 10", correct: false },
            { text: "0 to 50", correct: false },
            { text: "0 to 100", correct: false },
            { text: "0 to 300", correct: true }
        ]
    },
    // 7
    {
        question: "A species found most frequently in a particular community, but also present occasionally in others is called:",
        answers: [
            { text: "Accidental species", correct: false },
            { text: "Indifferent species", correct: false },
            { text: "Selective species", correct: true },
            { text: "Exclusive species", correct: false }
        ]
    },
    // 8
    {
        question: "The climax near Tindi village is being controlled by disturbance by cattle. This is an example of:",
        answers: [
            { text: "Climatic climax", correct: false },
            { text: "Edaphic climax", correct: false },
            { text: "Disclimax", correct: true },
            { text: "Catastrophic climax", correct: false }
        ]
    },
    // 9
    {
        question: "Which of these is correct?",
        answers: [
            { text: "A. Fundamental niche > Realised niche", correct: false },
            { text: "B. Fundamental niche = Realised niche", correct: false },
            { text: "C. Fundamental niche < Realised niche", correct: false },
            { text: "A or B", correct: true }
        ]
    },
    // 10
    {
        question: "Which of these is not a characteristic of pioneer species?",
        answers: [
            { text: "Ability to grow on bare rocks", correct: false },
            { text: "Ability to tolerate extreme temperatures", correct: false },
            { text: "Large size", correct: true },
            { text: "Short life span", correct: false }
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
