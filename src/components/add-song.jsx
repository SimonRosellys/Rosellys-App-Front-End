import React, { useEffect, useState } from "react";
import { addSong } from "../utils/api";

function AddNewSong() {
  const [isShown, setIsShown] = useState(false);
  const [newSong, setNewSong] = useState({
    title: "",
    lyrics: "",
    song_key: "",
    instrumentation: "",
    composer: "",
    notes: "",
  });

  const handleShowMore = (event) => {
    setIsShown((current) => !current);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSong((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    console.log(newSong);
    addSong(newSong);
  };
  return (
    <section>
      <div>
        <h1 className="add-song" onClick={() => handleShowMore()}>
          Click here to add a song
        </h1>
      </div>
      {isShown && (
        <div className="add-song">
          <form className="add-song-form" onSubmit={handleSubmit}>
            <h6 className="add-song-form-field">Song Name :</h6>{" "}
            <input required type="text" name="title" onChange={handleChange} />
            <h6 className="add-song-form-field">Lyrics :</h6>{" "}
            <input type="text" name="lyrics" onChange={handleChange} />
            <h6 className="add-song-form-field">Key :</h6>{" "}
            <input type="text" name="song_key" onChange={handleChange} />
            <h6 className="add-song-form-field">Instrumentation :</h6>{" "}
            <input type="text" name="instrumentation" onChange={handleChange} />
            <h6 className="add-song-form-field">Composer :</h6>{" "}
            <input type="text" name="composer" onChange={handleChange} />
            <h6 className="add-song-form-field">Notes :</h6>{" "}
            <input type="text" name="notes" onChange={handleChange} />
            <button type="submit">Add Show</button>
          </form>
        </div>
      )}
    </section>
  );
}

export default AddNewSong;
