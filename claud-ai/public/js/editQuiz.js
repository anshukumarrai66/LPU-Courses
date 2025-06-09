// 📁 public/js/editQuiz.js

import { getQuizzes } from "./categoryHandler.js";
import { showSection } from "./nav.js";
import { setEditMode } from "./editMode.js";

/**
 * Load quiz into form for editing
 * @param {string} category
 * @param {number} index
 */
export async function editQuiz(category, index) {
  const data = await getQuizzes();
  const quiz = data[category][index];

  setEditMode({ category: category.toLowerCase(), index });

  showSection("create");

  // ✅ Fill form fields
  document.getElementById("category").value = category.toLowerCase();
  document.getElementById("question").value = quiz.question;
  document.getElementById("correct-answer").value = quiz.correct + 1;

  document.getElementById("option-a").value = quiz.answers[0] || "";
  document.getElementById("option-b").value = quiz.answers[1] || "";
  document.getElementById("option-c").value = quiz.answers[2] || "";
  document.getElementById("option-d").value = quiz.answers[3] || "";

  document.getElementById("question-detail").value = quiz.code || "";
  document.getElementById("explanation").value = quiz.explanation || "";

  // ✅ Trigger preview update manually
  const event = new Event("input");
  document.getElementById("explanation").dispatchEvent(event);

  document.getElementById("category").focus();
}
