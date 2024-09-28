let selectedAnswers = {};

// Function to handle answer selection
function selectAnswer(question, answer, button) {
    selectedAnswers[question] = answer;

    // Clear previously selected styles
    const buttons = button.parentElement.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.classList.remove('selected');
    });

    // Highlight the selected button
    button.classList.add('selected');
}

// Function to submit quiz
function submitQuiz() {
    let score = 0;

    const correctAnswers = {
        'q1': 'b',
        'q2': 'b',
        'q3': 'b',
        'q4': 'b',
        'q5': 'b'
    };

    const userAnswers = {};  // Store user answers for saving via AJAX

    // Clear previous highlights (if any)
    document.querySelectorAll('.correct, .incorrect').forEach(function(el) {
        el.classList.remove('correct', 'incorrect');
    });

    // Check answers and highlight results
    for (const [question, answer] of Object.entries(selectedAnswers)) {
        const correctAnswer = correctAnswers[question];
        userAnswers[question] = answer; // Save user answer

        if (answer === correctAnswer) {
            score++;
            // Highlight correct answer
            document.querySelector(`button[onclick*="${question}"][onclick*="${correctAnswer}"]`).classList.add('correct');
        } else {
            // Highlight wrong answer
            document.querySelector(`button[onclick*="${question}"][onclick*="${answer}"]`).classList.add('incorrect');
            // Highlight the correct answer
            document.querySelector(`button[onclick*="${question}"][onclick*="${correctAnswer}"]`).classList.add('correct');
        }
    }

    // Display the result
    const resultText = `You scored ${score}/5. `;
    if (score === 5) {
        document.getElementById("result").textContent = resultText + "Excellent!";
    } else if (score >= 3) {
        document.getElementById("result").textContent = resultText + "Good job!";
    } else {
        document.getElementById("result").textContent = resultText + "Try again!";
    }

    // AJAX request to save answers
    const user_id = "exampleUserID";  // Replace with actual user ID or session identifier
    $.ajax({
        url: 'save_answers.php',  // The PHP script to handle saving answers
        type: 'POST',
        data: {
            user_id: user_id,
            answers: userAnswers
        },
        success: function(response) {
            console.log(response);  // Display server response
        },
        error: function(xhr, status, error) {
            console.error('Error saving answers: ', error);
        }
    });

    // Disable all buttons after submission
    document.querySelectorAll('button').forEach(button => button.disabled = true);
}
