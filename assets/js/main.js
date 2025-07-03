document.addEventListener("DOMContentLoaded", () => {
    const htmlQuiz = document.getElementById("HTML_QUIZ");
    const cssQuiz = document.getElementById("CSS_QUIZ");
    const jsQuiz = document.getElementById("JS_QUIZ");

    if (!htmlQuiz || !cssQuiz || !jsQuiz) {
        console.error('Quiz elements not found');
        return;
    }

    let selectedQuizId;

    htmlQuiz.addEventListener("click", (e) => {
        selectedQuizId="html-basics";
        sessionStorage.setItem("selectedQuizId", selectedQuizId);
        window.location.href="../pages/quiz.html";
    })

    cssQuiz.addEventListener("click", (e) => {
        selectedQuizId="css-selectors";
        sessionStorage.setItem("selectedQuizId", selectedQuizId);
        window.location.href="../pages/quiz.html";

    })

    jsQuiz.addEventListener("click", (e) => {
        selectedQuizId="javascript-logic";
        sessionStorage.setItem("selectedQuizId", selectedQuizId);
        window.location.href="../pages/quiz.html";

    })

    const historyBtn = document.getElementById("HistoryBtn");
    historyBtn.addEventListener("click", (e) => {
        window.location.href="../pages/history.html";
    })


});