import React, { useState, useEffect } from "react";
import { getSingleSetlist, getSingleShow, getSongs } from "../utils/api";
import Popup from "reactjs-popup";

function SingleSetlist({ id }) {
  const [setlist, setSetlist] = useState([]);
  const [show, setShow] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [songs, setSongs] = useState([]);
  const [isSongsLoading, setSongsIsLoading] = useState(true);

  useEffect(() => {
    getSetlistAndShowData(id);
  }, []);

  useEffect(() => {
    getSongs().then((songs) => {
      setSongs(songs);
      setSongsIsLoading(false);
    });
  }, []);

  if (isSongsLoading)
    return <p>Don't have a cow man, your songs are on the way</p>;

  async function getSetlistAndShowData(id) {
    const list = await getSingleSetlist(id);
    setSetlist(list[0]);
    const show = await getSingleShow(list[0].show_id);
    setShow(show[0]);
    setIsLoading(false);
  }

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  console.log(show);
  return (
    <section>
      <Popup trigger={<h4>{show.venue_name}</h4>} position="bottom center">
        <div className="modal-content">
          {setlist.list_array.map((song) => {
            return <div key={song}>{songs[song].title}</div>;
          })}
        </div>
      </Popup>
    </section>
  );
}

export default SingleSetlist;
// NOT SEEING THE SHOW OBJECT ON LOCAL HOST, BUT IS WORKING FINE THROUGH HEROKU, WHY? {show.venue_name}
