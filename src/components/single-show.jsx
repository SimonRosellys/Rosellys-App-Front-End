import React, { useState, useEffect } from "react";
import { getSingleShow } from "../utils/api";
import Moment from "moment";
import EditShow from "./edit-show";

function SingleShow({ id }) {
  const [show, setShow] = useState([]);
  const [isShown, setIsShown] = useState(false);

  // const [isLoading, setIsLoading] = useState(true);

  const handleShowMore = (event) => {
    setIsShown((current) => !current);
  };

  function onToYes(onOrOff) {
    if (onOrOff === "on") {
      return "yes";
    }
    return onOrOff;
  }

  useEffect(() => {
    getSingleShow(id).then((show) => {
      setShow(show[0]);

      // setIsLoading(false);
    });
  }, [id]);

  const formatDate = Moment(show.show_date).format("ddd Do MMM YYYY");

  return (
    <section>
      <div>
        <h5 onClick={() => handleShowMore()}>
          {show.venue_name}: {formatDate}
        </h5>
      </div>
      {isShown && (
        <div>
          <EditShow show={show} />
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
          {/* <p>Show ID: {show.show_id}</p> */}
        </div>
      )}
    </section>
  );
}

export default SingleShow;
