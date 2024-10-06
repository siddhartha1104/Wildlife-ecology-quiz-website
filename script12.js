const questions = [
    // 1
    {
        question: "Enquiry into plants is a book written by",
        answers: [
            { text: "Theophrastus", correct: true },
            { text: "Linnaeus", correct: false },
            { text: "Malthus", correct: false },
            { text: "Humboldt", correct: false }
        ]
    },
    // 2
    {
        question: "The mitochondrion is a/an",
        answers: [
            { text: "sub- cellular organelle", correct: true },
            { text: "cell", correct: false },
            { text: "tissue", correct: false },
            { text: "organ", correct: false }
        ]
    },
    // 3
    {
        question: "Which of these is not a pillar of sustainability?",
        answers: [
            { text: "environmental sustainability", correct: false },
            { text: "economic sustainability", correct: false },
            { text: "trans- boundary sustainability", correct: true },
            { text: "social sustainability", correct: false }
        ]
    },
    // 4
    {
        question: "Good climate is a",
        answers: [
            { text: "chemical factor", correct: false },
            { text: "demographic factor", correct: false },
            { text: "push factor", correct: false },
            { text: "pull factor", correct: true }
        ]
    },
    // 5
    {
        question: "Importance value varies from",
        answers: [
            { text: "0 to 10", correct: false },
            { text: "0 to 50", correct: false },
            { text: "0 to 100", correct: false },
            { text: "0 to 300", correct: true }
        ]
    },
    // 6
    {
        question: "In the food chain: grass --> grasshopper --> frog --> snake --> hawk, the frog is a",
        answers: [
            { text: "producer", correct: false },
            { text: "consumer and carnivore", correct: true },
            { text: "consumer and herbivore", correct: false },
            { text: "decomposer", correct: false }
        ]
    },
    // 7
    {
        question: "The juvenile mortality rate is the annual number of deaths of juveniles per",
        answers: [
            { text: "100 births", correct: false },
            { text: "1000 births", correct: false },
            { text: "100 live births", correct: false },
            { text: "1000 live births", correct: true }
        ]
    },
    // 8
    {
        question: "Because of climate change, Mudumalai Tiger Reserve is suffering from frequent droughts. The management has built several artificial water holes for animals and fills them up regularly with tankers. This action is an example of",
        answers: [
            { text: "adaptation", correct: true },
            { text: "mitigation", correct: false },
            { text: "deceleration", correct: false },
            { text: "maladaptation", correct: false }
        ]
    },
    // 9
    {
        question: "The scientific study of animal behaviour is called",
        answers: [
            { text: "behaviourism", correct: false },
            { text: "ecology", correct: false },
            { text: "ethology", correct: true },
            { text: "prey- predator dynamics", correct: false }
        ]
    },
    // 10
    {
        question: "Zoo is an example of",
        answers: [
            { text: "in-situ conservation", correct: false },
            { text: "ex-situ conservation", correct: true },
            { text: "in-situ preservation", correct: false },
            { text: "ex-situ preservation", correct: false }
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
