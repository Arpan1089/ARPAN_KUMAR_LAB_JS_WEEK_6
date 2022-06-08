function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
};


function Question(questionText, answer, choices) {
    this.questionText = questionText;
    this.answer = answer;
    this.choices = choices;
}

Question.prototype.isCorrectAnswer = function(userAnswer) {
    return this.answer === userAnswer;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}

Quiz.prototype.getQuestionByIndex = function() {
    return this.questions[this.questionIndex];
}


Quiz.prototype.checkOptionWithAnswer = function(answer) {
    if (this.getQuestionByIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

function loadQuestions() {
    if (quiz.isEnded()) {
        this.showScore();
        return;
    } else {
        let currentQuestion = quiz.getQuestionByIndex();
        let element = document.getElementById('question');
        element.innerHTML = currentQuestion.questionText;
        for (let i = 0; i < currentQuestion.choices.length; i++) {
            document.getElementById('choice' + i).textContent = currentQuestion.choices[i];
            handleOnclick('btn' + i, currentQuestion.choices[i]);
        }
    }
    showProgress();
}

function handleOnclick(btnId, choice) {
    let button = document.getElementById(btnId);
    button.onclick = function() {
        quiz.checkOptionWithAnswer(choice);
        loadQuestions();
    }
}

function showScore() {
    let percentage = (quiz.score / question.length) * 100;
    document.getElementById('quiz').innerHTML = `<h1>Result</h1>
    <div> Your score  ${quiz.score}/ ${quiz.questions.length} and percentage is ${percentage}</div>
    `

}

function showProgress() {
    document.getElementById('progress').textContent = `Question ${quiz.questionIndex+1} of ${quiz.questions.length}`;

}
let question = [
    new Question('Javascript is an _______ language?', 'Object Oriented', ['Object Oriented', 'Object Based', 'Prcedural', 'None']),
    new Question('Which of the following keywords is used to define a variable in Javascript?', 'Both A and B', ['Let', 'Var', 'Both A and B', 'None']),
    new Question('Which of the following methods is used to access HTML elements using Javascript?', 'Both A and B', ['getElemetByID()', 'getElementByClassName()', 'Both A and B', 'None']),
    new Question('Upon encountering empty statements, what does the Javascript Interpreter do?', 'Ignores the statement', ['Throws an error', 'Ignores the statement', 'Warning', 'None'])

];

let quiz = new Quiz(question);

loadQuestions();