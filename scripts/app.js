const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
//once missed = 5, player loses
let missed = 0;

const phrases = [''];

const startBtn = document.querySelector('.btn__reset');
startBtn.addEventListener('click', () => {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
});

//API Call for random words
const url = 'https://random-words5.p.rapidapi.com/getMultipleRandom?count=5&minLength=4&maxLength=8';

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'defaa861a2mshd079018ef2e189dp1f44fcjsna2dc5f200234',
      'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
    }
  };
  
  
fetch(url, options)
  .then(res => res.json())
  .then(data => {
    const phrases = data;
    const phrase = getRandomPhraseAsArray(phrases);

    })
    .catch(err => console.error(err));


function getRandomPhraseAsArray(phrases){
  const index = Math.floor(Math.random() * phrases.length);
  return phrases[index].split('');
}