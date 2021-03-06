import logo from "../assets/images/logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleDown } from "@fortawesome/free-solid-svg-icons";
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
  @media (max-width: 912px) {
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
  letter-spacing: 2px;
  font-size: 2rem;
  @media (max-width: 900px) {
    height: 50px;
    width: 40%;
  }
`;
const ListContainer = styled.div`
  width: 70%;
`;
const List = styled.ul`
  margin-right: none;
  position: relative;
  z-index: 1000;

  height: 5vh;
  display: ${({ yes }) => (yes ? "block" : "flex")};
  justify-content: space-evenly;
  li {
    // margin: 0;
    list-style-type: none;
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 1px;
    caret-color: transparent;
    a {
      text-decoration: none;
      color: #ff9e44;
    }
  }

  .more {
    border: none;
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
    vertical-align: top;
    padding-top: 20px;
    color: #ff9e44 !important;
    text-decoration: none !important;
    cursor: pointer;
    margin: 0;
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
    height: auto;
    text-align: right;
    .listBorder::after {
      content: none;
    }
    .listBorder::before {
      content: none;
    }
  }
`;

const CLIST = styled.ul`
  height: 120px;
  width: 120px;
  position: absolute;
  z-index: 1000;
  margin-top: 25px;
  background: linear-gradient(to top, black, #3b2349);

  border-radius: 10px;
  li {
    list-style-type: none;
    font-weight: bold;
    cursor: pointer;
  }
  .childli {
    margin-top: 30px;
    font-size: 1rem;
    cursor: pointer;
    padding-right: 5px;
    color: #ff9e44;
  }
  a {
    color: #ff9e44;
  }
  .last {
    display: none;
  }
  @media (max-width: 912px) {
    height: auto;
    display: none;
    width: 100%;
    border-radius: 0px;
    top: 0;
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
  const [showHover, setShowHover] = useState(false);
  const handleShow = () => {
    if (showHover === true) {
      setShowHover(false);
    }
    //  else if (showHover === false) {
    //   setShowHover(true);
    // }
  };
  typeof window !== "undefined" && window.addEventListener("click", handleShow);

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
            <li className="listBorder">
              <a href="/assets/litepaper.pdf" alt="alt text" target="_blank">
                Pitch Deck
              </a>
            </li>

            <Link href="#corefeatures" passHref>
              <li className="listBorder">
                <a>Features</a>
              </li>
            </Link>
            <Link href="#team" passHref>
              <li className="listBorder">
                <a>Venture</a>
              </li>
            </Link>
            <Link href="#coverage" passHref>
              <li className="listBorder">
                <a>Coverage</a>
              </li>
            </Link>
            {typeof window !== "undefined" && window.innerWidth < 912 && (
              <>
                <Link className="last" href="#faqs" passHref>
                  <li className="listBorder last">
                    <a className="last">FAQs</a>
                  </li>
                </Link>
                <Link className="last" href="#roadmap" passHref>
                  <li className="listBorder last">
                    <a className="last">RoadMap</a>
                  </li>
                </Link>
              </>
            )}

            {typeof window !== "undefined" && window.innerWidth > 912 && (
              <li
                className="listBorder more"
                onMouseEnter={() => !showHover && setShowHover(true)}

                // onClick={() =>
                //   showHover ? setShowHover(false) : setShowHover(true)
                // }
              >
                More
                {/* <FontAwesomeIcon
                  style={{ marginLeft: "5px" }}
                  icon={faAngleDown}
                /> */}
                {showHover && (
                  <CLIST onMouseLeave={() => showHover && setShowHover(false)}>
                    <Link href="#faqs" passHref>
                      <li className="childli">FAQs</li>
                    </Link>

                    <Link href="#roadmap" passHref>
                      <li className="childli">
                        <a>RoadMap</a>
                      </li>
                    </Link>
                    {/* <Link href="#faqs" passHref>
                      <li className="childli">About</li>
                    </Link> */}
                  </CLIST>
                )}
              </li>
            )}
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
