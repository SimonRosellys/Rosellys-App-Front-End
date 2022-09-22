import styled from "styled-components";

export const StyledNavbar = styled.nav`
  a {
    color: #ffffff;
    background-color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    height: 100%;
    display: flex;
    width: 70px;
    padding: 0.25rem;
  }

  ul {
    border: 2px solid #5d23fb;
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    gap: 1rem;
    max-height: 7rem;
    align-items: center;
    box-shadow: #000000 5px 5px 15px 0.1px;
    border-radius: 8px;
    margin-bottom: 25px;
  }

  img {
    background-color: ${({ theme }) => theme.colors.secondary};
    max-height: 100%;
    max-width: 100%;
    flex-grow: 2;
  }
`;
