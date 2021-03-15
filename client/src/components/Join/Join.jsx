import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Join.css'
export default function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const roomHandler = (e) => {
    setRoom(e.target.value);
  };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            type="text"
            placeholder="Name"
            className="joinInput"
            onChange={nameHandler}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Room"
            className="joinInput mt-20"
            onChange={roomHandler}
          />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>

          <button className="button mt-20" type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}
