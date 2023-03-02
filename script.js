// catch the msg div
let msgDiv = document.getElementById('msg');

// genrate the random number from 1 to 100
let generateRandomNumber = () => {
  return Math.ceil(Math.random() * 100); // 1 => 100
}

// the generated random number itself
let num = generateRandomNumber();

// displaying the generated random number
console.log(`random number: ${num}`);

// creating the speech recognition object
const speech = new webkitSpeechRecognition();

// starting listening to the user's speech
speech.start();

// show the input speech after converting it to text
let writeMessage = (msg) => {
  msgDiv.innerHTML = `<h3>You've said: <br><span class="box">${msg}</span>`
}

let validateMsg = (msg) => {
  msg = +msg;
  if(isNaN(msg)){
    msgDiv.innerHTML += `<h3>Invalid Number!</h3>`;
  }
  else if(msg < 1 || msg > 100){
    msgDiv.innerHTML += `<h3>The input number must be between 1 and 100</h3>`;
  }
  else if(msg < num){
    msgDiv.innerHTML += `<h3>Go higher</h3>`;
  }
  else if(msg > num){
    msgDiv.innerHTML += `<h3>Go lower</h3>`;
  }
  else{
    document.body.innerHTML = `<h2>Congratulations! You've guessed the random number</h2>
    <h3>it was ${num}</h3>
    <button class="play-again" onclick="location.reload();">Play Again</button>`
  }
}

// on recognizing, convert the speech into text
let onSpeak = (e) => {
  let msg = e.results[0][0].transcript;
  writeMessage(msg);
  validateMsg(msg);
}

// fire the onSpeak on recognizing and getting a result
speech.addEventListener('result', onSpeak);

// restart the speech tool after ends it's job 
speech.addEventListener('end', () => speech.start());