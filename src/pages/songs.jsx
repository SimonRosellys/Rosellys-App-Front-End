import React, { useState, useEffect } from "react";
import { getSongs } from "../utils/api";
import SingleSong from "../components/single-song";

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
      <nav>
        <div>
          <h1 className="list-title">List of Rosellys Songs</h1>
          <h4 className="list-title">Click song title for more info</h4>
          <p className="dev">Add song button here </p>
        </div>

        {songs.map((song) => {
          // console.log(song);
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
