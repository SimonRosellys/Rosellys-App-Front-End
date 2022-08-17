import React, { useState, useEffect } from "react";
import { getSongs } from "../utils/api";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const CreateSetlist = (show_id) => {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [setlist, setSetlist] = useState([]);

  // const handleAddToList = () => {
  //   {
  //     console.log(" Added to list function called");
  //   }
  // };

  const handleAddToList = (songName) => {
    if (setlist.includes(songName)) {
      //
      const index = setlist.indexOf(songName);
      if (index > -1) {
        let remainingList = setlist.splice(index, 1);
        setSetlist(setlist);
      }
      //
    } else {
      setSetlist([...setlist.concat(songName)]); // add
    }
  };

  useEffect(() => {
    getSongs().then((songs) => {
      setSongs(songs);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Don't have a cow man, your songs are on the way</p>;

  const draggables = document.querySelectorAll(".dnd-draggable");
  const containers = document.querySelectorAll(
    ".dnd-container-left, .dnd-container-right"
  );

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
      draggable.classList.add("dragging");
    });

    draggable.addEventListener("dragend", (e) => {
      let songName = draggable.innerHTML;
      handleAddToList(songName);
      // path[0].__reactFiber$k09fyn7en08.index
      //TODO: pass the song index through here!!!!!!!!!!!!
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
      ...container.querySelectorAll(".dnd-draggable:not(.dragging)"),
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
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  }

  document.addEventListener("dragend", (e) => {
    console.log(e);
  });

  return (
    <section>
      <DndProvider backend={HTML5Backend}>
        <div className="dnd-container-left">
          <p>songs to choose from</p>
          {songs.map((song) => {
            return (
              <div
                className="dnd-draggable"
                draggable="true"
                value={song.song_id}
                key={song.song_id}
              >
                {song.title}
              </div>
            );
          })}
        </div>
        <div className="dnd-container-right">
          <p>chosen songs</p>
        </div>
      </DndProvider>
    </section>
  );
};

export default CreateSetlist;
