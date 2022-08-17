import React, { useState, useEffect } from "react";
import { getSongs } from "../utils/api";
import SingleSongForSetlist from "./SingleSongForSetlist";
import OrderSetlist from "./order-setlist";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const CreateSetlist = (show_id) => {
  const [isShown, setIsShown] = useState(false);
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [setlist, setSetlist] = useState([]);

  const handleShowMore = () => {
    setIsShown((current) => !current);
  };

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

  const handleOrderList = () => {
    console.log("here are the songs to be ordered", setlist);
  };
  // console.log(setlist);

  useEffect(() => {
    getSongs().then((songs) => {
      setSongs(songs);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Don't have a cow man, your songs are on the way</p>;

  return <section> drag and drop needs to go here</section>;
};

export default CreateSetlist;

// <section>
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
//       </Popup>
//     </section>
