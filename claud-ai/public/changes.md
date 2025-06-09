# Changes done in new-index.html

- &lt;body data-theme="light"&gt;
- &lt;button class="dark-mode-toggle" onclick="toggleDarkMode()"&gt; <br> &lt;span id="mode-text"&gt;Light Mode&lt;/span&gt; <br> &lt;/button&gt;
    - to: <br>
         ``` <button id="theme-toggle" class="dark-mode-toggle">🌙</button> ```
- &lt;div class="sub-nav-content"&gt; <br>
            &lt;button class="sub-nav-btn active" onclick="showPage('home')"&gt; <br>
              🏠 Home
            &lt;/button&gt; <br>
            &lt;button class="sub-nav-btn" onclick="showPage('create')"&gt; <br>
              ⚡ Create Quiz
            &lt;/button&gt; <br>
            &lt;button class="sub-nav-btn" onclick="showPage('take')"&gt; <br>
              📝 Take Quiz
            &lt;/button&gt; <br>
          &lt;/div&gt;

    - to: <br>
         ``` <div class="sub-nav-content">
          <button class="sub-nav-btn active" data-page="home">🏠 Home</button>
          <button class="sub-nav-btn" data-page="create">⚡ Create Quiz</button>
          <button class="sub-nav-btn" data-page="take">📝 Take Quiz</button>
        </div> ```

-  from: <br>
    ```
    <form class="quiz-form" onsubmit="saveQuiz(event)">
                <div class="form-group">
                    <label class="form-label">Category</label>
                    <input
                    type="text"
                    class="form-input"
                    id="category"
                    placeholder="Enter category (e.g., HTML, CSS, JavaScript)"
                    required />
                </div>

                <div class="form-group">
                    <label class="form-label">Question</label>
                    <input
                    type="text"
                    class="form-input"
                    id="question"
                    placeholder="Enter your question"
                    required />
                </div>

                <div class="form-group">
                    <label class="form-label"
                    >Question (optional) - (textarea)</label
                    >
                    <textarea
                    class="form-textarea"
                    id="question-detail"
                    placeholder="Additional question details or code examples"></textarea>
                </div>

                <div class="form-group">
                    <label class="form-label">Option A</label>
                    <input
                    type="text"
                    class="form-input"
                    id="option-a"
                    placeholder="Enter option A"
                    required />
                </div>

                <div class="form-group">
                    <label class="form-label">Option B</label>
                    <input
                    type="text"
                    class="form-input"
                    id="option-b"
                    placeholder="Enter option B"
                    required />
                </div>

                <div class="form-group">
                    <label class="form-label">Option C</label>
                    <input
                    type="text"
                    class="form-input"
                    id="option-c"
                    placeholder="Enter option C"
                    required />
                </div>

                <div class="form-group">
                    <label class="form-label">Option D</label>
                    <input
                    type="text"
                    class="form-input"
                    id="option-d"
                    placeholder="Enter option D"
                    required />
                </div>

                <div class="form-group">
                    <label class="form-label"
                    >Correct answer (enter numerical value from 1 to 4)</label
                    >
                    <input
                    type="number"
                    class="form-input"
                    id="correct-answer"
                    min="1"
                    max="4"
                    placeholder="1, 2, 3, or 4"
                    required />
                </div>

                <div class="form-group">
                    <label class="form-label"
                    >Explanation (optional) - (textarea)</label
                    >
                    <textarea
                    class="form-textarea"
                    id="explanation"
                    placeholder="Explain why this answer is correct"
                    oninput="updatePreview()"></textarea>
                </div>

                <div class="form-group">
                    <label class="form-label">Preview of Explanation</label>
                    <div class="preview-section" id="explanation-preview">
                    Your explanation preview will appear here...
                    </div>
                </div>

                <button type="submit" class="save-btn">💾 Save Quiz</button>
                </form> 
    ```
    - to: <br>
        ```
            <form class="quiz-form" id="quiz-form">
            <div class="form-group">
              <label class="form-label">Category</label>
              <input type="text" class="form-input" id="category" required />
            </div>
            <div class="form-group">
              <label class="form-label">Question</label>
              <input type="text" class="form-input" id="question" required />
            </div>
            <div class="form-group">
              <label class="form-label">Question Detail (optional)</label>
              <textarea class="form-textarea" id="question-detail"></textarea>
            </div>
            <div class="form-group">
              <label class="form-label">Option A</label>
              <input type="text" class="form-input" id="option-a" required />
            </div>
            <div class="form-group">
              <label class="form-label">Option B</label>
              <input type="text" class="form-input" id="option-b" required />
            </div>
            <div class="form-group">
              <label class="form-label">Option C</label>
              <input type="text" class="form-input" id="option-c" required />
            </div>
            <div class="form-group">
              <label class="form-label">Option D</label>
              <input type="text" class="form-input" id="option-d" required />
            </div>
            <div class="form-group">
              <label class="form-label">Correct answer (1 to 4)</label>
              <input type="number" class="form-input" id="correct-answer" min="1" max="4" required />
            </div>
            <div class="form-group">
              <label class="form-label">Explanation</label>
              <textarea class="form-textarea" id="explanation"></textarea>
            </div>
            <div class="form-group">
              <label class="form-label">Preview of Explanation</label>
              <div class="preview-section" id="explanation-preview">Your explanation preview will appear here...</div>
            </div>
            <button type="submit" class="save-btn">💾 Save Quiz</button>
          </form>
        ``` 

