class QuizStorage {
    static STORAGE_KEY = 'quiz_history';
    static MAX_HISTORY_ITEMS = 50;

    static saveQuizResult(quizId, quizTitle, score, totalQuestions, date = new Date()) {
        const history = this.getQuizHistory();
        
        const result = {
            id: Date.now(),
            quizId: quizId,
            quizTitle: quizTitle,
            score: score,
            totalQuestions: totalQuestions,
            percentage: Math.round((score / totalQuestions) * 100),
            date: date.toISOString(),
            timestamp: date.getTime()
        };

        history.unshift(result);

        if (history.length > this.MAX_HISTORY_ITEMS) {
            history.splice(this.MAX_HISTORY_ITEMS);
        }

        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(history));
        return result;
    }

    static getQuizHistory() {
        const history = localStorage.getItem(this.STORAGE_KEY);
        if (!history) return [];
        try {
            return JSON.parse(history);
        } catch (error) {
            console.error('Error parsing quiz history:', error);
            return [];
        }
    }

    static getQuizHistoryById(quizId) {
        const history = this.getQuizHistory();
        return history.filter(result => result.quizId === quizId);
    }

    static getBestScore(quizId) {
        const quizHistory = this.getQuizHistoryById(quizId);
        if (quizHistory.length === 0) return null;
        
        return quizHistory.reduce((best, current) => 
            current.percentage > best.percentage ? current : best
        );
    }

    static getAverageScore(quizId) {
        const quizHistory = this.getQuizHistoryById(quizId);
        if (quizHistory.length === 0) return 0;
        
        const totalPercentage = quizHistory.reduce((sum, result) => sum + result.percentage, 0);
        return Math.round(totalPercentage / quizHistory.length);
    }

    static clearHistory() {
        localStorage.removeItem(this.STORAGE_KEY);
    }

    static getRecentHistory(limit = 10) {
        const history = this.getQuizHistory();
        return history.slice(0, limit);
    }

    static formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    }
}