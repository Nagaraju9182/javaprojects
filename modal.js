 // select modal-btn, modal-overlay, close-btn
const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

// open the modal when modal-btn is clicked
modalBtn.addEventListener('click', function () {
  modalOverlay.classList.add('open-modal');
});

// close the modal when close-btn is clicked
closeBtn.addEventListener('click', function () {
  modalOverlay.classList.remove('open-modal');
});
