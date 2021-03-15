import React from "react";
import "./Messages.css";
import Messsage from "./Message/Message";
import ScrollToBottom from "react-scroll-to-bottom";
export default function Messages({ messages, name }) {
  return (
    <ScrollToBottom className="messages">
      {messages.map((message, i) => (
        <div key={i}>
          <Messsage message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
}
