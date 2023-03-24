const circle = document.querySelector('.circle');
let score = 0;
let isPlaying = false;

function startGame() {
  isPlaying = true;
  spawnCircle();
}

function spawnCircle() {
  const x = Math.random() * (400 - 50) + 25;
  const y = Math.random() * (400 - 50) + 25;

  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.display = 'block';

  setTimeout(() => {
    if (isPlaying) {
      circle.style.display = 'none';
      spawnCircle();
    }
  }, 1000);
}

circle.addEventListener('click', () => {
  if (isPlaying) {
    score++;
    circle.style.display = 'none';
  }
});

startGame();