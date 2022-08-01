import React from "react";
import Navbar from "./Navbar";
import Shows from "./pages/shows";
import Set_Lists from "./pages/set-lists";
import Home from "./pages/home";
import Songs from "./pages/songs";
import "./App.css";
import "./styles.css";

function App() {
  let Component;
  switch (window.location.pathname) {
    // case "/home":
    //   Component = Home;
    //   break;
    case "/shows":
      Component = Shows;
      break;
    case "/set-lists":
      Component = Set_Lists;
      break;
    case "/songs":
      Component = Songs;
      break;
  }
  return (
    <>
      <Navbar />
      <Component />
    </>
  );
}

export default App;
