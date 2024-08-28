const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesSelect = document.querySelector('#voices');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('#text').value;

function poptVoices() {
    voices = this.getVoices();
    voicesSelect.innerHTML = voices.filter(voice => voice.lang.includes('en'))
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
        .join('');
}   

speechSynthesis.addEventListener('voiceschanged', poptVoices);

 