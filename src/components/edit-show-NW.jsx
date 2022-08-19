import React, { useState } from "react";
import { editShow } from "../utils/api";
import Moment from "moment";

function EditShow(showToEdit) {
  const [show, setShow] = useState(showToEdit); // TODO: refactor this by directly assigning showToEdit where needed as setShow is not used
  const [isShown, setIsShown] = useState(false);
  const [newShow, setNewShow] = useState({
    venue_name: show.show.venue_name,
    venue_address: show.show.venue_address,
    show_date: show.show.show_date,
    soundcheck_time: show.show.soundcheck_time,
    set_start_time: show.show.set_start_time,
    venue_website: show.show.venue_website,
    line_up: show.show.line_up,
    confirmed: show.show.confirmed,
    player_availability: show.show.player_availability,
    fee: show.show.fee,
    paid_in: show.show.paid_in,
    paid_out: show.show.paid_out,
    contact_details: show.show.contact_details,
    notes: show.show.notes,
  });

  // const [isLoading, setIsLoading] = useState(true);

  const handleShowMore = () => {
    setIsShown((current) => !current);
  };

  const handleChange = (e) => {
    // if one of the checkboxes -  flip the answer.
    // FIXME: THIS IS NOT WORKING YET!!!!!!!!!!!!!!!!
    let { name, value } = e.target;
    if (name === "confirmed" || name === "paid_in" || name === "paid_out") {
      if (value === "No") {
        setNewShow((prev) => {
          // let test = { ...prev, [name]: "Yes" };
          // console.log(test);
          return { ...prev, [name]: "Yes" }; // THIS IS NOT CHANGING IT TO YES
        });
      } else if (value === "Yes") {
        setNewShow((prev) => {
          // let test2 = { ...prev, [name]: "No" };
          // console.log(test2);
          return { ...prev, [name]: "No" }; // THIS IS NOT CHANGING IT TO NO
        });
      }
      console.log(newShow);
    }
    setNewShow((prev) => {
      return { ...prev, [name]: value };
    });
    return newShow;
  };

  const handleSubmit = (e) => {
    for (let i = 0; i < 15; i++) {
      // FIXME: This is the current number of fields (14) and will need to be updated or made dynamic if further fields are added
      const { name, value } = e.target[i];
      setNewShow((prev) => {
        return { ...prev, [name]: value };
      });
    }
    // e.preventDefault(); // TODO: remove this when done to rerender.
    // newShow is good to go, except for the checkboxes. need to make sure it'll pass through and the back end can handle it
    editShow(show.show.show_id, newShow);
  };

  const formatDate = Moment(show.show.show_date).format("YYYY-MM-DD");

  return (
    <section>
      <h4 onClick={() => handleShowMore()}>Edit this show</h4>
      {isShown && (
        <div className="dev-box">
          <form className="add-show-form" onSubmit={handleSubmit}>
            <h6 className="add-show-form-field">Venue Name :</h6>{" "}
            <input
              required
              type="text"
              name="venue_name"
              defaultValue={show.show.venue_name}
              onChange={handleChange}
            />
            <h6 className="add-show-form-field">Venue Address :</h6>{" "}
            <input
              type="text"
              name="venue_address"
              defaultValue={show.show.venue_address}
              onChange={handleChange}
            />
            <h6 className="add-show-form-field">Show Date :</h6>
            <input
              required
              type="date"
              name="show_date" // is this a problem?????
              defaultValue={formatDate}
              onChange={handleChange}
            />
            <h6 className="add-show-form-field">Soundcheck time :</h6>{" "}
            <input
              type="time"
              name="soundcheck_time"
              defaultValue={show.show.soundcheck_time}
              onChange={handleChange}
            />
            <h6 className="add-show-form-field">Show Start Time :</h6>{" "}
            <input
              type="time"
              name="set_start_time"
              defaultValue={show.show.set_start_time}
              onChange={handleChange}
            />
            <h6 className="add-show-form-field">Venue Website :</h6>{" "}
            <input
              type="text"
              name="venue_website"
              defaultValue={show.show.venue_website}
              onChange={handleChange}
            />
            <h6 className="add-show-form-field">Line Up :</h6>{" "}
            <input
              type="text"
              name="line_up"
              defaultValue={show.show.line_up}
              onChange={handleChange}
            />
            <h6 required className="add-show-form-field">
              Confirmed :
            </h6>{" "}
            <input
              type="checkbox"
              name="confirmed"
              defaultValue={show.show.confirmed}
              onChange={handleChange}
            />{" "}
            <h6 className="add-show-form-field">Player Availability :</h6>{" "}
            <input
              type="text"
              name="player_availability"
              defaultValue={show.show.player_availability}
              onChange={handleChange}
            />
            <h6 className="add-show-form-field">Fee :</h6>
            <input
              type="int"
              name="fee"
              defaultValue={show.show.fee}
              onChange={handleChange}
            />{" "}
            <h6 className="add-show-form-field">Paid in? :</h6>{" "}
            <input
              type="checkbox"
              name="paid_in"
              defaultValue={show.show.paid_in}
              onChange={handleChange}
            />
            <h6 className="add-show-form-field">Paid out?:</h6>{" "}
            <input
              type="checkbox"
              name="paid_out"
              defaultValue={show.show.paid_out}
              onChange={handleChange}
            />{" "}
            <h6 className="add-show-form-field">Contact Details :</h6>{" "}
            <input
              type="text"
              name="contact_details"
              defaultValue={show.show.contact_details}
              onChange={handleChange}
            />
            <h6 className="add-show-form-field">Venue Notes :</h6>{" "}
            <input
              type="text"
              name="notes"
              defaultValue={show.show.notes}
              onChange={handleChange}
            />
            <button type="submit">Update Show</button>
          </form>
        </div>
      )}
    </section>
  );
}
export default EditShow;
