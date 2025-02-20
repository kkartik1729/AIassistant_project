let btn = document.querySelector("#btn");
let content = document.querySelector("#content");

function speak(text) {
  try {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    window.speechSynthesis.speak(text_speak);
  }catch (e) {
    console.error("Error in speech synthesis:", e);
  }
}

function wishMe() {
  let day = new Date();
  let hours = day.getHours();
  
  if (hours >= 0 && hours < 12) {
    speak("Good Morning sir");
  } else if (hours >= 12 && hours < 16) {
    speak("Good Afternoon Sir");
  } else {
    speak("Good Evening Sir");
  }
  
}

window.addEventListener('load', () => {
  wishMe();
});

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();

recognition.onresult = (event) => {
  let currentIndex = event.resultIndex;
  let transcript = event.results[currentIndex][0].transcript;
  content.innerText = transcript;
  takeCommand(transcript.toLowerCase()); // Fixed to call 'toLowerCase()'
};

btn.addEventListener("click", () => {
  recognition.start();
});

function takeCommand(message) {
  console.log("Command received: ", message);
  if (message.includes("hello") || message.includes("hey")) {
    speak("Hello sir, what can I help you");
  } else if (message.includes("who are you")) {
    speak("I am a virtual assistant, created by Kartik sir");
  } else if (message.includes("open youtube")) {
    speak("Opening YouTube");
    console.log("Opening YouTube"); // Debug message
    window.open("https://www.youtube.com", "_blank"); // Add '_blank' to open in a new tab
  }
  else if (message.includes("open google")) {
    speak("Opening google");
    console.log("Opening google"); // Debug message
    window.open("https://www.google.com", "_blank"); // Add '_blank' to open in a new tab
  }
  else if (message.includes("open calculator")) {
    speak("Opening calculator");
    console.log("Opening calculator"); // Debug message
    window.open("https://www.google.com", "_blank"); // Add '_blank' to open in a new tab
  }
  else if (message.includes("open whatsapp")) {
    speak("Opening whatsapp");
    console.log("Opening whatsapp"); // Debug message
    window.open("https://www.whatsapp.com", "_blank"); // Add '_blank' to open in a new tab
  }
  else if (message.includes("open whatsapp")) {
    speak("Opening whatsapp");
    console.log("Opening whatsapp"); // Debug message
    window.open("https://www.whatsapp.com", "_blank"); // Add '_blank' to open in a new tab
  }
  else if (message.includes("open mozilla")) {
    speak("Opening mozilla");
    console.log("Opening mozilla"); // Debug message
    window.open("https://www.google.com/search", "_blank"); // Add '_blank' to open in a new tab
  }
  else if (typeof message === "string" && message.includes("time")) {
    let time = new Date().toLocaleTimeString(undefined, { hour: "numeric", minute: "numeric" });
    speak(`The current time is ${time}`);
  }
  else if (typeof message === "string" && message.includes("date")) {
    let date = new Date().toLocaleDateString(undefined, { day: "numeric", month: "numeric", year: "numeric" });
    speak(`Today's date is ${date}`);
  }
  else {
    let finalText = "This is what I found on the internet regarding " + message.replace("zenthos", "");
    speak(finalText);
    window.open(`https://www.google.com/search?q=${message.replace("zenthos", "")}`, "_blank");
  }
}