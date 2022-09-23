import React, { useState } from "react";
import { addShow } from "../../utils/api";
import {
  PopUpContent,
  FormGroup,
  Label,
  Input,
  Textarea,
  Button,
} from "./Shows.styled";

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
    addShow(newShow).then((res) => {});
  };

  return (
    <section>
      <PopUpContent
        trigger={<Button>ADD SHOW</Button>}
        position="bottom center"
        modal
        closeOnDocumentClick
      >
        <FormGroup onSubmit={handleSubmit}>
          <Label for="venue-name">Venue Name :</Label>{" "}
          <Input
            required
            id="venue-name"
            type="text"
            name="venue_name"
            onChange={handleChange}
          />
          <Label for="address">Venue Address :</Label>{" "}
          <Input
            id="address"
            type="text"
            name="venue_address"
            onChange={handleChange}
          />
          <Label>Show Date :</Label>{" "}
          <Input
            required
            id="date"
            type="date"
            name="show_date"
            onChange={handleChange}
          />
          <Label for="soundcheck">Soundcheck time :</Label>{" "}
          <Input
            id="soundcheck"
            type="time"
            name="soundcheck_time"
            onChange={handleChange}
          />
          <Label for="start">Show Start Time :</Label>{" "}
          <Input
            id="start"
            type="time"
            name="set_start_time"
            onChange={handleChange}
          />
          <Label for="website">Venue Website :</Label>{" "}
          <Input
            id="website"
            type="text"
            name="venue_website"
            onChange={handleChange}
          />
          <Label for="lineup">Line Up :</Label>{" "}
          <Input
            id="lineup"
            type="text"
            name="line_up"
            onChange={handleChange}
          />
          <Label for="confirmed" required>
            Confirmed :
          </Label>{" "}
          <Input
            id="confirmed"
            type="checkbox"
            name="confirmed"
            onChange={handleChange}
          />{" "}
          <Label for="players">Player Availability :</Label>{" "}
          <Input
            id="players"
            type="text"
            name="player_availability"
            onChange={handleChange}
          />
          <Label for="fee">Fee :</Label>
          <Input id="fee" type="int" name="fee" onChange={handleChange} />{" "}
          <Label for="paidin">Paid in? :</Label>{" "}
          <Input
            id="paidin"
            type="checkbox"
            name="paid_in"
            onChange={handleChange}
          />
          <Label for="paidout">Paid out?:</Label>{" "}
          <Input
            id="paidout"
            type="checkbox"
            name="paid_out"
            onChange={handleChange}
          />{" "}
          <Label for="contact">Contact Details :</Label>{" "}
          <Input
            id="contact"
            type="text"
            name="contact_details"
            onChange={handleChange}
          />
          <Label for="notes">Venue Notes :</Label>{" "}
          <Input id="notes" type="text" name="notes" onChange={handleChange} />
          <Button type="submit">SAVE SHOW</Button>
        </FormGroup>
      </PopUpContent>
    </section>
  );
}

export default AddNewShow;
