import React, { useState, useEffect } from "react";
import { getSongs } from "../../utils/api";
import {
  Body,
  Button,
  Container,
  Draggable,
  Dragging,
} from "./Setlists.styled";
import "../../styles.css";

const CreateSetlist = (show_id) => {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [setlist, setSetlist] = useState([]);

  useEffect(() => {
    getSongs().then((songs) => {
      setSongs(songs);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading your setlists, please wait</p>;

  // DRAGGABLE SECTION ********************************************************

  const draggables = document.querySelectorAll(".draggable");
  const containers = document.querySelectorAll(".container");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
      draggable.classList.add("dragging");
    });

    draggable.addEventListener("dragend", () => {
      draggable.classList.remove("dragging");
    });
  });

  containers.forEach((container) => {
    container.addEventListener("dragover", (e) => {
      e.preventDefault();
      const afterElement = getDragAfterElement(container, e.clientY);
      const draggable = document.querySelector(".dragging");
      if (afterElement == null) {
        container.appendChild(draggable);
      } else {
        container.insertBefore(draggable, afterElement);
      }
    });
  });

  function getDragAfterElement(container, y) {
    const draggableElements = [
      ...container.querySelectorAll(".draggable:not(.dragging)"),
    ];

    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
      }
    ).element;
  }

  // DRAGGABLE SECTION END ********************************************************

  const handleSave = (songs) => {
    const result = songs.split(/\r?\n/);
    // map through result removing selected songs and ''
    const finalSetList = result.filter(
      (word) =>
        word !== "BREAK" &&
        word !== "" &&
        word !== "Selected songs" &&
        word !== "Drag here"
    );
    setSetlist(finalSetList);
    console.log(finalSetList);
  };

  return (
    <body>
      <div>
        Temporary spacer <br />
        Temporary spacer
      </div>
      <Container className="container">
        <p>Selected songs</p>
        <Draggable className="draggable" draggable="true">
          Drag here
        </Draggable>
      </Container>
      <Button onClick={() => handleSave(containers[0].innerText)}>log</Button>{" "}
      THIS WORKS
      {/* <Button onClick={() => handleSave(containers)}>log</Button> */}
      <Container className="container">
        <p>Songs to select from</p>
        {songs.map((song) => {
          return (
            <Draggable
              className="draggable"
              draggable="true"
              key={song.song_id}
              value={song.title}
            >
              {song.title}
            </Draggable>
          );
        })}
      </Container>
    </body>
  );
};

export default CreateSetlist;
