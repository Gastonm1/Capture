import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Josè Alonso
        </Link>
      </h1>
      <ul>
        <li>
          <Link className="link" to="/about">
            1. About
          </Link>
        </li>
        <li>
          <Link className="link" to="/work">
            2. Portfolio
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact">
            3. Contact
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  background: #282828;
  padding: 1rem 10rem;
  .link {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    font-weight: lighter;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
    color: white;
    text-decoration: none;
  }
`;

export default Nav;
