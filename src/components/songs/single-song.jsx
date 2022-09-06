import React, { useState, useEffect } from "react";
import { getSingleSong } from "../../utils/api";
import EditSong from "../songs/edit-song";
import Popup from "reactjs-popup";

function SingleSong({ id }) {
  const [song, setSong] = useState([]);
  let cover;
  let coverText;
  let stageReadyText;
  let instrument = "Standard Set Up";
  let instrument2;
  let instrument3;

  useEffect(() => {
    getSingleSong(id).then((song) => {
      setSong(song[0]);
    });
  }, [id]);

  if (song.album === "1") {
    coverText = "Drive Through The Night - Album 01";
    cover = (
      <img
        className="album-thumbnail-logo"
        src={require("../../images/Cover01.jpg")}
        alt={"Drive Through The Night album cover"}
      />
    );
  }
  if (song.album === "2") {
    coverText = "One Way St - Album 02";
    cover = (
      <img
        className="album-thumbnail-logo"
        src={require("../../images/Cover02.jpg")}
        alt={"One Way St album cover"}
      />
    );
  }
  if (song.album === "3") {
    coverText = "Two Much Like Trouble - Album 03";
    cover = (
      <img
        className="album-thumbnail-logo"
        src={require("../../images/Cover03.jpg")}
        alt={"Two Much Like Trouble album cover"}
      />
    );
  }
  if (song.album === "4") {
    coverText = "The Granary Sessions - Album 04";
    cover = (
      <img
        className="album-thumbnail-logo"
        src={require("../../images/Cover04.png")}
        alt={"The Granary Sessions album cover"}
      />
    );
  }
  if (song.album === "5") {
    coverText = "On The Porch - Album 05";
    cover = (
      <img
        className="album-thumbnail-logo"
        src={require("../../images/Cover05.jpg")}
        alt={"On The Porch album cover"}
      />
    );
  }
  if (song.album === "") {
    coverText = "Not currently on an album";
  }
  if (song.stage_ready === "Y") {
    stageReadyText = "This song is STAGE READY";
  }
  if (song.instrumentation?.includes("FIDDLE")) {
    instrument = (
      <img
        className="inst-thumbnail-logo"
        src={require("../../images/fiddle.png")}
        alt={"violin"}
      />
    );
  }
  if (song.instrumentation?.includes("ACCORDIAN")) {
    instrument2 = (
      <img
        className="inst-thumbnail-logo"
        src={require("../../images/accordian.png")}
        alt={"accordian"}
      />
    );
  }
  if (song.instrumentation?.includes("BANJO")) {
    instrument3 = (
      <img
        className="inst-thumbnail-logo"
        src={require("../../images/banjo.png")}
        alt={"banjo"}
      />
    );
  }

  return (
    <section className="dev-box">
      <Popup trigger={<h4>{song.title}</h4>} position="bottom center">
        <div>
          <p>Key: {song.song_key}</p>
          <p>
            Instrumentation: {instrument} {instrument2} {instrument3}
          </p>
          <p>Lyrics: {song.lyrics}</p>
          <p>Composer: {song.composer}</p>
          <p>Notes: {song.notes}</p>
          <p>
            {coverText} {cover}
          </p>
          <p>{stageReadyText}</p>
          <EditSong song={song} />
        </div>
      </Popup>{" "}
    </section>
  );
}

export default SingleSong;
