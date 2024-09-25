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

  // Question 4: Correct answer is 'b'
  var q4 = document.querySelector('input[name="q4"]:checked');
  if (q4) {
      if (q4.value === 'b') {
          score++;
          document.getElementById('q4b').parentElement.classList.add('correct');
      } else {
          q4.parentElement.classList.add('incorrect');
          document.getElementById('q4b').parentElement.classList.add('correct');
      }
  } else {
      document.getElementById('q4b').parentElement.classList.add('correct');
  }

  // Question 5: Correct answer is 'b'
  var q5 = document.querySelector('input[name="q5"]:checked');
  if (q5) {
      if (q5.value === 'b') {
          score++;
          document.getElementById('q5b').parentElement.classList.add('correct');
      } else {
          q5.parentElement.classList.add('incorrect');
          document.getElementById('q5b').parentElement.classList.add('correct');
      }
  } else {
      document.getElementById('q5b').parentElement.classList.add('correct');
  }

  // Question 6: Correct answer is 'b'
  var q6 = document.querySelector('input[name="q6"]:checked');
  if (q6) {
      if (q6.value === 'b') {
          score++;
          document.getElementById('q6b').parentElement.classList.add('correct');
      } else {
          q6.parentElement.classList.add('incorrect');
          document.getElementById('q6b').parentElement.classList.add('correct');
      }
  } else {
      document.getElementById('q6b').parentElement.classList.add('correct');
  }

  // Question 7: Correct answer is 'b'
  var q7 = document.querySelector('input[name="q7"]:checked');
  if (q7) {
      if (q7.value === 'b') {
          score++;
          document.getElementById('q7b').parentElement.classList.add('correct');
      } else {
          q7.parentElement.classList.add('incorrect');
          document.getElementById('q7b').parentElement.classList.add('correct');
      }
  } else {
      document.getElementById('q7b').parentElement.classList.add('correct');
  }

  // Display result
  var resultText = `You scored ${score}/7. `;
  if (score === 7) {
      resultText += "Excellent!";
  } else if (score >= 5) {
      resultText += "Good job!";
  } else {
      resultText += "Try again!";
  }

  document.getElementById("result").textContent = resultText;

  // Disable further input after submission
  var inputs = document.querySelectorAll('input[type="radio"]');
  inputs.forEach(input => input.disabled = true);
}