import React, { useEffect, useState } from "react";
import { addShow } from "../utils/api";

function AddNewShow() {
  const [newShow, setNewShow] = useState();

  const handleClick = (e) => {
    // e.preventDefault();
    addShow(newShow);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setNewShow(value);
    // console.log(newShow);
    //   return newShow;
  };

  return (
    <div className="add-show">
      <div>
        <h3 className="add-show-venue">Add a show venue name</h3>
        <div className="add-show-container">
          <textarea
            className="add-show-input"
            name="body"
            type="textarea"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button className="add-show-btn" onClick={(e) => handleClick(e)}>
          ADD
        </button>
      </div>
      {/* {isError && <p className="err-msg">Something went wrong :(</p>} */}
    </div>
  );
}

export default AddNewShow;
