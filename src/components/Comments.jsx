import React from "react";
import { Reply } from "./Reply";
import "./Reply.css";
function Comments(props) {
  return (
    <div className="replies">
      {console.log(props.comment)}
      <span className="author">{props.comment.author}</span>
      <span className="points">{props.comment.points}</span>
      <span className="time">{props.comment.timestamp}</span>
      <h3>{props.comment.body}</h3>
      <div>
        <button>Reply</button>
        <button>Give Award</button>
        <button>Share</button>
        <button>Report </button>
        <button>Save</button>
      </div>
      <div>
        {props.comment.replies.map((reply) => {
          return <Reply data={reply} />;
        })}
      </div>
    </div>
  );
}

export { Comments };