- from: <br>
    ```
    <!-- Take Quiz Page -->
          <div id="take-page" class="page take-quiz-page hidden">
            <div class="quiz-sidebar">
              <!-- <div class="quiz-category" id="current-category">Html</div> -->
              <div class="quiz-category" id="selected-category">Html</div>
              <ul id="category-list">
                <li data-category="html">HTML <span class="badge">0</span></li>
                <li data-category="css">CSS <span class="badge">0</span></li>
                <li data-category="javascript">
                  JavaScript <span class="badge">0</span>
                </li>
                <li data-category="python">
                  Python <span class="badge">0</span>
                </li>
                <li data-category="bash">Bash <span class="badge">0</span></li>
              </ul>
              <ul class="question-list" id="question-list">
                <!-- Questions will be populated here -->
              </ul>
            </div>

            <div class="quiz-main">
              <div class="quiz-header">
                <div class="question-counter" id="question-counter">
                  Q1 of Q20
                </div>
                <div class="timer">
                  <span class="timer-icon">⏱️</span>
                  <span>Timer</span>
                  <div class="progress-bar">
                    <div class="progress-fill" style="width: 5%"></div>
                  </div>
                </div>
              </div>
    ```
    - to: <br>
        ```
        <div id="take-page" class="page take-quiz-page hidden">
          <div class="quiz-sidebar">
            <h3>Categories</h3>
            <ul id="category-list">
              <li data-category="html">HTML <span class="badge">0</span></li>
              <li data-category="css">CSS <span class="badge">0</span></li>
              <li data-category="javascript">JavaScript <span class="badge">0</span></li>
              <li data-category="python">Python <span class="badge">0</span></li>
              <li data-category="bash">Bash <span class="badge">0</span></li>
            </ul>
            <ul class="question-list" id="question-list"></ul>
          </div>

          <div class="quiz-main">
            <div id="quiz-area">
              <!-- Quiz question will be rendered here by JS -->
            </div>
          </div>
        </div>
        ```

# Removed in new-index.html

```
    <!-- <div class="question-section">
                            <div class="question-text" id="current-question">
                                Which of the following will print "Hello World!" to the console?
                            </div>
                            <div class="question-code" id="current-question-code">
                                print("Hello World!")
                            </div> -->

              <div class="quiz-main">
                <div id="quiz-area"></div>
              </div>

              <ul class="options-list" id="options-list">
                <!-- Rendered dynamically via JS -->

                <!-- <li class="option-item">
                                    <button class="option-btn" onclick="selectOption(0)">Yes</button>
                                </li>
                                <li class="option-item">
                                    <button class="option-btn" onclick="selectOption(1)">No</button>
                                </li>
                                <li class="option-item">
                                    <button class="option-btn" onclick="selectOption(2)">May be</button>
                                </li>
                                <li class="option-item">
                                    <button class="option-btn" onclick="selectOption(3)">I don't know</button>
                                </li> -->
              </ul>

              <!-- <div class="explanation" id="current-explanation">
                                Yes, because print("Hello World!") is correct.
                            </div>
                        </div> -->

              <div class="quiz-actions">
                <button class="action-btn edit-btn">✏️ Edit Quiz</button>
                <button class="action-btn delete-btn">🗑️ Delete Quiz</button>
              </div>
```