// Global state
let quizzes = [
  {
    id: 1,
    category: "Html",
    question:
      'Which of the following will print "Hello World!" to the console?',
    questionDetail: 'print("Hello World!")',
    options: ["Yes", "No", "May be", "I don't know"],
    correctAnswer: 1,
    explanation: 'Yes, because print("Hello World!") is correct.',
  },
];

let currentQuestionIndex = 0;
let selectedOption = null;

// Initialize the app
function init() {
  updateQuestionList();
  displayCurrentQuestion();
}

// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle("light-mode");
  const modeText = document.getElementById("mode-text");
  const isDarkMode = !document.body.classList.contains("light-mode");
  modeText.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
}

// Page navigation
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.add("hidden");
  });

  // Show selected page
  document.getElementById(`${pageId}-page`).classList.remove("hidden");

  // Update active nav button
  document.querySelectorAll(".sub-nav-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  event.target.classList.add("active");
}

// Quiz creation
function updatePreview() {
  const explanation = document.getElementById("explanation").value;
  const preview = document.getElementById("explanation-preview");

  if (explanation.trim()) {
    // Simple markdown-like parsing for code blocks
    const parsed = explanation.replace(
      /```([\s\S]*?)```/g,
      '<pre style="background: var(--primary-bg); padding: 10px; border-radius: 4px; margin: 10px 0;"><code>$1</code></pre>'
    );
    preview.innerHTML = parsed;
  } else {
    preview.textContent = "Your explanation preview will appear here...";
  }
}

function saveQuiz(event) {
  event.preventDefault();

  const formData = {
    id: Date.now(),
    category: document.getElementById("category").value,
    question: document.getElementById("question").value,
    questionDetail: document.getElementById("question-detail").value,
    options: [
      document.getElementById("option-a").value,
      document.getElementById("option-b").value,
      document.getElementById("option-c").value,
      document.getElementById("option-d").value,
    ],
    correctAnswer:
      parseInt(document.getElementById("correct-answer").value) - 1,
    explanation: document.getElementById("explanation").value,
  };

  quizzes.push(formData);

  // Reset form
  event.target.reset();
  document.getElementById("explanation-preview").textContent =
    "Your explanation preview will appear here...";

  // Update quiz list if on take quiz page
  updateQuestionList();

  alert("Quiz saved successfully!");
}

// Quiz taking functionality
function updateQuestionList() {
  const questionList = document.getElementById("question-list");
  questionList.innerHTML = "";

  quizzes.forEach((quiz, index) => {
    const li = document.createElement("li");
    li.className = `question-item ${
      index === currentQuestionIndex ? "active" : ""
    }`;
    li.textContent = `Q${index + 1}. ${quiz.question.substring(0, 30)}...`;
    li.onclick = () => selectQuestion(index);
    questionList.appendChild(li);
  });
}

function selectQuestion(index) {
  currentQuestionIndex = index;
  selectedOption = null;
  displayCurrentQuestion();
  updateQuestionList();
}

function displayCurrentQuestion() {
  if (quizzes.length === 0) return;

  const quiz = quizzes[currentQuestionIndex];

  document.getElementById("question-counter").textContent = `Q${
    currentQuestionIndex + 1
  } of Q${quizzes.length}`;
  document.getElementById("current-category").textContent = quiz.category;
  document.getElementById("current-question").textContent = quiz.question;

  const codeElement = document.getElementById("current-question-code");
  if (quiz.questionDetail) {
    codeElement.textContent = quiz.questionDetail;
    codeElement.style.display = "block";
  } else {
    codeElement.style.display = "none";
  }

  const optionsList = document.getElementById("options-list");
  optionsList.innerHTML = "";
  quiz.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.className = "option-item";
    li.innerHTML = `<button class="option-btn" onclick="selectOption(${index})">${option}</button>`;
    optionsList.appendChild(li);
  });

  document.getElementById("current-explanation").textContent = quiz.explanation;

  // Update progress bar
  // Continue from the last comment inside displayCurrentQuestion
  const progressFill = document.querySelector(".progress-fill");
  const progressPercent = ((currentQuestionIndex + 1) / quizzes.length) * 100;
  progressFill.style.width = `${progressPercent}%`;
}

function selectOption(index) {
  selectedOption = index;

  // Highlight selected option
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach((btn, i) => {
    btn.classList.remove("selected");
    if (i === index) btn.classList.add("selected");
  });

  // Show explanation after selecting
  const quiz = quizzes[currentQuestionIndex];
  document.getElementById("current-explanation").textContent = quiz.explanation;
}

// Optional: Auto init
