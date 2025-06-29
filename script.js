let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice=document.querySelector("#voice");
function speak(text) {
  if ('speechSynthesis' in window) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "en-AU";
    window.speechSynthesis.speak(text_speak);
  } else {
    console.error('Speech synthesis is not supported in this browser.');
  }
}

function wishMe() {
  let day = new Date();
  let hours = day.getHours();
  if (hours >= 0 && hours < 12) {
    speak("Good morning Vinay sir");
  } else if (hours >= 12 && hours < 16) {
    speak("Good afternoon sir");
  } else {
    speak("Good evening sir");
  }
}

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onresult = (event) => {
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
  takeCommand(transcript.toLowerCase())
};

recognition.onerror = (event) => {
  console.error('Error occurred during speech recognition:', event);
};

recognition.onend = () => {
  console.log('Speech recognition ended.');
};

btn.addEventListener("click", () => {
  wishMe(); 
  btn.style.display="none"
 recognition.start();// it gives us the voice permission
  voice.style.display="block"
});
 function takeCommand(message){
      btn.style.display="flex"
        voice.style.display="none"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir how can i help you ?")
    }
    else if(message.includes("who are you")){
        speak("i am  nova  a virtual assistant created by vinay")
    }
    else if(message.includes("open youtube")){
        speak("Opening youtube...")
        window.open("https://www.youtube.com")

    }
    else if(message.includes("open google")){
        speak("Opening google...")
        window.open("https://google.com/","_blank")
        
    }
        else if(message.includes("open instagram")){
        speak("Opening instagram...")
        window.open("https://instagram.com/","_blank")
        
    }
       else if(message.includes("open chat gpt")){
        speak("Opening chatgpt...")
        window.open("https://chatgpt.com/","_blank")
        
    }
      else if(message.includes("open whatsapp")){
        speak("Opening whatsapp...")
        window.open("whatsapp://")
        
    }
    else if(message.includes("open calculator")){
        speak("Opening calculator...")
        window.open("calculator://")
        
    }
    else if(message.includes("open spotify")){
        speak("Opening spotify...")
        window.open("spotify://")
    }
     else if(message.includes("open jiosaavan")){
        speak("Opening jiosaavan...")
        window.open("JioSaavan://")
    }
   
    
    else{
        speak(`this is what i found on the internet regarding ${message.replace("nova","")}`)
        window.open(`https://www.google.com/search?q= ${message}`)
        
    }
 }