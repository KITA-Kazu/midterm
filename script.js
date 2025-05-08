const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');

const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');
const questionCategoryDisplay = document.getElementById('question-category');
const questionTextDisplay = document.getElementById('question-text');
const choicesContainer = document.getElementById('choices-container');
const feedbackDisplay = document.getElementById('feedback');
const finalScoreDisplay = document.getElementById('final-score');
const feedbackMessageDisplay = document.getElementById('feedback-message');

const hintButton = document.getElementById('hint-button');
const hintTextDisplay = document.getElementById('hint-text');
const allQuestionsReviewArea = document.getElementById('all-questions-review');
const reviewContainer = document.getElementById('review-container');

let currentQuestionIndex;
let score;
let timeLeft;
let timerInterval;
let shuffledQuestions = [];
let answeredQuestionsHistory = [];

const TIME_LIMIT = 60;
const CORRECT_SCORE = 10;
const INCORRECT_SCORE = -5;

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startGame() {
    if (!allQuestions || allQuestions.length === 0) {
        console.error("問題データ (allQuestions) が空または未定義です。questions.js を確認してください。");
        alert("問題データが読み込まれていません。コンソールを確認してください。");
        return;
    }

    startScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    allQuestionsReviewArea.classList.add('hidden');
    reviewContainer.innerHTML = "";

    shuffledQuestions = shuffleArray([...allQuestions]);
    answeredQuestionsHistory = [];
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = TIME_LIMIT;

    scoreDisplay.textContent = `スコア: ${score}`;
    timerDisplay.textContent = `時間: ${timeLeft}`;
    feedbackDisplay.textContent = "";
    hintTextDisplay.classList.add('hidden');
    hintTextDisplay.textContent = "";

    loadQuestion();
    clearInterval(timerInterval); // 既存のタイマーをクリア
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timeLeft--;
    timerDisplay.textContent = `時間: ${timeLeft}`;
    if (timeLeft <= 0) {
        endGame();
    }
}

function loadQuestion() {
    if (currentQuestionIndex >= shuffledQuestions.length || timeLeft <= 0) {
        endGame();
        return;
    }

    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionCategoryDisplay.textContent = `カテゴリ: ${currentQuestion.category}`;
    questionTextDisplay.textContent = currentQuestion.question;
    choicesContainer.innerHTML = "";
    hintTextDisplay.classList.add('hidden');
    hintTextDisplay.textContent = "";
    hintButton.disabled = false;

    const choices = shuffleArray([...currentQuestion.options]);

    choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.onclick = () => selectAnswer(choice, currentQuestion, button);
        choicesContainer.appendChild(button);
    });
}

function showHint() {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    if (currentQuestion && currentQuestion.translation) {
        hintTextDisplay.textContent = `${currentQuestion.translation}`; // 「和訳:」のプレフィックスを削除
        hintTextDisplay.classList.remove('hidden');
        hintButton.disabled = true;
    }
}

function selectAnswer(selectedChoice, currentQuestion, button) {
    const choiceButtons = choicesContainer.querySelectorAll('button');
    choiceButtons.forEach(btn => btn.disabled = true);
    hintButton.disabled = true;

    let isCorrect = false;
    if (selectedChoice === currentQuestion.answer) {
        score += CORRECT_SCORE;
        feedbackDisplay.textContent = "正解！ (+10点)";
        feedbackDisplay.style.color = "green";
        button.classList.add('correct');
        isCorrect = true;
    } else {
        score += INCORRECT_SCORE;
        feedbackDisplay.textContent = `不正解... (-5点) 正解は: ${currentQuestion.answer}`;
        feedbackDisplay.style.color = "red";
        button.classList.add('incorrect');
        choiceButtons.forEach(btn => {
            if (btn.textContent === currentQuestion.answer) {
                btn.classList.add('correct');
            }
        });
    }
    scoreDisplay.textContent = `スコア: ${score}`;

    answeredQuestionsHistory.push({
        questionData: currentQuestion,
        userAnswer: selectedChoice,
        isCorrect: isCorrect
    });

    currentQuestionIndex++;

    setTimeout(() => {
        feedbackDisplay.textContent = "";
        // choiceButtons.forEach(btn => { // 次の問題ロード時にボタンは再生成されるので不要
        //     btn.disabled = false;
        //     btn.classList.remove('correct', 'incorrect');
        // });
        if (timeLeft > 0 && currentQuestionIndex < shuffledQuestions.length) {
            loadQuestion();
        } else {
            endGame();
        }
    }, 2000);
}

