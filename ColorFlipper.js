 
const colors = ["#FF5733", "#33FFBD", "#337BFF", "#A933FF", "#FF33A1", "#33FF57"];


const body = document.body;
const btn = document.createElement('button');


btn.textContent = 'Click Me';
btn.classList.add('btn-hero');
document.body.appendChild(btn);


function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}


btn.addEventListener('click', function() {
  const randomColor = getRandomColor();
  body.style.backgroundColor = randomColor;
});
