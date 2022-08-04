import React, { useState, useEffect } from "react";
import { getSingleShow } from "../utils/api";
import Moment from "moment";

function SingleShow({ id }) {
  const [show, setShow] = useState([]);
  const [isShown, setIsShown] = useState(false);

  // const [isLoading, setIsLoading] = useState(true);

  const handleShowMore = (event) => {
    setIsShown((current) => !current);
    // setIsShown(true);
  };

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
        <h1 onClick={() => handleShowMore()}>
          {show.venue_name}: {formatDate}
        </h1>
      </div>
      {isShown && (
        <div>
          <p>Address: {show.venue_address}</p>
          <p>Date: {formatDate}</p>
          <p>Soundcheck: {show.soundcheck_time}</p>
          <p>Start Time: {show.set_start_time}</p>
          <p>Website: {show.venue_website}</p>
          <p>Line Up: {show.line_up}</p>
          <p>Confirmed? {show.confirmed}</p>
          <p>Band Availability: {show.player_availability}</p>
          <p>Fee: £{show.fee}</p>
          <p>Recieved Payment: {show.paid_in}</p>
          <p>Band Paid: {show.paid_out}</p>
          <p>Contact Details: {show.contact_details}</p>
          <p>Additional Notes: {show.notes}</p>
          {/* <p>Show ID: {show.show_id}</p> */}
          <p className="dev">Edit show button here </p>
        </div>
      )}
    </section>
  );
}

export default SingleShow;
