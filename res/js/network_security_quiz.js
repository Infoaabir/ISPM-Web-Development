let selectedAnswers = {}; // Object to store selected answers

// Function to handle answer selection
function selectAnswer(question, answer, button) {
    selectedAnswers[question] = answer;

    // Clear previously selected styles
    const buttons = button.parentElement.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('selected'));

    // Highlight the selected button
    button.classList.add('selected');
}

// Function to submit the quiz
function submitQuiz() {
    const correctAnswers = {
        'q1': 'b',
        'q2': 'b',
        'q3': 'b',
        'q4': 'b',
        'q5': 'b'
    };
    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;

    // Calculate score
    for (const [question, answer] of Object.entries(selectedAnswers)) {
        if (correctAnswers[question] === answer) {
            score++;
        }
    }

    // Display the result
    const resultText = `You scored ${score}/${totalQuestions}. `;
    if (score === totalQuestions) {
        document.getElementById("result").textContent = resultText + "Excellent!";
    } else if (score >= 3) {
        document.getElementById("result").textContent = resultText + "Good job!";
    } else {
        document.getElementById("result").textContent = resultText + "Try again!";
    }

    // Send final score and total questions to the server using AJAX
    const user_email = "example@example.com";  // Replace with the actual email value from your session or user data
    $.ajax({
        url: 'save_answers.php',
        type: 'POST',
        data: {
            user_email: user_email,
            score: score,
            total_questions: totalQuestions
        },
        success: function(response) {
            console.log(response);  // Display server response
        },
        error: function(xhr, status, error) {
            console.error('Error saving score: ', error);
        }
    });

    // Disable all buttons after submission
    document.querySelectorAll('button').forEach(button => button.disabled = true);
}
