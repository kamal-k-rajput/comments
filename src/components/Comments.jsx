import React from "react";

function Comments(props) {
  return (
    <>
      {console.log(props.comment)}
      <div>{props.comment.timestamp}</div>
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
          return <div>kamal</div>;
        })}
      </div>
    </>
  );
}

export { Comments };
