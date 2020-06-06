const SpeechRecognition = window.webkitSpeechRecognition;
  
const recognition = new SpeechRecognition();

const Textbox = document.querySelector("#textbox");
const speechState = document.querySelector('#speechState');

let Content = '';

recognition.continuous = true;

recognition.onresult = function(event) {

  let current = event.resultIndex;

  let transcript = event.results[current][0].transcript;
 
    Content += transcript;
    Textbox.value = Content;
  
};

recognition.onstart = function() { 
 speechState.innerHTML='Voice recognition is ON.';
}

recognition.onspeechend = function() {
  speechState.innerHTML='No activity.';
}

recognition.onerror = function(event) {
  if(event.error == 'no-speech') {
    speechState.innerHTML='Try again.';  
  }
}

document.querySelector("#start-btn").addEventListener('click', function(e) {
  if (Content.length) {
    Content += ' ';
  }
  recognition.start();
});

Textbox.addEventListener('input', function() {
  Content = Textbox.value;
})