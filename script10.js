
const questions = [
    // 1
    {
        question: "Which of these is not a climatic forcing for Earth?",
        answers: [
            { text: "Changes in plate tectonics", correct: false },
            { text: "Changes in Earth's orbit", correct: false },
            { text: "Changes in Sun's orbit", correct: true },
            { text: "Changes in Sun's strength", correct: false }
        ]
    },
    // 2
    {
        question: "Mesodebris in the context of plastic debris has fragment of size.",
        answers: [
            { text: ">20mm", correct: false },
            { text: "5-20 mm", correct: true },
            { text: "<5mm", correct: false },
            { text: "<1mm", correct: false }
        ]
    },
    // 3
    {
        question: "Macrodebris in the context of plastic debris had fragment of size.",
        answers: [
            { text: ">20mm", correct: true },
            { text: "5-20mm", correct: false },
            { text: "<5mm", correct: false },
            { text: "<1mm", correct: false }
        ]
    },
    // 4
    {
        question: "\"Any changes in natural or human systems that inadvertently increase vulnerability to climatic stimuli; an adaptation that does not succeed in reducing vulnerability but increases it instead\" is a definition of.",
        answers: [
            { text: "Adaptation", correct: false },
            { text: "Mitigation", correct: false },
            { text: "Maladaptation", correct: true },
            { text: "Malmitigation", correct: false }
        ]
    },
    // 5
    {
        question: "Which of these is not a principle of ecological restoration?",
        answers: [
            { text: "Ecological integrity", correct: false },
            { text: "Long term sustainability", correct: false },
            { text: "Benefits and engages scientists", correct: true },
            { text: "Informed by past and future", correct: false }
        ]
    },
    // 6
    {
        question: "The government came up with a regulation that incandescent bulbs be replaced by LED bulbs, so that electricity consumption and release of carbon dioxide from power plants is reduced. In the context of climate change, such an action would be called.",
        answers: [
            { text: "Adaptation", correct: false },
            { text: "Mitigation", correct: true },
            { text: "Deceleration", correct: false },
            { text: "Maladaptation", correct: false }
        ]
    },
    // 7
    {
        question: "Which of these is not a principle of ecological restoration?",
        answers: [
            { text: "Ecological integrity", correct: false },
            { text: "Short term sustainability", correct: true },
            { text: "Benefits and engages society", correct: false },
            { text: "Informed by past and future", correct: false }
        ]
    },
    // 8
    {
        question: "\"The ability of a system to adjust to climate change (including climate variability and extremes) to moderate potential damages, to take advantage of opportunities, or to cope with the consequences\" is a definition of.",
        answers: [
            { text: "Adaptive response", correct: false },
            { text: "Adaptive capacity", correct: true },
            { text: "Mitigative response", correct: false },
            { text: "Mitigative capacity", correct: false }
        ]
    },
    // 9
    {
        question: "Which of these is not a climatic forcing for Earth?",
        answers: [
            { text: "Changes in plate tectonics", correct: false },
            { text: "Changes in Earth's orbit", correct: false },
            { text: "Changes in Moon's orbit", correct: true },
            { text: "Changes in Sun's strength", correct: false }
        ]
    },
    // 10
    {
        question: "Because of climate change, Mudumalai tiger reserve is suffering from frequent droughts. The management has built several artificial water holes for animals, and fills them up regularly with tankers. In the context of climate change, such an action would be called.",
        answers: [
            { text: "Adaptation", correct: true },
            { text: "Mitigation", correct: false },
            { text: "Deceleration", correct: false },
            { text: "Maladaptation", correct: false }
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
