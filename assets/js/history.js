document.addEventListener("DOMContentLoaded", () => {
    const totalQuizzesEl = document.getElementById("totalQuizzes");
    const averageScoreEl = document.getElementById("averageScore");
    const bestScoreEl = document.getElementById("bestScore");
    const quizMasteryEl = document.getElementById("quizMastery");
    const quizStatsEl = document.getElementById("quizStats");
    const historyListEl = document.getElementById("historyList");
    const clearHistoryBtn = document.getElementById("clearHistoryBtn");
    const homeBtn = document.getElementById("homeBtn");

    if (!totalQuizzesEl || !averageScoreEl || !bestScoreEl || !quizMasteryEl || 
        !quizStatsEl || !historyListEl || !clearHistoryBtn || !homeBtn) {
        console.error('Required DOM elements not found');
        return;
    }

    const quizIds = ["html-basics", "css-selectors", "javascript-logic"];

    function loadHistory() {
        const history = QuizStorage.getQuizHistory();
        
        if (history.length === 0) {
            showEmptyState();
            return;
        }

        updateOverallStats(history);
        updateQuizPerformance(history);
        updateRecentHistory(history);
    }

    function updateOverallStats(history) {
        totalQuizzesEl.textContent = history.length;

        if (history.length === 0) {
            averageScoreEl.textContent = "0%";
            bestScoreEl.textContent = "0%";
            return;
        }

        const totalPercentage = history.reduce((sum, result) => sum + result.percentage, 0);
        const averagePercentage = Math.round(totalPercentage / history.length);
        averageScoreEl.textContent = `${averagePercentage}%`;

        const bestResult = history.reduce((best, current) => 
            current.percentage > best.percentage ? current : best
        );
        bestScoreEl.textContent = `${bestResult.percentage}%`;

        const masteredQuizzes = new Set();
        history.forEach(result => {
            if (result.percentage >= 90) {
                masteredQuizzes.add(result.quizId);
            }
        });
        quizMasteryEl.textContent = `${masteredQuizzes.size}/${quizIds.length}`;
    }

    function updateQuizPerformance(history) {
        quizStatsEl.innerHTML = "";

        quizIds.forEach(quizId => {
            const quizHistory = QuizStorage.getQuizHistoryById(quizId);
            const quizTitle = getQuizTitle(quizId);
            
            if (quizHistory.length === 0) {
                const quizCard = createQuizCard(quizTitle, "No attempts yet", 0, 0, 0);
                quizStatsEl.appendChild(quizCard);
                return;
            }

            const attempts = quizHistory.length;
            const averageScore = QuizStorage.getAverageScore(quizId);
            const bestScore = QuizStorage.getBestScore(quizId);
            const bestPercentage = bestScore ? bestScore.percentage : 0;

            const quizCard = createQuizCard(quizTitle, attempts, averageScore, bestPercentage, bestScore ? bestScore.date : null);
            quizStatsEl.appendChild(quizCard);
        });
    }

    function createQuizCard(title, attempts, averageScore, bestScore, bestDate) {
        const card = document.createElement("div");
        card.className = "quiz-stat-card";
        
        const masteryClass = bestScore >= 90 ? "mastered" : bestScore >= 70 ? "good" : "needs-work";
        
        card.innerHTML = `
            <h3 class="quiz-title">${title}</h3>
            <div class="quiz-metrics">
                <div class="metric">
                    <span class="label">Attempts:</span>
                    <span class="value">${attempts}</span>
                </div>
                <div class="metric">
                    <span class="label">Average:</span>
                    <span class="value">${averageScore}%</span>
                </div>
                <div class="metric">
                    <span class="label">Best:</span>
                    <span class="value ${masteryClass}">${bestScore}%</span>
                </div>
            </div>
            ${bestDate ? `<div class="best-date">Best: ${QuizStorage.formatDate(bestDate)}</div>` : ''}
        `;
        
        return card;
    }

    function updateRecentHistory(history) {
        historyListEl.innerHTML = "";
        
        const recentHistory = history.slice(0, 10);
        
        recentHistory.forEach(result => {
            const historyItem = createHistoryItem(result);
            historyListEl.appendChild(historyItem);
        });
    }

    function createHistoryItem(result) {
        const item = document.createElement("div");
        item.className = "history-item";
        
        const scoreClass = result.percentage >= 90 ? "excellent" : 
                          result.percentage >= 80 ? "good" : 
                          result.percentage >= 70 ? "average" : "poor";
        
        item.innerHTML = `
            <div class="history-content">
                <div class="history-main">
                    <h3>${result.quizTitle}</h3>
                    <div class="history-score">
                        <span class="score ${scoreClass}">${result.score}/${result.totalQuestions} (${result.percentage}%)</span>
                    </div>
                </div>
                <div class="history-date">
                    ${QuizStorage.formatDate(result.date)}
                </div>
            </div>
        `;
        
        return item;
    }

    function getQuizTitle(quizId) {
        const titles = {
            "html-basics": "HTML Basics",
            "css-selectors": "CSS Selectors", 
            "javascript-logic": "JavaScript Logic"
        };
        return titles[quizId] || quizId;
    }

    function showEmptyState() {
        historyListEl.innerHTML = `
            <div class="empty-state">
                <h3>No Quiz History Yet</h3>
                <p>Complete your first quiz to see your progress here!</p>
                <button class="Btn" onclick="window.location.href='../pages/index.html'">Take a Quiz</button>
            </div>
        `;
        
        totalQuizzesEl.textContent = "0";
        averageScoreEl.textContent = "0%";
        bestScoreEl.textContent = "0%";
        quizMasteryEl.textContent = "0/3";
    }

    function clearHistory() {
        if (confirm("Are you sure you want to clear all quiz history? This action cannot be undone.")) {
            QuizStorage.clearHistory();
            loadHistory();
        }
    }

    clearHistoryBtn.addEventListener("click", clearHistory);
    homeBtn.addEventListener("click", () => {
        window.location.href = "../pages/index.html";
    });

    loadHistory();
});
