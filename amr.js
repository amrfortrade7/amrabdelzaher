const texts = ["Whatsapp: 01022495924", "Telegram: @Sl9lZ", "Instagram: n0v.xd"];
let index = 0;

function changeText() {
    const textElement = document.getElementById('amr');
    textElement.style.opacity = 0;

    setTimeout(() => {
        index = (index + 1) % texts.length;
        textElement.innerText = texts[index];
        textElement.style.opacity = 1;
    }, 1000);
}

setInterval(changeText, 5000);
    
    
window.audiobutton.addEventListener('click', () => {
  if (window.audio.paused) {
    window.audio.play();
  } else {
    window.audio.pause();
  } 
  });