import React, { useState } from "react";
import { editSong } from "../utils/api";

function EditSong(songToEdit) {
  const [song, setSong] = useState(songToEdit); // TODO: refactor this by directly assigning songToEdit where needed as setSong is not used
  const [isShown, setIsShown] = useState(false);
  const [newSong, setNewSong] = useState({
    title: song.song.venue_name,
    lyrics: song.song.venue_address,
    song_key: song.song.song_date,
    instrumentation: song.song.soundcheck_time,
    composer: song.song.set_start_time,
    notes: song.song.venue_website,
    album: song.song.album,
    stage_ready: song.song.stage_ready,
  });

  const handleShowMore = () => {
    setIsShown((current) => !current);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setNewSong((prev) => {
      return { ...prev, [name]: value };
    });
    return newSong;
  };

  const handleSubmit = (e) => {
    for (let i = 0; i < 8; i++) {
      // FIXME: This is the current number of fields (8) and will need to be updated or made dynamic if further fields are added
      const { name, value } = e.target[i];
      setNewSong((prev) => {
        return { ...prev, [name]: value };
      });
    }
    // e.preventDefault(); // TODO: remove this when done to rerender.
    editSong(song.song.song_id, newSong);
  };

  return (
    <section>
      <h4 className="button-standard" onClick={() => handleShowMore()}>
        {isShown ? "CANCEL" : "EDIT"}
      </h4>
      {isShown && (
        <div className="dev-box">
          <button className="button-standard" type="submit">
            SAVE CHANGES
          </button>
          <form className="add-show-form" onSubmit={handleSubmit}>
            <h6 className="add-show-form-field">Song Name :</h6>{" "}
            <input
              required
              type="text"
              name="title"
              defaultValue={song.song.title}
              onChange={handleChange}
            />
            <h6 className="add-song-form-field">Lyrics :</h6>{" "}
            <input
              type="text"
              name="lyrics"
              defaultValue={song.song.lyrics}
              onChange={handleChange}
            />
            <h6 className="add-song-form-field">Key :</h6>
            <input
              type="text"
              name="song_key"
              defaultValue={song.song.song_key}
              onChange={handleChange}
            />
            <h6 className="add-song-form-field">Instrumentation :</h6>{" "}
            <input
              type="text"
              name="instrumentation"
              defaultValue={song.song.instrumentation}
              onChange={handleChange}
            />
            <h6 className="add-song-form-field">Composer :</h6>{" "}
            <input
              type="text"
              name="composer"
              defaultValue={song.song.composer}
              onChange={handleChange}
            />
            <h6 className="add-show-form-field">notes :</h6>{" "}
            <input
              type="text"
              name="notes"
              defaultValue={song.song.notes}
              onChange={handleChange}
            />
            <h6 className="add-show-form-field">album :</h6>{" "}
            <input
              type="text"
              name="album"
              defaultValue={song.song.album}
              onChange={handleChange}
            />
            <h6 className="add-show-form-field">stage ready :</h6>{" "}
            <input
              type="text"
              name="stage_ready"
              defaultValue={song.song.stage_ready}
              onChange={handleChange}
            />
          </form>
        </div>
      )}
    </section>
  );
}
export default EditSong;
// UPDATING ALBUM AND STAGE_READY IS WORKING ON LOCALHOST BUT NOT HEROKU
