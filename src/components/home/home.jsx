import React from "react";
import { StyledHome } from "./Home.styled";

const Home = () => {
  return (
    <StyledHome>
      <img
        src={require("../../images/black-rosellys-logo.JPG")}
        alt={"Rosellys Logo"}
      />
      <h1>Log in section will be here when implemented</h1>
    </StyledHome>
  );
};

export default Home;
