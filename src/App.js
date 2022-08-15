import React from "react";
import Navbar from "./Navbar";
import Shows from "./pages/shows";
import Set_Lists from "./pages/set-lists";
import Home from "./pages/home";
import Songs from "./pages/songs";
import CreateSetlist from "./components/create-setlist";
import "./App.css";
import "./styles.css";

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Home;
      break;
    case "/shows":
      Component = Shows;
      break;
    case "/set-lists":
      Component = Set_Lists;
      break;
    case "/songs":
      Component = Songs;
      break;
    // case "/create-setlist":
    //   Component = CreateSetlist;
    //   break;
  }
  return (
    <>
      <Navbar />
      <Component />
    </>
  );
}

export default App;
