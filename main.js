var speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
    recognition.onresult = function(event){
        console.log(event);
        var content = event.results[0][0].transcript;
        console.log(content);
        document.getElementById("textbox").innerHTML = content;
        speak();
     }

    function speak(){
        var synth = window.speechSynthesis;
        speakData = document.getElementById("textbox").value;
        var utterthis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterthis);
        Webcam.attach(camera);
    }

    Webcam.set({
        width:360,
        height:250,
        image_format:'jpeg',
        jpeg_quality:90
    });

    camera = document.getElementById("camera");
