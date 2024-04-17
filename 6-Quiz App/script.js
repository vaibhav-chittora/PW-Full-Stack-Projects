const questions = [
    {
        question: 'What is the correct syntax of doctype in HTML5?',
        answers: [
            { text: '</doctype html>', correct: false },
            { text: '<doctype html>', correct: false },
            { text: '<doctype html!>', correct: false },
            { text: '<!doctype html>', correct: true },
        ]
    },

    {
        question: 'Which of the following tag is used for inserting the largest heading in HTML?',
        answers: [
            { text: 'head', correct: false },
            { text: '<h1>', correct: true },
            { text: '<h6>', correct: false },
            { text: 'heading', correct: false },
        ]
    },

    {
        question: ' Which element is used for or styling HTML5 layout?',
        answers: [
            { text: 'CSS', correct: true },
            { text: 'JQuery', correct: false },
            { text: 'JavaScript', correct: false },
            { text: 'PHP', correct: false },
        ]
    },

    {
        question: ' Among the following, which is the HTML paragraph tag?',
        answers: [
            { text: '<p>', correct: true },
            { text: '<pre>', correct: false },
            { text: '<hr>', correct: false },
            { text: '<a>', correct: false },
        ]
    },

    {
        question: ' Which tag is used to create a numbered list in HTML?',
        answers: [
            { text: '<ol>', correct: true },
            { text: '<ul>', correct: false },
            { text: '<li>', correct: false },
            { text: 'None Of these', correct: false },
        ]
    }


];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();

}

function showQuestion() {
    resetState()

    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)

    });

}


function resetState() {

    nextButton.style.display = "none"
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer() {

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;

    } else {
        selectedBtn.classList.add('incorrect')

    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');

        }
        button.disabled = true;
    });
    nextButton.style.display = 'block'


}

function showScore() {

    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!!`;

    nextButton.innerHTML = "Want to Play Again??"
    nextButton.style.display = 'block'

}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }

};


nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})


startQuiz()






