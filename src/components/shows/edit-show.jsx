import React, { useState } from "react";
import { editShow, deleteShow } from "../../utils/api";
import Moment from "moment";
import { FormGroup, Label, Input, Button } from "./Shows.styled";

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
    // for (let i = 0; i < 15; i++) {
    //   // FIXME: This is the current number of fields (14) and will need to be updated or made dynamic if further fields are added
    //   // console.log(e.target);
    //   const { name, value } = e.target[i];
    //   setNewShow((prev) => {
    //     return { ...prev, [name]: value };
    //   });
    // }
    // e.preventDefault(); // TODO: remove this when done to rerender.
    // newShow is good to go, except for the checkboxes.
    editShow(showToEdit.show.show_id, newShow);
    window.location.reload();
  };

  const formatDate = Moment(showToEdit.show.show_date).format("YYYY-MM-DD");

  return (
    <section>
      <Button onClick={() => handleShowMore()}>
        {isShown ? "CANCEL" : "EDIT"}
      </Button>

      {isShown && (
        <FormGroup onSubmit={handleSubmit}>
          <Button type="submit" onClick={handleSubmit}>
            SAVE CHANGES
          </Button>
          <Button to="/create-setlist">CREATE SET LIST</Button>
          <Label for="name">Venue Name :</Label>{" "}
          <Input
            id="name"
            required
            type="text"
            name="venue_name"
            defaultValue={showToEdit.show.venue_name}
            onChange={handleChange}
          />
          <Label for="address">Venue Address :</Label>{" "}
          <Input
            id="address"
            type="text"
            name="venue_address"
            defaultValue={showToEdit.show.venue_address}
            onChange={handleChange}
          />
          <Label for="date">Show Date :</Label>
          <Input
            id="date"
            required
            type="date"
            name="show_date"
            defaultValue={formatDate}
            onChange={handleChange}
          />
          <Label for="soundcheck">Soundcheck time :</Label>{" "}
          <Input
            id="soundcheck"
            type="time"
            name="soundcheck_time"
            defaultValue={showToEdit.show.soundcheck_time}
            onChange={handleChange}
          />
          <Label for="start">Show Start Time :</Label>{" "}
          <Input
            id="start"
            type="time"
            name="set_start_time"
            defaultValue={showToEdit.show.set_start_time}
            onChange={handleChange}
          />
          <Label for="website">Venue Website :</Label>{" "}
          <Input
            id="website"
            type="text"
            name="venue_website"
            defaultValue={showToEdit.show.venue_website}
            onChange={handleChange}
          />
          <Label for="lineup">Line Up :</Label>{" "}
          <Input
            id="lineup"
            type="text"
            name="line_up"
            defaultValue={showToEdit.show.line_up}
            onChange={handleChange}
          />
          <Label for="confirmed" required>
            Confirmed :
          </Label>{" "}
          <Input
            id="confirmed"
            type="checkbox"
            name="confirmed"
            defaultValue={showToEdit.show.confirmed}
            onChange={handleChange}
          />{" "}
          <Label for="players">Player Availability :</Label>{" "}
          <Input
            id="players"
            type="text"
            name="player_availability"
            defaultValue={showToEdit.show.player_availability}
            onChange={handleChange}
          />
          <Label for="fee">Fee :</Label>
          <Input
            id="fee"
            type="int"
            name="fee"
            defaultValue={showToEdit.show.fee}
            onChange={handleChange}
          />{" "}
          <Label for="paidin">Paid in? :</Label>{" "}
          <Input
            id="paidin"
            type="checkbox"
            name="paid_in"
            defaultValue={showToEdit.show.paid_in}
            onChange={handleChange}
          />
          <Label for="paidout">Paid out?:</Label>{" "}
          <Input
            id="paidout"
            type="checkbox"
            name="paid_out"
            defaultValue={showToEdit.show.paid_out}
            onChange={handleChange}
          />{" "}
          <Label for="contact">Contact Details :</Label>{" "}
          <Input
            id="contact"
            type="text"
            name="contact_details"
            defaultValue={showToEdit.show.contact_details}
            onChange={handleChange}
          />
          <Label for="notes">Venue Notes :</Label>{" "}
          <Input
            id="notes"
            type="text"
            name="notes"
            defaultValue={showToEdit.show.notes}
            onChange={handleChange}
          />
          <Button type="submit" onClick={handleSubmit}>
            SAVE CHANGES
          </Button>
          <Button onClick={() => handleDelete(showToEdit.show.show_id)}>
            DELETE THIS SHOW
          </Button>
        </FormGroup>
      )}
    </section>
  );
}
export default EditShow;
