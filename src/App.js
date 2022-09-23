import React from "react";
import Navbar from "./components/navbar/Navbar";
import Shows from "./components/shows/shows";
import SetLists from "./components/setlists/set-lists";
import Home from "./components/home/home";
import Songs from "./components/songs/songs";
import CreateSetlist from "./components/setlists/create-setlist";
import "./App.css";
import "./styles.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/set-lists" element={<SetLists />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/create-setlist" element={<CreateSetlist />} />
      </Routes>
    </>
  );
}

export default App;
