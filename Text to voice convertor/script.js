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

stopButton.addEventListener('click', () => {
    speechSynthesis.cancel();
});
speakButton.addEventListener('click', () => {
    msg.text = document.querySelector('#text').value;
    speechSynthesis.speak(msg);
});

options.forEach(option => {
    option.addEventListener('change', e => {
        
        msg[e.target.name] = e.target.value;
    });
});
voicesSelect.addEventListener('change', e => {
    console.log(e.target.value);
    msg.voice = voices.find(voice => voice.name ===e.target.value);
});
 