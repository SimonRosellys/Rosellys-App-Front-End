import React, { useState, useEffect } from "react";
import { getSongs } from "../utils/api";
import SingleSong from "../components/single-song";
import AddNewSong from "../components/add-song";

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
      <AddNewSong />
      <nav>
        <div>
          <h1 className="list-title">List of Rosellys Songs</h1>
        </div>

        {songs.map((song) => {
          return (
            <div className="song-list-items" key={song.song_id}>
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
