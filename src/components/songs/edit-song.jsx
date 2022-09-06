import React, { useState } from "react";
import { editSong } from "../../utils/api";

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
      <button className="button-standard" onClick={() => handleShowMore()}>
        {isShown ? "CANCEL" : "EDIT"}
      </button>
      {isShown && (
        <form className="add-show-form" onSubmit={handleSubmit}>
          <button className="button-standard" type="submit">
            SAVE CHANGES
          </button>
          <label htmlFor="name" className="add-show-form-field">
            Song Name :
          </label>{" "}
          <input
            id="name"
            required
            type="text"
            name="title"
            defaultValue={song.song.title}
            onChange={handleChange}
          />
          <label htmlFor="lyrics" className="add-song-form-field">
            Lyrics :
          </label>{" "}
          <input
            id="lyrics"
            type="text"
            name="lyrics"
            defaultValue={song.song.lyrics}
            onChange={handleChange}
          />
          <label htmlFor="key" className="add-song-form-field">
            Key :
          </label>
          <input
            id="key"
            type="text"
            name="song_key"
            defaultValue={song.song.song_key}
            onChange={handleChange}
          />
          <label htmlFor="instruments" className="add-song-form-field">
            Instrumentation :
          </label>{" "}
          <input
            id="instruments"
            type="text"
            name="instrumentation"
            defaultValue={song.song.instrumentation}
            onChange={handleChange}
          />
          <label htmlFor="composer" className="add-song-form-field">
            Composer :
          </label>{" "}
          <input
            id="composer"
            type="text"
            name="composer"
            defaultValue={song.song.composer}
            onChange={handleChange}
          />
          <label htmlFor="notes" className="add-show-form-field">
            notes :
          </label>{" "}
          <input
            id="notes"
            type="text"
            name="notes"
            defaultValue={song.song.notes}
            onChange={handleChange}
          />
          <label htmlFor="album" className="add-show-form-field">
            album :
          </label>{" "}
          <input
            id="album"
            type="text"
            name="album"
            defaultValue={song.song.album}
            onChange={handleChange}
          />
          <label htmlFor="ready" className="add-show-form-field">
            stage ready :
          </label>{" "}
          <input
            id="ready"
            type="text"
            name="stage_ready"
            defaultValue={song.song.stage_ready}
            onChange={handleChange}
          />
        </form>
      )}
    </section>
  );
}
export default EditSong;
// UPDATING ALBUM AND STAGE_READY IS WORKING ON LOCALHOST BUT NOT HEROKU
