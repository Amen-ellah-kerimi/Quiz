document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("title");
    const number = document.getElementById("questionNumber");
    const question = document.getElementById("question");
    const answers = document.querySelectorAll(".answer");
    const homeBtn = document.getElementById("homeBtn");
    const nextBtn = document.getElementById("nextBtn");
    const retryBtn = document.getElementById("retryBtn");
    const historyBtn = document.getElementById("historyBtn");
    
    const progressFill = document.getElementById("progressFill");
    const progressText = document.getElementById("progressText");
    
    const quizSection = document.getElementById("quiz");
    const resultsSection = document.getElementById("results");
    const finalScore = document.getElementById("finalScore");
    const percentage = document.getElementById("percentage");
    const scoreMessage = document.getElementById("scoreMessage");
    const correctCount = document.getElementById("correctCount");
    const wrongCount = document.getElementById("wrongCount");

    if (!title || !number || !question || answers.length === 0 || !homeBtn || !nextBtn || 
        !retryBtn || !historyBtn || !progressFill || !progressText || !quizSection || 
        !resultsSection || !finalScore || !percentage || !scoreMessage || !correctCount || !wrongCount) {
        console.error('Required DOM elements not found');
        return;
    }

    const selectedQuizId = sessionStorage.getItem("selectedQuizId");
    const currentQuiz = quizzes[selectedQuizId];
    
    if (!currentQuiz) {
        console.error('Quiz not found:', selectedQuizId);
        window.location.href = "../pages/index.html";
        return;
    }
    
    let currentIndex = 0;
    let score = 0;
    let correctAnswer;
    let answerSelected = false;
    let userAnswers = [];

    const totalQuestions = currentQuiz.questions.length;

    function updateProgress() {
        const progress = ((currentIndex + 1) / totalQuestions) * 100;
        progressFill.style.width = progress + "%";
        progressText.textContent = `${currentIndex + 1}/${totalQuestions}`;
    }

    function loadQuestion() {
        answerSelected = false;
        
        answers.forEach((answer) => {
            answer.classList.remove('correct-answer', 'incorrect-answer', 'disabled');
        });

        const currentQuestion = currentQuiz.questions[currentIndex];
        if (!currentQuestion) {
            console.error('Question not found at index:', currentIndex);
            return;
        }
        
        title.textContent = currentQuiz.title;
        number.textContent = `Question ${currentIndex + 1} of ${totalQuestions}`;
        question.textContent = currentQuestion.questionText;
        
        for (let i = 0; i < 4; i++) {
            if (currentQuestion.options[i]) {
                answers[i].textContent = currentQuestion.options[i].text;
            }
        }
        
        correctAnswer = currentQuestion.options.find(option => option.isCorrect === true);
        if (!correctAnswer) {
            console.error('No correct answer found for question:', currentIndex);
            return;
        }
        updateProgress();
    }

    function handleAnswer(event) {
        if (answerSelected || !correctAnswer){
            return;
        }

        answerSelected = true;
        const selectedAnswer = event.target;
        const isCorrect = selectedAnswer.textContent === correctAnswer.text;
        
        userAnswers[currentIndex] = {
            question: currentQuiz.questions[currentIndex].questionText,
            userAnswer: selectedAnswer.textContent,
            correctAnswer: correctAnswer.text,
            isCorrect: isCorrect
        };

        if (isCorrect) {
            score++;
            selectedAnswer.classList.add("correct-answer");
            
            answers.forEach((answer) => {
                if (answer.textContent !== correctAnswer.text) {
                    answer.classList.add("disabled");
                }
            });
        } else {
            selectedAnswer.classList.add("incorrect-answer");
            
            answers.forEach((answer) => {
                if (answer.textContent === correctAnswer.text) {
                    answer.classList.add("correct-answer");
                } else if (answer.textContent !== selectedAnswer.textContent) {
                    answer.classList.add("disabled");
                }
            });
        }
    }

    function showResults() {
        const percentageScore = Math.round((score / totalQuestions) * 100);
        const wrongAnswers = totalQuestions - score;
        
        finalScore.textContent = `Score: ${score}/${totalQuestions}`;
        percentage.textContent = `${percentageScore}%`;
        correctCount.textContent = score;
        wrongCount.textContent = wrongAnswers;
        
        let message = "";
        if (percentageScore >= 90) {
            message = "Excellent! You're a master!";
        } else if (percentageScore >= 80) {
            message = "Great job! You really know your stuff!";
        } else if (percentageScore >= 70) {
            message = "Good work! Keep learning!";
        } else if (percentageScore >= 60) {
            message = "Not bad! Review the material and try again!";
        } else {
            message = "Keep practicing! You'll get better!";
        }
        scoreMessage.textContent = message;
        
        QuizStorage.saveQuizResult(
            selectedQuizId,
            currentQuiz.title,
            score,
            totalQuestions
        );
        
        quizSection.style.display = "none";
        resultsSection.style.display = "block";
        
        nextBtn.style.display = "none";
        retryBtn.style.display = "inline-block";
        historyBtn.style.display = "inline-block";
    }

    function nextQuestion() {
        if (currentIndex < totalQuestions - 1) {
            currentIndex++;
            loadQuestion();
        } else {
            showResults();
        }
    }

    function retryQuiz() {
        currentIndex = 0;
        score = 0;
        userAnswers = [];
        
        quizSection.style.display = "block";
        resultsSection.style.display = "none";
        
        nextBtn.style.display = "inline-block";
        retryBtn.style.display = "none";
        historyBtn.style.display = "none";
        
        loadQuestion();
    }

    answers.forEach(answerElement => {
        answerElement.addEventListener("click", handleAnswer);
    });

    nextBtn.addEventListener("click", nextQuestion);
    
    homeBtn.addEventListener("click", () => {
        window.location.href = "../pages/index.html";
    });
    
    retryBtn.addEventListener("click", retryQuiz);
    
    historyBtn.addEventListener("click", () => {
        window.location.href = "../pages/history.html";
    });

    loadQuestion();
});