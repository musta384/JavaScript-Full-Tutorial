let currentQuestionIndex = 0;
let score = 0;
let quizData = [];

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const scoreEl = document.getElementById('score');

// Load questions from JSON
async function loadQuestions() {
  try {
    const response = await fetch('questions.json');
    if (!response.ok) throw new Error('Failed to load questions');
    quizData = await response.json();
  } catch (err) {
    console.error(err);
  }
}

// Start quiz
startBtn.addEventListener('click', async () => {
  startBtn.style.display = 'none';
  scoreEl.textContent = '';
  currentQuestionIndex = 0;
  score = 0;
  await loadQuestions(); // fetch JSON data
  showQuestion();
});

// Next button
nextBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion();
  } else {
    endQuiz();
  }
});

function showQuestion() {
  nextBtn.style.display = 'none';
  questionEl.textContent = quizData[currentQuestionIndex].question;
  optionsEl.innerHTML = '';

  quizData[currentQuestionIndex].options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.onclick = () => selectAnswer(btn, option);
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(button, selected) {
  const correct = quizData[currentQuestionIndex].answer;

  if (selected === correct) {
    button.classList.add('correct');
    score++;
  } else {
    button.classList.add('wrong');
    Array.from(optionsEl.children).forEach(btn => {
      if (btn.textContent === correct) btn.classList.add('correct');
    });
  }

  Array.from(optionsEl.children).forEach(btn => btn.disabled = true);
  nextBtn.style.display = 'inline-block';
}

function endQuiz() {
  questionEl.textContent = `Quiz Completed!`;
  optionsEl.innerHTML = '';
  nextBtn.style.display = 'none';
  scoreEl.textContent = `Your Score: ${score} / ${quizData.length}`;
  startBtn.textContent = 'Restart Quiz';
  startBtn.style.display = 'inline-block';
}
