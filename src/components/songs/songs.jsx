import React, { useState, useEffect } from "react";
import { getSongs } from "../../utils/api";
import SingleSong from "./single-song";
import AddNewSong from "./add-song";
import { Header } from "./Songs.styled";

const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSongs().then((songs) => {
      setSongs(songs);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Your songs are loading, please wait...</p>;

  return (
    <section>
      <Header>
        <h1>SONGS</h1>
        <AddNewSong />
      </Header>

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
