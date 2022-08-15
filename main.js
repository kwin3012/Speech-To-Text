const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;

recognition.addEventListener('result', (e)=>{

  console.log(e)
  const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  if(e.results[0].isFinal){
    p = document.createElement('p');
    p.innerText = text
    texts.appendChild(p);
  }

});

recognition.addEventListener('end', ()=>{
  recognition.start();
})

recognition.start();

recognition.onstart = function() {
  console.log('Speech recognition service has started');
}