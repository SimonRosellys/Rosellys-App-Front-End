import React from "react";
import Navbar from "./Navbar";
import Shows from "./pages/shows";
import Set_Lists from "./pages/set-lists";
import Home from "./pages/home";
import Songs from "./pages/songs";
import CreateSetlist from "./components/create-setlist";
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
        <Route path="/set-lists" element={<Set_Lists />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/create-setlist" element={<CreateSetlist />} />
      </Routes>
    </>
  );
}

export default App;
