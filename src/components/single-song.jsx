import React, { useState, useEffect } from "react";
import { getSingleSong } from "../utils/api";
import EditSong from "./edit-song";
import Popup from "reactjs-popup";

function SingleSong({ id }) {
  const [song, setSong] = useState([]);
  const [isShown, setIsShown] = useState(false);

  // const [isLoading, setIsLoading] = useState(true);

  const handleShowMore = (event) => {
    setIsShown((current) => !current);
    // setIsShown(true);
  };

  useEffect(() => {
    getSingleSong(id).then((song) => {
      setSong(song[0]);

      // setIsLoading(false);
    });
  }, [id]);

  return (
    <section className="dev-box">
      <Popup trigger={<h4>{song.title}</h4>} position="bottom center">
        <div>
          <p>Key: {song.song_key}</p>
          <p>Composer: {song.composer}</p>
          <p>Instrumentation: {song.instrumentation}</p>
          <p>Lyrics: {song.lyrics}</p>
          <p>Notes: {song.notes}</p>
          <EditSong song={song} />
        </div>
      </Popup>{" "}
    </section>
  );
}

export default SingleSong;
