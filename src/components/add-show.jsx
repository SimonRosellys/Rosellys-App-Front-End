import React, { useEffect, useState } from "react";
import { addShow } from "../utils/api";

function AddNewShow() {
  const [isShown, setIsShown] = useState(false);
  const [newShow, setNewShow] = useState({
    venue_name: "",
    venue_address: "",
    show_date: "",
    soundcheck_time: "00:00",
    set_start_time: "00:00",
    venue_website: "",
    line_up: "",
    confirmed: "no",
    player_availability: "",
    fee: 0,
    paid_in: "no",
    paid_out: "no",
    contact_details: "",
    notes: "",
  });

  const handleShowMore = (event) => {
    setIsShown((current) => !current);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewShow((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(newShow);
    addShow(newShow);
  };

  return (
    <section>
      <div>
        <h1 className="add-show" onClick={() => handleShowMore()}>
          Click here to add a show
        </h1>
      </div>
      {isShown && (
        <div className="add-show">
          <form className="add-show-form" onSubmit={handleSubmit}>
            <h6 className="add-show-form-field">Venue Name :</h6>{" "}
            <input
              required
              type="text"
              name="venue_name"
              onChange={handleChange}
            />
            <h6 className="add-show-form-field">Venue Address :</h6>{" "}
            <input type="text" name="venue_address" onChange={handleChange} />
            <h6 className="add-show-form-field">Show Date :</h6>{" "}
            <input
              required
              type="date"
              name="show_date"
              onChange={handleChange}
            />
            <h6 className="add-show-form-field">Soundcheck time :</h6>{" "}
            <input type="time" name="soundcheck_time" onChange={handleChange} />
            <h6 className="add-show-form-field">Show Start Time :</h6>{" "}
            <input type="time" name="set_start_time" onChange={handleChange} />
            <h6 className="add-show-form-field">Venue Website :</h6>{" "}
            <input type="text" name="venue_website" onChange={handleChange} />
            <h6 className="add-show-form-field">Line Up :</h6>{" "}
            <input type="text" name="line_up" onChange={handleChange} />
            <h6 required className="add-show-form-field">
              Confirmed :
            </h6>{" "}
            <input type="checkbox" name="confirmed" onChange={handleChange} />{" "}
            <h6 className="add-show-form-field">Player Availability :</h6>{" "}
            <input
              type="text"
              name="player_availability"
              onChange={handleChange}
            />
            <h6 className="add-show-form-field">Fee :</h6>
            <input type="int" name="fee" onChange={handleChange} />{" "}
            <h6 className="add-show-form-field">Paid in? :</h6>{" "}
            <input type="checkbox" name="paid_in" onChange={handleChange} />
            <h6 className="add-show-form-field">Paid out?:</h6>{" "}
            <input type="checkbox" name="paid_out" onChange={handleChange} />{" "}
            <h6 className="add-show-form-field">Contact Details :</h6>{" "}
            <input type="text" name="contact_details" onChange={handleChange} />
            <h6 className="add-show-form-field">Venue Notes :</h6>{" "}
            <input type="text" name="notes" onChange={handleChange} />
            <button type="submit">Add Show</button>
          </form>
          {/* {isError && <p className="err-msg">Something went wrong :(</p>} */}
        </div>
      )}
    </section>
  );
}

export default AddNewShow;
