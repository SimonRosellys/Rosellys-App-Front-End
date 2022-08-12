import React, { useState, useEffect } from "react";
import { getSingleSong } from "../utils/api";
import EditSong from "./edit-song";

function SingleSong({ id }) {
  const [song, setSong] = useState([]);

  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSingleSong(id).then((song) => {
      setSong(song[0]);

      // setIsLoading(false);
    });
  }, [id]);

  return (
    <section>
      <div>
        <h3>{song.title}</h3>
        <p>{song.instrumentation}</p>
        {/* TODO: put in album name here */}
      </div>
    </section>
  );
}

export default SingleSong;
