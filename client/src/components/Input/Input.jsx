import React from "react";

import "./Input.css";
export default function Input({ message, setMessage, sendMessge }) {
  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessge(event) : null
        }
      />
      <button className="sendButton" onClick={(event) => sendMessge(event)}>Send</button>
    </form>
  );
}
