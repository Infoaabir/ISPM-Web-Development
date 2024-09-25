let selectedAnswers = {};

function selectAnswer(question, answer, button) {
    // Store the selected answer
    selectedAnswers[question] = answer;

    // Clear previously selected styles
    const buttons = button.parentElement.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.classList.remove('selected');
    });

    // Highlight the selected button
    button.classList.add('selected');
}

function submitQuiz() {
    let score = 0;

    // Correct answers
    const correctAnswers = {
        'q1': 'a',
        'q2': 'c',
        'q3': 'b',
        'q4': 'b',
        'q5': 'a'
    };

    // Clear previous classes (in case user submits again)
    document.querySelectorAll('.correct, .incorrect').forEach(function(el) {
        el.classList.remove('correct', 'incorrect');
    });

    // Check answers
    for (const [question, answer] of Object.entries(selectedAnswers)) {
        const correctAnswer = correctAnswers[question];

        if (answer === correctAnswer) {
            score++;
            // Highlight correct answer
            document.querySelector(`button[onclick*="${question}"][onclick*="${correctAnswer}"]`).classList.add('correct');
        } else {
            // Highlight selected wrong answer
            document.querySelector(`button[onclick*="${question}"][onclick*="${answer}"]`).classList.add('incorrect');
            // Highlight correct answer
            document.querySelector(`button[onclick*="${question}"][onclick*="${correctAnswer}"]`).classList.add('correct');
        }
    }

    // Display result
    const resultText = `You scored ${score}/5. `;
    if (score === 5) {
        document.getElementById("result").textContent = resultText + "Excellent!";
    } else if (score >= 3) {
        document.getElementById("result").textContent = resultText + "Good job!";
    } else {
        document.getElementById("result").textContent = resultText + "Try again!";
    }

    // Disable further input after submission
    document.querySelectorAll('button').forEach(button => button.disabled = true);
}