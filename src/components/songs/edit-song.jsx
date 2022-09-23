import React, { useState } from "react";
import { editSong } from "../../utils/api";
import { FormGroup, Label, Input, Textarea, Button } from "./Songs.styled";

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
    editSong(song.song.song_id, newSong);
    window.location.reload();
  };

  return (
    <section>
      <Button onClick={() => handleShowMore()}>
        {isShown ? "CANCEL" : "EDIT"}
      </Button>
      {isShown && (
        <FormGroup onSubmit={handleSubmit}>
          <Button type="submit" onClick={handleSubmit}>
            SAVE CHANGES
          </Button>
          <Label htmlFor="name">Song Name :</Label>{" "}
          <Input
            id="name"
            required
            type="text"
            name="title"
            defaultValue={song.song.title}
            onChange={handleChange}
          />
          <Label htmlFor="lyrics">Lyrics :</Label>{" "}
          <Textarea
            id="lyrics"
            type="textarea"
            name="lyrics"
            defaultValue={song.song.lyrics}
            onChange={handleChange}
            rows={5}
          />
          <Label htmlFor="key">Key :</Label>
          <Input
            id="key"
            type="text"
            name="song_key"
            defaultValue={song.song.song_key}
            onChange={handleChange}
          />
          <Label htmlFor="instruments">Instrumentation :</Label>{" "}
          <Input
            id="instruments"
            type="text"
            name="instrumentation"
            defaultValue={song.song.instrumentation}
            onChange={handleChange}
          />
          <Label htmlFor="composer">Composer :</Label>{" "}
          <Input
            id="composer"
            type="text"
            name="composer"
            defaultValue={song.song.composer}
            onChange={handleChange}
          />
          <Label htmlFor="notes">notes :</Label>{" "}
          <Input
            id="notes"
            type="text"
            name="notes"
            defaultValue={song.song.notes}
            onChange={handleChange}
          />
          <Label htmlFor="album">album :</Label>{" "}
          <Input
            id="album"
            type="text"
            name="album"
            defaultValue={song.song.album}
            onChange={handleChange}
          />
          <Label htmlFor="ready">stage ready :</Label>{" "}
          <Input
            id="ready"
            type="text"
            name="stage_ready"
            defaultValue={song.song.stage_ready}
            onChange={handleChange}
          />
          <Button type="submit" onClick={handleSubmit}>
            SAVE CHANGES
          </Button>
        </FormGroup>
      )}
    </section>
  );
}
export default EditSong;
// UPDATING ALBUM AND STAGE_READY IS WORKING ON LOCALHOST BUT NOT HEROKU
