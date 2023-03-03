const myKey = API.key;
const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const phraseUL = phrase.firstElementChild;
//once missed = 5, player loses
let missed = 0;

const phrases = [''];

const startBtn = document.querySelector('.btn__reset');
startBtn.addEventListener('click', () => {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
});

document.addEventListener('keydown', (e) => {
  

  //get the key entered by user
  const keyVal = e.key

  //find button with matching key 

  //set that button to class name 'chosen'

  //set that button's attribute to disabled
  
  //invoke checkLetter function and store return value to variable letterFound

});

function findDiv(letter) {
  /*
  const keyRowDiv_1 = qwerty.firstElementChild;
  const keyRowDiv_2 = keyRowDiv_1.nextElementSibling;
  const keyRowDiv_3 = keyRowDiv_2.nextElementSibling;
*/

  let keyRowDiv = '';
  const keyRow = {
    divOne : ['q','w','e','r','t','y','u','i','o','p'],
    divTwo : ['a','s','d','f','g','h','j','k', 'l'],
    divThree : ['z','x','c','v','b','n','m']
  }

  for (let div in keyRow){
    if (keyRow[div].includes(letter)) {
      keyRowDiv = div;
    }
  }
}

//API Call for random words
const url = 'https://random-words5.p.rapidapi.com/getMultipleRandom?count=5&minLength=4&maxLength=8';

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': myKey,
      'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
    }
  };
  
fetch(url, options)
  .then(res => res.json())
  .then(data => {
    const phrases = data;
    const phrase = getRandomPhraseAsArray(phrases);
    console.log(phrase);
    addPhraseToDisplay(phrase);

    })
    .catch(err => console.error(err));

function checkLetter(btn){
  const lis = phraseUL.children;
  let letter = null;

  lis.forEach((li, index) => {
    if (btn.textContent === li.textContent){
      li.className = 'show';
      letter= li.textContent;
    }
  })

  return letter;
}
    
function addPhraseToDisplay(arr){
  arr.forEach(x => {
    const li = document.createElement('li');
    li.textContent = x;
    li.className = 'letter';
    phraseUL.appendChild(li);
  })
}

function getRandomPhraseAsArray(phrases){
  const index = Math.floor(Math.random() * phrases.length);
  return phrases[index].split('');
}