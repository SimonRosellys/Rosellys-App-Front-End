import React, { useState, useEffect } from "react";
import { getSongs } from "../utils/api";

const CreateSetlist = (show_id) => {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [setlist, setSetlist] = useState([]);

  const handleAddToList = (song_id) => {
    if (setlist.includes(song_id)) {
      //
      const index = setlist.indexOf(song_id);
      if (index > -1) {
        let remainingList = setlist.splice(index, 1);
        setSetlist(setlist);
      }
      //
    } else {
      setSetlist([...setlist.concat(song_id)]); // add
    }
  };

  useEffect(() => {
    getSongs().then((songs) => {
      setSongs(songs);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Don't have a cow man, your songs are on the way</p>;
  // everything under here *************************************************************

  const draggables = document.querySelectorAll(".dnd-draggable");
  const containers = document.querySelectorAll(".dnd-container");

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

  return (
    <section>
      <div className="dnd-container">
        {songs.map((song) => {
          return (
            <p className="dnd-draggable" draggable="true" key={song.song_id}>
              {song.title}
            </p>
          );
        })}
      </div>
      <div className="dnd-container">
        <p className="dnd-draggable" draggable="true">
          3
        </p>
        <p className="dnd-draggable" draggable="true">
          4
        </p>
      </div>
    </section>
  );
};

export default CreateSetlist;

// import React, { useState, useEffect } from "react";
// import { getSongs } from "../utils/api";
// import SingleSongForSetlist from "./SingleSongForSetlist";
// import OrderSetlist from "./order-setlist";
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";

// const CreateSetlist = (show_id) => {
//   const [isShown, setIsShown] = useState(false);
//   const [songs, setSongs] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [setlist, setSetlist] = useState([]);

//   const handleShowMore = () => {
//     setIsShown((current) => !current);
//   };

//   const handleAddToList = (song_id) => {
//     if (setlist.includes(song_id)) {
//       //
//       const index = setlist.indexOf(song_id);
//       if (index > -1) {
//         let remainingList = setlist.splice(index, 1);
//         setSetlist(setlist);
//       }
//       //
//     } else {
//       setSetlist([...setlist.concat(song_id)]); // add
//     }
//   };

//   const handleOrderList = () => {
//     console.log("here are the songs to be ordered", setlist);
//   };
//   // console.log(setlist);

//   useEffect(() => {
//     getSongs().then((songs) => {
//       setSongs(songs);
//       setIsLoading(false);
//     });
//   }, []);

//   if (isLoading) return <p>Don't have a cow man, your songs are on the way</p>;

//   return (
//     <section>
//       <Popup
//         trigger={
//           <h4 className="dev-box" onClick={() => handleShowMore()}>
//             Create a set list
//           </h4>
//         }
//         position="bottom center"
//       >
//         <div>
//           {/* <h4 className="dev-box" onClick={() => handleOrderList()}>
//             Save and re-order selected songs
//           </h4> */}
//           {/* <OrderSetlist unorderedSetlist={setlist} /> */}
//           {songs.map((song) => {
//             return (
//               <div className="song-list-items" key={song.song_id}>
//                 <div
//                   onClick={() => {
//                     handleAddToList(song.song_id);
//                   }}
//                 >
//                   <SingleSongForSetlist
//                     id={song.song_id}
//                     // onClick={() => handleAddToList(song.song_id)}
//                   />
//                 </div>
//                 {song.instrumentation}
//               </div>
//             );
//           })}
//         </div>
//
//     </section>
//   );
// };
