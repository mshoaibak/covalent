import Image from "next/image";
import styled from "styled-components";
import VV from "../assets/images/vvc.SVG";
import altcoin from "../assets/images/altcoin.png";
import amb from "../assets/images/amb.png";
import btc from "../assets/images/btc.png";
import coin from "../assets/images/coin.png";
import finance from "../assets/images/finance.png";
import zcrypto from "../assets/images/zcrypto.png";
import bitcoin from "../assets/images/bitcoin.png";
// import { mentions } from "../assets/data/mentions";
import { mentions } from "../assets/data/mentions";
import { useState } from "react";

const Main = styled.div`
  //   @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200&family=Open+Sans:wght@300&family=Roboto:wght@100&display=swap");

  background-color: #3b2349;
  background-image: linear-gradient(to top, black, #3b2349);

  //   height: 100vh;
  min-height: 100vh;
  //   border: 1px solid green;

  text-align: center;
  color: white;
  //   border: 1px solid yellow;
  padding-bottom: 50px;
  font-family: "Manrope", sans-serif;
  font-family: "Open Sans", sans-serif;
  font-family: "Roboto", sans-serif;
  @media (max-width: 900px) {
    // height: auto;
  }
`;

const H1 = styled.h1`
  text-align: center;
  padding: 80px 0;
  //   padding-bottom: 10px
  font-size: 3rem;
  color: #ff9e44;
  //   color: ${({ color }) => color};

  //   font-weight: bold;
  letter-spacing: 1px;
`;

const Mention1 = styled.div`
  width: 50%;
  height: 400px;
  margin: 0 auto;
  overflow: auto;
  overflow: ${({ scroll }) => (scroll ? "auto" : "hidden")};
`;
const H6 = styled.h6`
  font-weight: bold;
  margin: 10px 0;
`;
const Button = styled.button`
  padding: 1rem;
  width: 10rem;
  border-radius: 10px;
  border: none;
  color: white;
  cursor: pointer;
  margin: 5px 5px;
  background: transparent;
  box-shadow: 0px 8px 10px rgb(177, 72, 222, 0.35);
  outline: 2px solid #ff9e44;
  margin: 10px 0;
  button:focus {
    outline: 2px solid #ff9e44;
  }

  @media (max-width: 768px) {
    width: 70%;
  }
`;

const See = styled.span`
  letter-spacing: 1px;
  font-weight: bold;
`;
const Mention = () => {
  const [scroll, setScroll] = useState(false);
  return (
    <>
      <Main>
        <H1>WE ARE MENTIONED</H1>
        <Mention1 scroll={scroll}>
          {mentions.map((val) => {
            return (
              <>
                <H6>{val.info}</H6>
                <Image src={val.image} alt="mention-image" />
              </>
            );
          })}
        </Mention1>
        <Button onClick={() => (scroll ? setScroll(false) : setScroll(true))}>
          <See>SEE MORE</See>
        </Button>
      </Main>
    </>
  );
};
export default Mention;
