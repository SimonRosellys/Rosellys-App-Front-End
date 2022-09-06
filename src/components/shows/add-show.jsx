import React, { useState } from "react";
import { addShow } from "../../utils/api";
import Popup from "reactjs-popup";

function AddNewShow() {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewShow((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    // e.preventDefault(); // remove this when finished testing
    addShow(newShow).then((res) => {
      console.log(res);
    });
  };

  return (
    <section className="standard-page">
      <Popup
        trigger={<h4 className="button-standard">ADD SHOW</h4>}
        position="bottom center"
      >
        <div className="add-show">
          <form className="add-show-form" onSubmit={handleSubmit}>
            <label for="venue-name" className="add-show-form-field">
              Venue Name :
            </label>{" "}
            <input
              required
              id="venue-name"
              type="text"
              name="venue_name"
              onChange={handleChange}
            />
            <label for="address" className="add-show-form-field">
              Venue Address :
            </label>{" "}
            <input
              id="address"
              type="text"
              name="venue_address"
              onChange={handleChange}
            />
            <label className="add-show-form-field">Show Date :</label>{" "}
            <input
              required
              id="date"
              type="date"
              name="show_date"
              onChange={handleChange}
            />
            <label for="soundcheck" className="add-show-form-field">
              Soundcheck time :
            </label>{" "}
            <input
              id="soundcheck"
              type="time"
              name="soundcheck_time"
              onChange={handleChange}
            />
            <label for="start" className="add-show-form-field">
              Show Start Time :
            </label>{" "}
            <input
              id="start"
              type="time"
              name="set_start_time"
              onChange={handleChange}
            />
            <label for="website" className="add-show-form-field">
              Venue Website :
            </label>{" "}
            <input
              id="website"
              type="text"
              name="venue_website"
              onChange={handleChange}
            />
            <label for="lineup" className="add-show-form-field">
              Line Up :
            </label>{" "}
            <input
              id="lineup"
              type="text"
              name="line_up"
              onChange={handleChange}
            />
            <label for="confirmed" required className="add-show-form-field">
              Confirmed :
            </label>{" "}
            <input
              id="confirmed"
              type="checkbox"
              name="confirmed"
              onChange={handleChange}
            />{" "}
            <label for="players" className="add-show-form-field">
              Player Availability :
            </label>{" "}
            <input
              id="players"
              type="text"
              name="player_availability"
              onChange={handleChange}
            />
            <label for="fee" className="add-show-form-field">
              Fee :
            </label>
            <input id="fee" type="int" name="fee" onChange={handleChange} />{" "}
            <label for="paidin" className="add-show-form-field">
              Paid in? :
            </label>{" "}
            <input
              id="paidin"
              type="checkbox"
              name="paid_in"
              onChange={handleChange}
            />
            <label for="paidout" className="add-show-form-field">
              Paid out?:
            </label>{" "}
            <input
              id="paidout"
              type="checkbox"
              name="paid_out"
              onChange={handleChange}
            />{" "}
            <label for="contact" className="add-show-form-field">
              Contact Details :
            </label>{" "}
            <input
              id="contact"
              type="text"
              name="contact_details"
              onChange={handleChange}
            />
            <label for="notes" className="add-show-form-field">
              Venue Notes :
            </label>{" "}
            <input
              id="notes"
              type="text"
              name="notes"
              onChange={handleChange}
            />
            <button className="button-standard" type="submit">
              SAVE SHOW
            </button>
          </form>
        </div>
      </Popup>
    </section>
  );
}

export default AddNewShow;
