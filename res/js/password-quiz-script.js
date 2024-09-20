function submitQuiz() {
    var score = 0;

    // Clear previous classes (in case user submits again)
    document.querySelectorAll('.correct, .incorrect').forEach(function(el) {
        el.classList.remove('correct', 'incorrect');
    });

    // Question 1: Correct answer is 'a'
    var q1 = document.querySelector('input[name="q1"]:checked');
    if (q1) {
        if (q1.value === 'a') {
            score++;
            document.getElementById('q1a').parentElement.classList.add('correct'); // Highlight correct answer
        } else {
            q1.parentElement.classList.add('incorrect'); // Highlight wrong answer
            document.getElementById('q1a').parentElement.classList.add('correct'); // Show the correct answer
        }
    } else {
        document.getElementById('q1a').parentElement.classList.add('correct'); // Show correct answer if no selection
    }

    // Question 2: Correct answer is 'b'
    var q2 = document.querySelector('input[name="q2"]:checked');
    if (q2) {
        if (q2.value === 'b') {
            score++;
            document.getElementById('q2b').parentElement.classList.add('correct'); // Highlight correct answer
        } else {
            q2.parentElement.classList.add('incorrect'); // Highlight wrong answer
            document.getElementById('q2b').parentElement.classList.add('correct'); // Show the correct answer
        }
    } else {
        document.getElementById('q2b').parentElement.classList.add('correct'); // Show correct answer if no selection
    }

    // Question 3: Correct answer is 'c'
    var q3 = document.querySelector('input[name="q3"]:checked');
    if (q3) {
        if (q3.value === 'c') {
            score++;
            document.getElementById('q3c').parentElement.classList.add('correct'); // Highlight correct answer
        } else {
            q3.parentElement.classList.add('incorrect'); // Highlight wrong answer
            document.getElementById('q3c').parentElement.classList.add('correct'); // Show the correct answer
        }
    } else {
        document.getElementById('q3c').parentElement.classList.add('correct'); // Show correct answer if no selection
    }

    // Display result
    var resultText = `You scored ${score}/3. `;
    if (score === 3) {
        resultText += "Excellent!";
    } else if (score === 2) {
        resultText += "Good job!";
    } else {
        resultText += "Try again!";
    }

    document.getElementById("result").textContent = resultText;

    // Disable further input after submission
    var inputs = document.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => input.disabled = true);
}
