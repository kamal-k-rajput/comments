import React from "react";
import "./Reply.css";
export const Reply = (props) => {
  return (
    <div className="replies">
      {console.log(props.data)}
      <span className="author">{props.data.author}</span>
      <span className="points">{props.data.points}</span>
      <span className="time">{props.data.timestamp}</span>
      <h3>{props.data.body}</h3>
      <div>
        <button>Reply</button>
        <button>Give Award</button>
        <button>Share</button>
        <button>Report </button>
        <button>Save</button>
      </div>
      <div>
        {props.data.replies &&
          props.data.replies.map((reply) => {
            return <Reply data={reply} />;
          })}
      </div>
    </div>
  );
};
