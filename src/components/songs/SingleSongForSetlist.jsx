import React, { useState, useEffect } from "react";
import { getSingleSong } from "../../utils/api";

function SingleSong({ id }) {
  const [song, setSong] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    getSingleSong(id).then((song) => {
      setSong(song[0]);
    });
  }, [id]);

  const handleAddToList = (song_id) => {
    setIsSelected((current) => !current);
  };

  let select;

  select = (
    <p style={isSelected ? { fontWeight: "bold" } : { fontWeight: "normal" }}>
      {song.title}
    </p>
  );

  return (
    <section>
      <div>
        <h3
          onClick={() => {
            handleAddToList(id);
          }}
        >
          {select}
        </h3>
        {/* <p>{song.instrumentation}</p> */}
        {/* TODO: put in album name here */}
      </div>
    </section>
  );
}

export default SingleSong;
