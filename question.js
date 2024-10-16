 // Select all question buttons
const buttons = document.querySelectorAll('.question-btn');

// Add event listener to each button
buttons.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const question = e.currentTarget.parentElement.parentElement;
    
    // Toggle the 'show-text' class for the clicked question
    question.classList.toggle('show-text');
  });
});
