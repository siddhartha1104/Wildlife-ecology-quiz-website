// Questions for Week 2
const questions = [
    // 1
    {
        question: "Birds on giraffe are an example of",
        answers: [
            { text: "Colony", correct: false },
            { text: "Commensalism", correct: false },
            { text: "Protocooperation", correct: true },
            { text: "Allelopathy", correct: false }
        ]
    },
    // 2
    {
        question: "Egrets with buffaloes are an example of",
        answers: [
            { text: "Colony", correct: false },
            { text: "Commensalism", correct: true },
            { text: "Protocooperation", correct: false },
            { text: "Allelopathy", correct: false }
        ]
    },
    // 3
    {
        question: "The scientific study of animal behaviour is called",
        answers: [
            { text: "Behaviourism", correct: false },
            { text: "Ecology", correct: false },
            { text: "Ethology", correct: true },
            { text: "Prey-predator dynamics", correct: false }
        ]
    },
    // 4
    {
        question: "The interaction between exotic shrubs and trees through the action of seed predators is an example of",
        answers: [
            { text: "Infraspecific competition", correct: false },
            { text: "Apparent competition", correct: true },
            { text: "Disguised competition", correct: false },
            { text: "Harmonious competition", correct: false }
        ]
    },
    // 5
    {
        question: "Harmonious competition occurs where",
        answers: [
            { text: "At least one participant is benefited", correct: false },
            { text: "At least one participant is unharmed", correct: false },
            { text: "Both participants are benefited", correct: false },
            { text: "Both participants are unharmed", correct: true }
        ]
    },
    // 6
    {
        question: "Hamilton's rule can be stated as",
        answers: [
            { text: "rB < C", correct: false },
            { text: "rB > C", correct: true },
            { text: "rB = C", correct: false },
            { text: "rB + C = 0", correct: false }
        ]
    },
    // 7
    {
        question: "Trampling of grass due to the movement of animals is an example of",
        answers: [
            { text: "Mutualism", correct: false },
            { text: "Ammensalism", correct: true },
            { text: "Commensalism", correct: false },
            { text: "Protocooperation", correct: false }
        ]
    },
    // 8
    {
        question: "I observe a monkey take a tick out of another monkey's head and eat it. In the social context, this behaviour would be called",
        answers: [
            { text: "Tick hunting", correct: false },
            { text: "Auto grooming", correct: false },
            { text: "Allo grooming", correct: true },
            { text: "Foraging", correct: false }
        ]
    },
    // 9
    {
        question: "An inventory of behaviours exhibited by an animal during a behaviour exercise is called",
        answers: [
            { text: "Ecogram", correct: false },
            { text: "Ethogram", correct: true },
            { text: "Behaviourogram", correct: false },
            { text: "Animalogram", correct: false }
        ]
    },
    // 10
    {
        question: "I observe a bird take a tick out of another bird's head and eat it. In the social context, this behaviour would be called",
        answers: [
            { text: "Tick hunting", correct: false },
            { text: "Auto grooming", correct: false },
            { text: "Allo grooming", correct: true },
            { text: "Foraging", correct: false }
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
