import React, { useState } from "react";
import { editShow, deleteShow } from "../../utils/api";
import Moment from "moment";
import { Link } from "react-router-dom";

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

  const handleShowMore = () => {
    setIsShown((current) => !current);
  };

  const handleDelete = (id) => {
    window.location.reload();
    deleteShow(id);
  };

  const handleChange = (e) => {
    // if one of the checkboxes is checked,  flip the answer.
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
    }
    setNewShow((prev) => {
      return { ...prev, [name]: value };
    });
    return newShow;
  };

  const handleSubmit = (e) => {
    for (let i = 0; i < 15; i++) {
      // FIXME: This is the current number of fields (14) and will need to be updated or made dynamic if further fields are added
      // console.log(e.target);
      const { name, value } = e.target[i];
      setNewShow((prev) => {
        return { ...prev, [name]: value };
      });
    }
    // e.preventDefault(); // TODO: remove this when done to rerender.
    // newShow is good to go, except for the checkboxes.
    editShow(showToEdit.show.show_id, newShow);
  };

  const formatDate = Moment(showToEdit.show.show_date).format("YYYY-MM-DD");

  return (
    <section className="edit-show">
      <button className="button-standard" onClick={() => handleShowMore()}>
        {isShown ? "CANCEL" : "EDIT"}
      </button>

      {isShown && (
        <form className="add-show-form" onSubmit={handleSubmit}>
          <button className="button-standard" type="submit">
            SAVE CHANGES
          </button>
          <Link className="button-standard" to="/create-setlist">
            CREATE SET LIST
          </Link>
          <label for="name" className="add-show-form-field">
            Venue Name :
          </label>{" "}
          <input
            id="name"
            required
            type="text"
            name="venue_name"
            defaultValue={showToEdit.show.venue_name}
            onChange={handleChange}
          />
          <label for="address" className="add-show-form-field">
            Venue Address :
          </label>{" "}
          <input
            id="address"
            type="text"
            name="venue_address"
            defaultValue={showToEdit.show.venue_address}
            onChange={handleChange}
          />
          <label for="date" className="add-show-form-field">
            Show Date :
          </label>
          <input
            id="date"
            required
            type="date"
            name="show_date"
            defaultValue={formatDate}
            onChange={handleChange}
          />
          <label for="soundcheck" className="add-show-form-field">
            Soundcheck time :
          </label>{" "}
          <input
            id="soundcheck"
            type="time"
            name="soundcheck_time"
            defaultValue={showToEdit.show.soundcheck_time}
            onChange={handleChange}
          />
          <label for="start" className="add-show-form-field">
            Show Start Time :
          </label>{" "}
          <input
            id="start"
            type="time"
            name="set_start_time"
            defaultValue={showToEdit.show.set_start_time}
            onChange={handleChange}
          />
          <label for="website" className="add-show-form-field">
            Venue Website :
          </label>{" "}
          <input
            id="website"
            type="text"
            name="venue_website"
            defaultValue={showToEdit.show.venue_website}
            onChange={handleChange}
          />
          <label for="lineup" className="add-show-form-field">
            Line Up :
          </label>{" "}
          <input
            id="lineup"
            type="text"
            name="line_up"
            defaultValue={showToEdit.show.line_up}
            onChange={handleChange}
          />
          <label for="confirmed" required className="add-show-form-field">
            Confirmed :
          </label>{" "}
          <input
            id="confirmed"
            type="checkbox"
            name="confirmed"
            defaultValue={showToEdit.show.confirmed}
            onChange={handleChange}
          />{" "}
          <label for="players" className="add-show-form-field">
            Player Availability :
          </label>{" "}
          <input
            id="players"
            type="text"
            name="player_availability"
            defaultValue={showToEdit.show.player_availability}
            onChange={handleChange}
          />
          <label for="fee" className="add-show-form-field">
            Fee :
          </label>
          <input
            id="fee"
            type="int"
            name="fee"
            defaultValue={showToEdit.show.fee}
            onChange={handleChange}
          />{" "}
          <label for="paidin" className="add-show-form-field">
            Paid in? :
          </label>{" "}
          <input
            id="paidin"
            type="checkbox"
            name="paid_in"
            defaultValue={showToEdit.show.paid_in}
            onChange={handleChange}
          />
          <label for="paidout" className="add-show-form-field">
            Paid out?:
          </label>{" "}
          <input
            id="paidout"
            type="checkbox"
            name="paid_out"
            defaultValue={showToEdit.show.paid_out}
            onChange={handleChange}
          />{" "}
          <label for="contact" className="add-show-form-field">
            Contact Details :
          </label>{" "}
          <input
            id="contact"
            type="text"
            name="contact_details"
            defaultValue={showToEdit.show.contact_details}
            onChange={handleChange}
          />
          <label for="notes" className="add-show-form-field">
            Venue Notes :
          </label>{" "}
          <input
            id="notes"
            type="text"
            name="notes"
            defaultValue={showToEdit.show.notes}
            onChange={handleChange}
          />
          <button
            className="button-standard"
            onClick={() => handleDelete(showToEdit.show.show_id)}
          >
            DELETE THIS SHOW
          </button>
        </form>
      )}
    </section>
  );
}
export default EditShow;
