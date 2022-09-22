import React, { useState, useEffect } from "react";
import { getSongs } from "../../utils/api";
import SingleSong from "./single-song";
import AddNewSong from "./add-song";

const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSongs().then((songs) => {
      setSongs(songs);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Don't have a cow man, your songs are on the way</p>;

  return (
    <section>
      <div>
        <h1>SONGS</h1>
        <AddNewSong />
      </div>

      <nav>
        {songs.map((song) => {
          return (
            <div key={song.song_id}>
              <div>
                <SingleSong id={song.song_id} />
              </div>
            </div>
          );
        })}
      </nav>
    </section>
  );
};

export default Songs;
