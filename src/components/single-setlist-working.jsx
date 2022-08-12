import React, { useState, useEffect } from "react";
import { getSingleSetlist, getSingleShow } from "../utils/api";

// import EditSetlist from "./edit-setlist";

function SingleSetlist({ id }) {
  const [setlist, setSetlist] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [show, setShow] = useState();

  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSingleSetlist(id).then((list) => {
      setSetlist(list[0]);
    });
  }, [id]);
  console.log(setlist.show_id);

  // useEffect(() => {
  //   getSingleShow(setlist.show_id).then((show) => {
  //     console.log(show[0].venue_name);
  //     setShow(show[0]);
  //   });
  // }, []);

  const handleShowMore = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <section>
      <div>
        <h5 onClick={() => handleShowMore()}>{setlist.setlist_id}</h5>
      </div>
      {isShown && (
        <div>
          {/* <EditSetlist list={list} /> */}
          <p>setlist_id: {setlist.setlist_id}</p>
          {/* <p>Show: {show.venue_name}</p> */}
          <p>list_array: {setlist.list_array}</p>
        </div>
      )}
    </section>
  );
}

export default SingleSetlist;
