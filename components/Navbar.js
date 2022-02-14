import logo from "../assets/images/logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const Main = styled.div`
  //   @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200&family=Open+Sans:wght@300&family=Roboto:wght@100&display=swap");

  width: 90%;
  height: 10vh;

  border-radius: 50px;
  color: white;
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
  padding: 10px;
  //   z-index: 10;
  background: linear-gradient(to top, black, #3b2349);
  font-family: "Manrope", sans-serif;
  font-family: "Open Sans", sans-serif;
  font-family: "Roboto", sans-serif;
  @media (max-width: 900px) {
    height: auto;
    width: 100%;
    border-radius: 0px;
    top: 0;
  }
`;

const Logo = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 2rem;
`;
const ListContainer = styled.div`
  width: 70%;
`;
const List = styled.ul`
  z-index: 1000;

  display: ${({ yes }) => (yes ? "block" : "flex")};
  justify-content: space-evenly;
  li {
    list-style-type: none;
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 1px;
    caret-color: transparent;
  }
  .listBorder,
  .listBorder > span {
    position: relative;
    color: inherit;
    text-decoration: none;
    line-height: 1vh;
  }
  .listBorder:before,
  .listBorder:after,
  .listBorder > span:before,
  .listBorder > span:after {
    content: "";
    position: absolute;
    transition: transform 0.3s ease;
  }
  .listBorder {
    padding-top: 20px;
    color: #ff9e44 !important;
    text-decoration: none !important;
    cursor: pointer;
  }
  .listBorder:before {
    left: 0;
    bottom: -10px;
    width: 100%;
    height: 2px;
    background: #ff9e44;
    transform: scaleX(0);
  }
  .listBorder:hover:before {
    transform: scaleX(1);
    bottom: -10px;
  }
  @media (max-width: 900px) {
    display: ${({ yes }) => (yes ? "block" : "none")};
    .listBorder::after {
      content: none;
    }
    .listBorder::before {
      content: none;
    }
  }
`;
const Toggle = styled.div`
  display: none;
  padding: 20px;
  cursor: pointer;
  color: #ff9e44;

  @media (max-width: 900px) {
    display: block;
  }
`;
const Navbar = () => {
  const [yes, setYes] = useState(false);
  const handle = () => {
    yes ? setYes(false) : setYes(true);
  };

  return (
    <>
      <Main>
        <Logo>
          <Image src={logo} alt="logo" />
        </Logo>
        <ListContainer>
          <List yes={yes}>
            <li className="listBorder">Pitch deck</li>
            <li className="listBorder">Core Features</li>
            <li className="listBorder"> Comparison</li>
            <Link href="#team" passHref>
              <li className="listBorder">
                <a>Venture</a>
              </li>
            </Link>
            <li className="listBorder">
              <a>Advisors</a>
            </li>
          </List>
        </ListContainer>
        <Toggle>
          <FontAwesomeIcon onClick={handle} icon={faBars} />
        </Toggle>
      </Main>
    </>
  );
};

export default Navbar;
