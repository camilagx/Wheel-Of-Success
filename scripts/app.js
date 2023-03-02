const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
//once missed = 5, player loses
let missed = 0;

const startBtn = document.querySelector('.btn__reset');
startBtn.addEventListener('click', () => {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
});