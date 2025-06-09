// 📁 public/js/utils.js

// ✅ Format explanation textarea using markdown-style code block (```)
export function formatExplanation(explanation) {
  const parts = explanation.split(/```/g);
  let html = "";

  parts.forEach((part, i) => {
    if (i % 2 === 1) {
      html += `<pre><code>${part.trim()}</code></pre>`;
    } else {
      const wrapped = part
        .trim()
        .split("\n")
        .map((line) => `<p>${line}</p>`)
        .join("");
      html += wrapped;
    }
  });

  return html;
}

// ✅ Keyboard Shortcuts for selecting answers
export function handleKeyPress(e) {
  const key = e.key.toLowerCase();
  const keyMap = {
    1: 0,
    a: 0,
    2: 1,
    b: 1,
    3: 2,
    c: 2,
    4: 3,
    d: 3,
  };

  if (key in keyMap) {
    const index = keyMap[key];
    const options = document.querySelectorAll(".quiz-option");
    if (options[index]) options[index].click();
  }
}
