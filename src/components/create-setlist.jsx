import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from "react";
import { getSongs } from "../utils/api";
import SongCard from "./dnd-card";

const CreateSetlist = () => {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    getSongs().then((songs) => {
      setSongs(songs);
      setIsLoading(false);
    });
  }, []);

  return (
    <Grid container margin={2}>
      <SongCard />
      <Grid item xs={4}>
        <Item>Set List</Item>
      </Grid>
    </Grid>
  );
};

export default CreateSetlist;

// import { DndProvider, useDrag, useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

// const CreateSetlist = (show_id) => {

//   const [setlist, setSetlist] = useState([]);

//   const handleAddToList = (songName) => {
//     if (setlist.includes(songName)) {
//       //
//       const index = setlist.indexOf(songName);
//       if (index > -1) {
//         let remainingList = setlist.splice(index, 1);
//         setSetlist(setlist);
//       }
//       //
//     } else {
//       setSetlist([...setlist.concat(songName)]); // add
//     }
//   };

//   if (isLoading) return <p>Don't have a cow man, your songs are on the way</p>;
//   ///////////////////////////////////////////////////////////////////////////////////////

//   return <section></section>;
// };

// export default CreateSetlist;
