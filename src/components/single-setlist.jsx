import React, { useState, useEffect } from "react";
import { getSingleSetlist, getSingleShow } from "../utils/api";

function SingleSetlist({ id }) {
  const [setlist, setSetlist] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [show, setShow] = useState();
  const [isLoading, setLoading] = useState(true);

  async function getSetlistAndShowData(id) {
    const list = await getSingleSetlist(id);
    setSetlist(list[0]);
    const show = await getSingleShow(list[0].show_id);
    setShow(show[0]);
    setLoading(false);
  }
  // IT'S STILL RENDERING BEFORE THE ABOVE AWAITS HAVE HAD TIME TO RESOLVE.
  useEffect(() => {
    getSetlistAndShowData(id);
  }, []);

  const handleShowMore = (event) => {
    setIsShown((current) => !current);
  };

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <section>
      <div>
        <h5 onClick={() => handleShowMore()}>{show.venue_name}</h5>
      </div>
      {isShown && (
        <div>
          {/* <EditSetlist list={list} /> */}
          <p>setlist_id: {setlist.setlist_id}</p>
          <p>Venue: {show.venue_name}</p>
          {/* <p>Show: {setlist.show_id}</p> */}
          <p>list_array: {setlist.list_array}</p>
        </div>
      )}
    </section>
  );
}

export default SingleSetlist;
