import React, { useState, useEffect } from "react";
import { getSongs } from "../utils/api";
import SingleSong from "../components/single-song";

const Songs = () => {
  const [songs, setSongs] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSongs().then((songs) => {
      setSongs(songs);
      // setIsLoading(false);
    });
  }, []);

  // if (isLoading) return <p>Don't have a cow man, your news is on it's way</p>;

  return (
    <section>
      <nav>
        <h1 className="list-title">List of Rosellys Songs</h1>
        {songs.map((song) => {
          console.log(song);
          return (
            <div className="song-list-items" key={song.song_id}>
              <h1>{song.title}</h1>
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
