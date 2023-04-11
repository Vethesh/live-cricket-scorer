import React from "react";

const Additems = props => {
  return (
    <>
      <div className="list">
        <h3>
          <li>{props.text}</li>
        </h3>
        <button
          onClick={() => {
            props.onDelete(props.id);
          }}
          className="btnd">
          delete
          {/* <i class="fa-solid fa-trash-can" /> */}
        </button>
      </div>
    </>
  );
};

export default Additems;
