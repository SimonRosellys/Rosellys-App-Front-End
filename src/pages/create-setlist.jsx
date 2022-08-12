import React, { useState, useEffect } from "react";
import { getSongs } from "../utils/api";
import SingleSongForSetlist from "../components/SingleSongForSetlist";

const CreateSetlist = (show_id) => {
  const [isShown, setIsShown] = useState(false);
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [setlist, setSetlist] = useState([]);

  const handleShowMore = () => {
    setIsShown((current) => !current);
  };

  const handleAddToList = (song_id) => {
    setSetlist([...setlist.concat(song_id)]);
    console.log(setlist);
  };

  useEffect(() => {
    getSongs().then((songs) => {
      setSongs(songs);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Don't have a cow man, your songs are on the way</p>;

  return (
    <section>
      <h4 onClick={() => handleShowMore()}>Create a set list</h4>
      {isShown && (
        <div>
          {songs.map((song) => {
            return (
              <div className="song-list-items" key={song.song_id}>
                <div>
                  <SingleSongForSetlist
                    id={song.song_id}
                    onClick={() => handleAddToList(song.song_id)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default CreateSetlist;
