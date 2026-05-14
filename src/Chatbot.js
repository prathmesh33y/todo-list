import user from "./user.png";
import React from "react";
import robot from "./robot.png";

function Chatbots() {
   return (
      <>
         <div className="div-container">
            <div className="navbar">
               <input placeholder="Send a Message to a ChatBot"></input>
               <button>Send</button>
               <ChatMessage message="Hello" sender="user" />
               <ChatMessage message="Hello! How can I help you" sender="robot" />
               <ChatMessage message="Can you Get me todays Date" sender="user" />
               <ChatMessage message="Today is" sender="robot" />
            </div>
         </div>
      </>
   );
}

function ChatMessage(props) {
   const message = props.message;
   const sender = props.sender;

   if (sender === "robot") {
      return (
         <div>
            <img src={robot} alt="user" width={35} />
            {message}

         </div>
      );
   }
   return (
      <div>
         {message}
         <img src={user} alt="user" width={35} />
      </div>
   );
}

export default Chatbots;