import React, { useState, useEffect } from "react";
import { editShow } from "../utils/api";
import Moment from "moment";

function EditShow({ id }) {
  const [show, setShow] = useState([]);
  const [isShown, setIsShown] = useState(false);

  // const [isLoading, setIsLoading] = useState(true);

  const handleShowMore = (event) => {
    setIsShown((current) => !current);
    // setIsShown(true);
  };

  function onToYes(onOrOff) {
    if (onOrOff === "on") {
      return "yes";
    }
    return onOrOff;
  }

  const formatDate = Moment(show.show_date).format("ddd Do MMM YYYY");

  useEffect(() => {
    editShow(id).then((show) => {
      setShow(show[0]);

      // setIsLoading(false);
    });
  }, [id]);

  return (
    <section>
      <div>
        <h1 onClick={() => handleShowMore()}>{show.title}</h1>
      </div>
      {isShown && (
        <div>
          <p>Address: {show.venue_address}</p>
          <p>Date: {formatDate}</p>
          <p>Soundcheck: {show.soundcheck_time}</p>
          <p>Start Time: {show.set_start_time}</p>
          <p>Website: {show.venue_website}</p>
          <p>Line Up: {show.line_up}</p>
          <p>Confirmed? {onToYes(show.confirmed)}</p>
          <p>Band Availability: {show.player_availability}</p>
          <p>Fee: £{show.fee}</p>
          <p>Recieved Payment? {onToYes(show.paid_in)}</p>
          <p>Band Paid? {onToYes(show.paid_out)}</p>
          <p>Contact Details: {show.contact_details}</p>
          <p>Additional Notes: {show.notes}</p>
        </div>
      )}
    </section>
  );
}

export default EditShow;
