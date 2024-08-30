function get(){
               const botResponse = document.querySelector("#botResponse");
               const msg = document.querySelector("#msg");
               const inputField = document.querySelector("#inputField");
               msg.innerHTML =  inputField.value;
               const data = {
                  
                   "hey":"Hello",
                   "how are you?":"Fine and you?",
                   "great":"Ok",
                   "am fine":"Ok",
                   "fine":"Ok",
                   "friends?":"Sure",
                   "hello":"What's up?",
                   "cool":"Great",
                   "how are you":"Am cool, you?",
                             "hello": "Hi! How can I help you?",
"hi": "Hello! What's up?",

"how are you": "I'm good, thanks! How about you?",
 "what's your name": "I'm an AI chatbot, nice to meet you!",
"what can you do": "I can answer questions, provide info, and chat with you!",


 "thanks": "You're welcome!",
"thank you": "Anytime!",
"bye": "Goodbye! Have a great day!",
"see you later": "See you soon!",         
"time": Date(),
               }
               function getResponse(State){
                   const C = State.toLowerCase();
                   
                   if(data[C]){
                       return data[C];
                   }
                   else {
                       return "incomplete data";
                   }
               }
               const State =  "" + inputField.value;
               const response = getResponse(State);
               botResponse.innerHTML = response;
           }
           function search(){
               const web = document.querySelector("#search");
               web.innerHTML = location = "https://" + web.value; 
           }
           