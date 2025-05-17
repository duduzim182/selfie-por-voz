let SpeechRecognition = window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();
function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    let content = event.result[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    speak();
}

function speak(){
    let synth = window.speechSynthesis;
    let speakData = document.getElementById("textbox").value;
    let utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach("camera");
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    jpeg_quality: 90
});
