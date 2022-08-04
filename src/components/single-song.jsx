import React, { useState, useEffect } from "react";
import { getSingleSong } from "../utils/api";

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
    <section>
      <div>
        <h1 onClick={() => handleShowMore()}>{song.title}</h1>
      </div>
      {isShown && (
        <div>
          <p>Key: {song.song_key}</p>
          <p>Composer: {song.composer}</p>
          <p>Instrumentation: {song.instrumentation}</p>
          <p>Lyrics: {song.lyrics}</p>
          <p className="dev">Edit song button here </p>
        </div>
      )}
    </section>
  );
}

export default SingleSong;
