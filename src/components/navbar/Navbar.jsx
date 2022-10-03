import styled from "styled-components";
import { StyledNavbar } from "./Navbar.styled";

export default function Navbar() {
  return (
    <StyledNavbar>
      <div>
        <ul>
          <li>
            <a href="/">
              <img
                src={require("../../images/white-rosellys-logo.png")}
                alt={"Rosellys Logo"}
              />
            </a>
          </li>
          <li>
            <a href="/shows">Shows</a>
          </li>
          <li>
            <a href="/set-lists">Set Lists</a>
          </li>
          <li>
            <a href="/songs">Songs</a>
          </li>
        </ul>
      </div>
    </StyledNavbar>
  );
}
