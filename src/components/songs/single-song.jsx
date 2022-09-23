import React, { useState, useEffect } from "react";
import { getSingleSong } from "../../utils/api";
import EditSong from "../songs/edit-song";
import {
  StyledAlbumCover,
  StyledInstrumentLogo,
  PopUpContent,
} from "./Songs.styled";

function SingleSong({ id }) {
  const [song, setSong] = useState([]);
  let cover;
  let coverText;
  let stageReadyText;
  let instrument;
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
      <StyledAlbumCover>
        <img
          src={require("../../images/Cover01.jpg")}
          alt={"Drive Through The Night album cover"}
        />
      </StyledAlbumCover>
    );
  }
  if (song.album === "2") {
    coverText = "One Way St - Album 02";
    cover = (
      <StyledAlbumCover>
        <img
          src={require("../../images/Cover02.jpg")}
          alt={"One Way St album cover"}
        />
      </StyledAlbumCover>
    );
  }
  if (song.album === "3") {
    coverText = "Two Much Like Trouble - Album 03";
    cover = (
      <StyledAlbumCover>
        <img
          src={require("../../images/Cover03.jpg")}
          alt={"Two Much Like Trouble album cover"}
        />
      </StyledAlbumCover>
    );
  }
  if (song.album === "4") {
    coverText = "The Granary Sessions - Album 04";
    cover = (
      <StyledAlbumCover>
        <img
          src={require("../../images/Cover04.png")}
          alt={"The Granary Sessions album cover"}
        />
      </StyledAlbumCover>
    );
  }
  if (song.album === "5") {
    coverText = "On The Porch - Album 05";
    cover = (
      <StyledAlbumCover>
        <img
          src={require("../../images/Cover05.jpg")}
          alt={"On The Porch album cover"}
        />
      </StyledAlbumCover>
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
      <StyledInstrumentLogo>
        <img
          className="inst-thumbnail-logo"
          src={require("../../images/fiddle.png")}
          alt={"violin"}
        />
      </StyledInstrumentLogo>
    );
  }
  if (song.instrumentation?.includes("ACCORDIAN")) {
    instrument2 = (
      <StyledInstrumentLogo>
        <img
          className="inst-thumbnail-logo"
          src={require("../../images/accordian.png")}
          alt={"accordian"}
        />
      </StyledInstrumentLogo>
    );
  }
  if (song.instrumentation?.includes("BANJO")) {
    instrument3 = (
      <StyledInstrumentLogo>
        <img
          className="inst-thumbnail-logo"
          src={require("../../images/banjo.png")}
          alt={"banjo"}
        />
      </StyledInstrumentLogo>
    );
  }

  return (
    <main>
      <PopUpContent
        trigger={<h4>{song.title}</h4>}
        position="bottom center"
        modal
        closeOnDocumentClick
      >
        <span>
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
        </span>
      </PopUpContent>
    </main>
  );
}

export default SingleSong;
