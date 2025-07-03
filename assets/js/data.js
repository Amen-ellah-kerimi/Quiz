const quizzes = {
    "html-basics": {
        id: "html-basics",
        title: "HTML Basics",
        description: "Test your fundamental knowledge of HTML, the language of the web.",
        questions: [
            {
                "questionText": "What does HTML stand for?",
                "options": [
                    { "text": "HyperText Markup Language", "isCorrect": true },
                    { "text": "Hyperlinks and Text Markup Language", "isCorrect": false },
                    { "text": "Home Tool Markup Language", "isCorrect": false },
                    { "text": "HyperText Markdown Language", "isCorrect": false }
                ],
                "explanation": "HTML is the standard markup language for creating web pages."
            },
            {
                "questionText": "Which HTML tag is used to define an internal style sheet?",
                "options": [
                    { "text": "<script>", "isCorrect": false },
                    { "text": "<style>", "isCorrect": true },
                    { "text": "<css>", "isCorrect": false },
                    { "text": "<link>", "isCorrect": false }
                ],
                "explanation": "The <style> tag is used to define style information (CSS) for a document."
            },
            {
                "questionText": "Which HTML tag is used for the largest heading?",
                "options": [
                    { "text": "<h6>", "isCorrect": false },
                    { "text": "<head>", "isCorrect": false },
                    { "text": "<heading>", "isCorrect": false },
                    { "text": "<h1>", "isCorrect": true }
                ],
                "explanation": "The <h1> to <h6> tags are used for headings, with <h1> being the largest."
            },
            {
                "questionText": "What is the correct HTML tag for inserting a line break?",
                "options": [
                    { "text": "<lb>", "isCorrect": false },
                    { "text": "<break>", "isCorrect": false },
                    { "text": "<br>", "isCorrect": true },
                    { "text": "<newline>", "isCorrect": false }
                ],
                "explanation": "The <br> tag is used to insert a single line break."
            },
            {
                "questionText": "What is the correct HTML for adding a background color?",
                "options": [
                    { "text": "<body bg-color='yellow'>", "isCorrect": false },
                    { "text": "<background>yellow</background>", "isCorrect": false },
                    { "text": "<body style='background-color:yellow;'>", "isCorrect": true },
                    { "text": "<bgcolor>yellow</bgcolor>", "isCorrect": false }
                ],
                "explanation": "Inline styles using the 'style' attribute are a common way to apply CSS directly to an HTML element."
            },
            {
                "questionText": "Choose the correct HTML tag for a paragraph.",
                "options": [
                    { "text": "<para>", "isCorrect": false },
                    { "text": "<p>", "isCorrect": true },
                    { "text": "<text>", "isCorrect": false },
                    { "text": "<paragraph>", "isCorrect": false }
                ],
                "explanation": "The <p> tag defines a paragraph."
            },
            {
                "questionText": "Which character is used to indicate an end tag?",
                "options": [
                    { "text": "<", "isCorrect": false },
                    { "text": "/", "isCorrect": true },
                    { "text": "*", "isCorrect": false },
                    { "text": "^", "isCorrect": false }
                ],
                "explanation": "An end tag (or closing tag) has a forward slash before the tag name, e.g., </p>."
            },
            {
                "questionText": "How can you open a link in a new tab/browser window?",
                "options": [
                    { "text": "<a href='url' new>", "isCorrect": false },
                    { "text": "<a href='url' target='_blank'>", "isCorrect": true },
                    { "text": "<a href='url' target='new'>", "isCorrect": false },
                    { "text": "<a href='url' target='_new'>", "isCorrect": false }
                ],
                "explanation": "The 'target=\"_blank\"' attribute is used on an anchor tag to open the linked document in a new window or tab."
            },
            {
                "questionText": "Which HTML element is used to specify a footer for a document or section?",
                "options": [
                    { "text": "<bottom>", "isCorrect": false },
                    { "text": "<footer>", "isCorrect": true },
                    { "text": "<end>", "isCorrect": false },
                    { "text": "<section footer>", "isCorrect": false }
                ],
                "explanation": "The <footer> element represents a footer for its nearest sectioning content or sectioning root element."
            },
            {
                "questionText": "Which input type creates a checkbox?",
                "options": [
                    { "text": "<input type='check'>", "isCorrect": false },
                    { "text": "<input type='box'>", "isCorrect": false },
                    { "text": "<input type='checkbox'>", "isCorrect": true },
                    { "text": "<input type='select'>", "isCorrect": false }
                ],
                "explanation": "The 'checkbox' type for an <input> element creates a checkbox."
            },
        ]
    },
    "css-selectors": {
        id: "css-selectors",
        title: "CSS Selectors",
        description: "Deep dive into CSS selectors and their specificity.",
        questions: [
            {
                "questionText": "Which CSS selector selects all elements?",
                "options": [
                    { "text": ".", "isCorrect": false },
                    { "text": "#", "isCorrect": false },
                    { "text": "*", "isCorrect": true },
                    { "text": "element", "isCorrect": false }
                ],
                "explanation": "The universal selector `*` selects all elements on the page."
            },
            {
                "questionText": "Which CSS property is used to change the text color of an element?",
                "options": [
                    { "text": "background-color", "isCorrect": false },
                    { "text": "text-color", "isCorrect": false },
                    { "text": "color", "isCorrect": true },
                    { "text": "font-color", "isCorrect": false }
                ],
                "explanation": "The `color` property sets the foreground color of an element's text content."
            },
            {
                "questionText": "Which CSS property controls the text size?",
                "options": [
                    { "text": "text-style", "isCorrect": false },
                    { "text": "font-size", "isCorrect": true },
                    { "text": "text-size", "isCorrect": false },
                    { "text": "font-style", "isCorrect": false }
                ],
                "explanation": "The `font-size` property sets the size of the font."
            },
            {
                "questionText": "How do you select an element with `id=\"header\"`?",
                "options": [
                    { "text": ".header", "isCorrect": false },
                    { "text": "#header", "isCorrect": true },
                    { "text": "header", "isCorrect": false },
                    { "text": "*header", "isCorrect": false }
                ],
                "explanation": "The `#` symbol is used to select an element by its ID."
            },
            {
                "questionText": "How do you select elements with `class=\"intro\"`?",
                "options": [
                    { "text": "#intro", "isCorrect": false },
                    { "text": ".intro", "isCorrect": true },
                    { "text": "intro", "isCorrect": false },
                    { "text": "<intro>", "isCorrect": false }
                ],
                "explanation": "The `.` symbol is used to select elements by their class name."
            },
            {
                "questionText": "Which property is used to change the background color?",
                "options": [
                    { "text": "color", "isCorrect": false },
                    { "text": "background-color", "isCorrect": true },
                    { "text": "bgcolor", "isCorrect": false },
                    { "text": "background", "isCorrect": false }
                ],
                "explanation": "The `background-color` property sets the background color of an element."
            },
            {
                "questionText": "Which CSS property is used to change the font of an element?",
                "options": [
                    { "text": "font-family", "isCorrect": true },
                    { "text": "font-style", "isCorrect": false },
                    { "text": "font-weight", "isCorrect": false },
                    { "text": "font-variant", "isCorrect": false }
                ],
                "explanation": "The `font-family` property specifies the font for an element."
            },
            {
                "questionText": "What does `margin: 10px 20px;` mean?",
                "options": [
                    { "text": "Top/bottom margin is 10px, left/right margin is 20px.", "isCorrect": true },
                    { "text": "All margins are 10px.", "isCorrect": false },
                    { "text": "Top margin is 10px, right margin is 20px.", "isCorrect": false },
                    { "text": "Left/right margin is 10px, top/bottom margin is 20px.", "isCorrect": false }
                ],
                "explanation": "When two values are provided for `margin` (or `padding`), the first applies to top/bottom, and the second to left/right."
            },
            {
                "questionText": "Which value of the `display` property makes an element invisible but still takes up space?",
                "options": [
                    { "text": "hidden", "isCorrect": false },
                    { "text": "none", "isCorrect": false },
                    { "text": "collapse", "isCorrect": false },
                    { "text": "visibility: hidden;", "isCorrect": true }
                ],
                "explanation": "While `display: none;` removes the element from the document flow, `visibility: hidden;` makes it invisible but it still occupies its space."
            },
            {
                "questionText": "What is the correct CSS syntax for making all `<p>` elements bold?",
                "options": [
                    { "text": "p {text-weight: bold;}", "isCorrect": false },
                    { "text": "p {font-weight: bold;}", "isCorrect": true },
                    { "text": "p {bold: true;}", "isCorrect": false },
                    { "text": "<p style='font-weight:bold;'>", "isCorrect": false }
                ],
                "explanation": "The `font-weight` property is used to set the boldness of text."
            }
        ]
    },
    "javascript-logic": {
        id: "javascript-logic",
        title: "JavaScript Logic",
        description: "Sharpen your skills in core JavaScript concepts.",
        questions: [
            {
                "questionText": "Which keyword is used to declare a variable in JavaScript?",
                "options": [
                    { "text": "var", "isCorrect": false },
                    { "text": "let", "isCorrect": false },
                    { "text": "const", "isCorrect": false },
                    { "text": "All of the above", "isCorrect": true }
                ],
                "explanation": "`var`, `let`, and `const` are all used to declare variables in JavaScript, with different scoping and re-assignment rules."
            },
            {
                "questionText": "What is the correct syntax for referring to an external script called 'script.js'?",
                "options": [
                    { "text": "<script name='script.js'>", "isCorrect": false },
                    { "text": "<script href='script.js'>", "isCorrect": false },
                    { "text": "<script src='script.js'>", "isCorrect": true },
                    { "text": "<script file='script.js'>", "isCorrect": false }
                ],
                "explanation": "The `src` attribute is used in the `<script>` tag to specify the URL of an external script."
            },
            {
                "questionText": "How do you write 'Hello World' in an alert box?",
                "options": [
                    { "text": "msg('Hello World');", "isCorrect": false },
                    { "text": "alertBox('Hello World');", "isCorrect": false },
                    { "text": "alert('Hello World');", "isCorrect": true },
                    { "text": "msgBox('Hello World');", "isCorrect": false }
                ],
                "explanation": "The `alert()` function is used to display an alert box with a specified message and an OK button."
            },
            {
                "questionText": "Which operator is used to assign a value to a variable?",
                "options": [
                    { "text": "*", "isCorrect": false },
                    { "text": "-", "isCorrect": false },
                    { "text": "=", "isCorrect": true },
                    { "text": "x", "isCorrect": false }
                ],
                "explanation": "The `=` operator is the assignment operator in JavaScript."
            },
            {
                "questionText": "What is the result of `typeof null` in JavaScript?",
                "options": [
                    { "text": "\"object\"", "isCorrect": true },
                    { "text": "\"null\"", "isCorrect": false },
                    { "text": "\"undefined\"", "isCorrect": false },
                    { "text": "\"number\"", "isCorrect": false }
                ],
                "explanation": "This is a well-known quirk in JavaScript; `typeof null` returns 'object', which is a historical bug that remains for backward compatibility."
            },
            {
                "questionText": "Which method is used to remove the last element from an array and returns that element?",
                "options": [
                    { "text": "shift()", "isCorrect": false },
                    { "text": "unshift()", "isCorrect": false },
                    { "text": "pop()", "isCorrect": true },
                    { "text": "push()", "isCorrect": false }
                ],
                "explanation": "The `pop()` method removes the last element from an array and returns that element."
            },
            {
                "questionText": "How do you call a function named 'myFunction'?",
                "options": [
                    { "text": "call myFunction();", "isCorrect": false },
                    { "text": "myFunction();", "isCorrect": true },
                    { "text": "call function myFunction();", "isCorrect": false },
                    { "text": "run myFunction();", "isCorrect": false }
                ],
                "explanation": "To call a function, you simply write its name followed by parentheses `()`, which may contain arguments."
            },
            {
                "questionText": "Which event occurs when the user clicks on an HTML element?",
                "options": [
                    { "text": "onmouseover", "isCorrect": false },
                    { "text": "onchange", "isCorrect": false },
                    { "text": "onclick", "isCorrect": true },
                    { "text": "onmouseclick", "isCorrect": false }
                ],
                "explanation": "The `onclick` event occurs when an element is clicked."
            },
            {
                "questionText": "How do you declare a JavaScript array?",
                "options": [
                    { "text": "var colors = 'red', 'green', 'blue';", "isCorrect": false },
                    { "text": "var colors = (1:'red', 2:'green', 3:'blue');", "isCorrect": false },
                    { "text": "var colors = ['red', 'green', 'blue'];", "isCorrect": true },
                    { "text": "var colors = {red, green, blue};", "isCorrect": false }
                ],
                "explanation": "Arrays in JavaScript are declared using square brackets `[]`."
            },
            {
                "questionText": "Which built-in method returns the length of a string?",
                "options": [
                    { "text": "size()", "isCorrect": false },
                    { "text": "length()", "isCorrect": false },
                    { "text": "getLength()", "isCorrect": false },
                    { "text": "length", "isCorrect": true }
                ],
                "explanation": "The `length` property (not a method) returns the length of a string."
            }
        ]
    }
};
