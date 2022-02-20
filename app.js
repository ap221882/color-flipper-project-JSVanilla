const colors = ['green', 'red', 'rgb(11, 122, 117)', '#FF8811', '#FF8811'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.trunc(Math.random() * colors.length);
}
