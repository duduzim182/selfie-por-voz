let SpeechRecognition = window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();
function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    let content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    if(content =="Selfie."){
        speak();    
    }
    
}

function speak(){
    let synth = window.speechSynthesis;
    let speakData = "tirando sua selfie em 5 segundos"
    let utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        takeSnapshot();
        save();
    }, 5000);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});
function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfieImage" src="'+data_uri+'">';
    });
}
function save(){
    let link = document.getElementById("link");
    let image = document.getElementById("selfieImage").src;
    link.href = image;
    link.click();
}