function endGame() {
    clearInterval(timerInterval);
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    finalScoreDisplay.textContent = `あなたのスコアは: ${score} 点でした。`;

    let message = "";
    const answeredCount = answeredQuestionsHistory.length;
    let correctAnswers = 0;
    answeredQuestionsHistory.forEach(item => {
        if(item.isCorrect) correctAnswers++;
    });

    if (answeredCount > 0) {
        const accuracy = (correctAnswers / answeredCount) * 100;
        if (accuracy >= 80) {
            message = "素晴らしい！よくできました！";
        } else if (accuracy >= 50) {
            message = "まずまずですね！もう少し頑張ろう！";
        } else {
            message = "残念！復習して再挑戦しよう！";
        }
    } else {
        message = "時間切れです。もう一度挑戦してみましょう！";
    }
    feedbackMessageDisplay.textContent = message;

    displayAllQuestionsReview();
}

function displayAllQuestionsReview() {
    if (answeredQuestionsHistory.length > 0) {
        allQuestionsReviewArea.classList.remove('hidden');
        reviewContainer.innerHTML = "";

        answeredQuestionsHistory.forEach((item, index) => {
            const reviewItemDiv = document.createElement('div');
            reviewItemDiv.classList.add('review-item');

            const qNum = document.createElement('p');
            qNum.classList.add('review-q-number'); // CSSクラス追加
            qNum.textContent = `Q${index + 1}. (${item.questionData.category})`;
            reviewItemDiv.appendChild(qNum);

            const qText = document.createElement('p');
            qText.classList.add('review-question');
            qText.textContent = item.questionData.question;
            reviewItemDiv.appendChild(qText);

            const userAnswerText = document.createElement('p');
            userAnswerText.classList.add('review-user-answer');
            userAnswerText.innerHTML = `あなたの解答: <strong>${item.userAnswer}</strong>`; // 解答を太字に
            if (item.isCorrect) {
                userAnswerText.classList.add('correct');
            } else {
                userAnswerText.classList.add('incorrect');
            }
            reviewItemDiv.appendChild(userAnswerText);

            if (!item.isCorrect) {
                const correctAnswerText = document.createElement('p');
                correctAnswerText.classList.add('review-correct-answer');
                correctAnswerText.innerHTML = `正解: <strong>${item.questionData.answer}</strong>`; // 正解を太字に
                reviewItemDiv.appendChild(correctAnswerText);
            }

            if (item.questionData.translation) {
                const translationText = document.createElement('p');
                translationText.classList.add('review-explanation'); // 同じスタイルを流用
                translationText.innerHTML = `<em>問題文和訳: ${item.questionData.translation}</em>`;
                reviewItemDiv.appendChild(translationText);
            }

            const explanationText = document.createElement('p');
            explanationText.classList.add('review-explanation');
            explanationText.innerHTML = `<strong>解説:</strong> ${item.questionData.explanation || "解説はありません。"}`;
            reviewItemDiv.appendChild(explanationText);

            reviewContainer.appendChild(reviewItemDiv);
        });
    } else {
        allQuestionsReviewArea.classList.add('hidden'); // 解答履歴がない場合はレビューエリアも隠す
    }
}

function initializeUI() {
    startScreen.classList.remove('hidden');
    quizScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    allQuestionsReviewArea.classList.add('hidden');
    hintTextDisplay.classList.add('hidden');
    feedbackDisplay.textContent = "";
    if (timerInterval) clearInterval(timerInterval); // 既存のタイマーがあればクリア
}

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', startGame);
hintButton.addEventListener('click', showHint);

window.addEventListener('load', initializeUI); // ページ読み込み時にUI初期化