import React, { useState } from "react";
import { addSong } from "../../utils/api";
import {
  PopUpContent,
  FormGroup,
  Label,
  Input,
  Textarea,
  Button,
} from "./Songs.styled";

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
    addSong(newSong);
    window.location.reload();
  };

  return (
    <main>
      <PopUpContent
        trigger={<Button>ADD SONG</Button>}
        position="bottom center"
        modal
        closeOnDocumentClick
      >
        <div>
          <FormGroup onSubmit={handleSubmit}>
            <Label htmlFor="name">Song Name :</Label>{" "}
            <Input
              id="name"
              required
              type="text"
              name="title"
              onChange={handleChange}
            />
            <Label htmlFor="lyrics">Lyrics :</Label>{" "}
            <Textarea
              id="lyrics"
              type="text"
              name="lyrics"
              onChange={handleChange}
            />
            <Label htmlFor="key">Key :</Label>{" "}
            <Input
              id="key"
              type="text"
              name="song_key"
              onChange={handleChange}
            />
            <Label htmlFor="instruments">Instrumentation :</Label>{" "}
            <Input
              id="instruments"
              type="text"
              name="instrumentation"
              defaultValue="FIDDLE or ACCORDIAN or BANJO"
              onChange={handleChange}
            />
            <Label htmlFor="composer">Composer :</Label>{" "}
            <Input
              id="composer"
              type="text"
              name="composer"
              onChange={handleChange}
            />
            <Label htmlFor="notes">Notes :</Label>{" "}
            <Input
              id="notes"
              type="text"
              name="notes"
              onChange={handleChange}
            />
            <Label htmlFor="album">Album :</Label>{" "}
            <Textarea
              id="album"
              type="text"
              name="album"
              defaultValue="1 = Drive Through The Night. 2 = One Way St. 3 = Two Much Like Trouble. 4 = The Granary Sessions. 5 = On The Porch"
              onChange={handleChange}
              rows={2}
            />
            <Label htmlFor="ready">Stage Ready? :</Label>{" "}
            <Input
              id="ready"
              type="text"
              name="stage_ready"
              defaultValue="Y = yes and N = no"
              onChange={handleChange}
            />
            <Button type="submit" onClick={handleSubmit}>
              SAVE SONG
            </Button>
          </FormGroup>
        </div>
      </PopUpContent>
    </main>
  );
}

export default AddNewSong;
