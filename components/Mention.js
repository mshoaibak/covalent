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
import { mentions } from "../assets/data/mentions";
import { useState } from "react";

const Main = styled.div`
  background-color: #3b2349;
  background-image: linear-gradient(to top, #3b2349, black);
  min-height: 100vh;
  margin: 0;
  text-align: center;
  color: white;
  padding-bottom: 50px;
  font-family: "Manrope", sans-serif;
  font-family: "Open Sans", sans-serif;
  font-family: "Roboto", sans-serif;
`;

const H1 = styled.h1`
  text-align: center;
  padding: 70px 0;
  font-size: 3rem;
  color: #ff9e44;
  letter-spacing: 1px;
`;

const Mention1 = styled.div`
  width: 50%;
  height: 400px;
  margin: 50px auto;
  overflow: auto;
  overflow: ${({ scroll }) => (scroll ? "auto" : "hidden")};
  @media (max-width: 400px) {
    height: 450px;
  }
  @media (max-width: 280px) {
    height: 500px;
  }
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
  &:active {
    outline: 2px solid #ff9e44;
  }

  @media (max-width: 768px) {
    width: 50%;
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
        <H1>EXCLUSIVE COVERAGE</H1>
        <Mention1 scroll={scroll}>
          {mentions.map((val) => {
            return (
              <>
                <div style={{ margin: "40px 0" }}>
                  <H6>{val.info}</H6>
                  <Image src={val.image} alt="mention-image" />
                </div>
              </>
            );
          })}
        </Mention1>
        <Button onClick={() => (scroll ? setScroll(false) : setScroll(true))}>
          <See>{!scroll ? "SEE MORE" : "SEE LESS"}</See>
        </Button>
      </Main>
    </>
  );
};
export default Mention;
