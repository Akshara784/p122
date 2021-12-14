x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
apple="";
to_number = "";

draw_apple = "set";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

    to_number= Number(content);
    if(Number.isInteger(to_number))
    
    document.getElementById("status").innerHTML = "started drawing apple";

    for(var i= 1; i <= to_number; i++)
    {
      x= Math.floor(Math.random() *700);
      y= Math.floor(Math.random() *400);
      image(apple ,x ,y ,50 ,50);
    }
}

function setup() {
  canvas= createCanvas(900,450);
  screen_width= window.innerWidth;
}

function preload(){
  apple= loadImage('apple.png');
}

function draw() {
  if(apple == "set")
  {
    apple = "";
    document.getElementById("status").innerHTML = to_number + " apples drawn";
  }

}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
