// 📁 public/js/formHandler.js

import { updateCategoryCounts } from "./categoryHandler.js";
import { getEditMode, clearEditMode } from "./editMode.js";

export async function handleFormSubmit(e) {
  e.preventDefault();

  const category = document.getElementById("category").value.trim();
  const question = document.getElementById("question").value.trim();
  const code = document.getElementById("question-detail").value.trim(); // was id="code"
  const answers = [
    document.getElementById("option-a").value.trim(),
    document.getElementById("option-b").value.trim(),
    document.getElementById("option-c").value.trim(),
    document.getElementById("option-d").value.trim(),
  ];
  const correct = parseInt(document.getElementById("correct-answer").value) - 1;
  const explanation = document.getElementById("explanation").value.trim();

  if (answers.filter((a) => a).length < 2) {
    alert("Please provide at least two answer options.");
    return;
  }

  if (correct < 0 || correct >= answers.length) {
    alert(
      "Correct answer index must be within the number of answers provided."
    );
    return;
  }

  const quiz = {
    question,
    answers,
    correct,
  };

  if (code) quiz.code = code;
  if (explanation) quiz.explanation = explanation;

  const currentEdit = getEditMode();

  if (currentEdit) {
    // ✅ Update existing quiz
    await fetch("/api/quizzes", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category: currentEdit.category,
        index: currentEdit.index,
        quiz,
      }),
    });

    alert("Quiz updated!");
    clearEditMode();
  } else {
    // ✅ Create new quiz
    await fetch("/api/quizzes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category, quiz }),
    });

    alert("Quiz saved!");
  }

  updateCategoryCounts();

  // ✅ Reset form
  document.getElementById("quiz-form").reset();
  document.getElementById("explanation-preview").textContent =
    "Your explanation preview will appear here...";
}
