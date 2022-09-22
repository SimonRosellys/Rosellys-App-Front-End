import React from "react";
import Navbar from "./components/navbar/Navbar";
import Shows from "./components/shows/shows";
import Set_Lists from "./components/setlists/set-lists";
import Home from "./components/home/home";
import Songs from "./components/songs/songs";
import CreateSetlist from "./components/setlists/create-setlist";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#dfc1ff",
    secondary: "#946FFB",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/set-lists" element={<Set_Lists />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/create-setlist" element={<CreateSetlist />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
