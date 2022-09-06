import React, { useState } from "react";
import { addSong } from "../../utils/api";
import Popup from "reactjs-popup";

function AddNewSong() {
  const [newSong, setNewSong] = useState({
    title: "",
    lyrics: "",
    song_key: "",
    instrumentation: "",
    composer: "",
    notes: "",
    album: "",
    stage_ready: "",
  });

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
    <section className="standard-page">
      <Popup
        trigger={<h4 className="button-standard">ADD SONG</h4>}
        position="bottom center"
      >
        <div className="add-song">
          <form className="add-song-form" onSubmit={handleSubmit}>
            <label for="name" className="add-song-form-field">
              Song Name :
            </label>{" "}
            <input
              id="name"
              required
              type="text"
              name="title"
              onChange={handleChange}
            />
            <label for="lyrics" className="add-song-form-field">
              Lyrics :
            </label>{" "}
            <input
              id="lyrics"
              type="text"
              name="lyrics"
              onChange={handleChange}
            />
            <label for="key" className="add-song-form-field">
              Key :
            </label>{" "}
            <input
              id="key"
              type="text"
              name="song_key"
              onChange={handleChange}
            />
            <label for="instruments" className="add-song-form-field">
              Instrumentation :
            </label>{" "}
            <input
              id="instruments"
              type="text"
              name="instrumentation"
              defaultValue="FIDDLE or ACCORDIAN or BANJO"
              onChange={handleChange}
            />
            <label for="composer" className="add-song-form-field">
              Composer :
            </label>{" "}
            <input
              id="composer"
              type="text"
              name="composer"
              onChange={handleChange}
            />
            <label for="notes" className="add-song-form-field">
              Notes :
            </label>{" "}
            <input
              id="notes"
              type="text"
              name="notes"
              onChange={handleChange}
            />
            <label for="album" className="add-song-form-field">
              Album :
            </label>{" "}
            <input
              id="album"
              type="text"
              name="album"
              defaultValue="1 = Drive Through The Night. 2 = One Way St. 3 = Two Much Like Trouble. 4 = The Granary Sessions. 5 = On The Porch"
              onChange={handleChange}
            />
            <label for="ready" className="add-song-form-field">
              Stage Ready? :
            </label>{" "}
            <input
              id="ready"
              type="text"
              name="stage_ready"
              defaultValue="Y = yes and N = no"
              onChange={handleChange}
            />
            <button className="button-standard" type="submit">
              SAVE SONG
            </button>
          </form>
        </div>
      </Popup>
    </section>
  );
}

export default AddNewSong;
