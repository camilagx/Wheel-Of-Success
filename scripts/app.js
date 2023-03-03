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
  //find button, set btn class name to 'chosen' and disable btn
  findBtn(keyVal);
  //invoke checkLetter function and store return value to variable letterFound
  const letterFound = checkLetter(keyVal);
});

function findBtn(keyVal){
  const divOne = qwerty.firstElementChild;
  const divTwo = divOne.nextElementSibling;
  const divThree= divTwo.nextElementSibling;
  const divs = [divOne, divTwo, divThree];

  divs.forEach((div) => {
    const buttons = div.children;
    for(let btn of buttons){
      if(btn.textContent === keyVal){
        btn.className = 'chosen';
        btn.disabled = true;
      }
    }
  })
}

function checkLetter(keyVal){
  const lis = phraseUL.children;
  let letter = null;

  for(let li of lis){
    if (li.textContent === keyVal){
      li.className = 'show';
      letter = li.textContent;
    }
  }
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

 