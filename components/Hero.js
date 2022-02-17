// import styles from "../styles/Hero.module.css";
import Navbar from "./Navbar";
import rightImage from "../assets/images/layers.svg";
import covalent from "../assets/images/covalent.png";
import covalent1 from "../assets/images/covalent1.png";
import plane from "../assets/images/plane.png";
import bit from "../assets/images/bit.png";
import bitsvg from "../assets/images/planesvg.svg";
import planesvg from "../assets/images/bitsvg.svg";
import nj from "../assets/images/nj.png";
import Image from "next/image";
import styled from "styled-components";
import { keyframes } from "styled-components";
const Main = styled.div`
  //   @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200&family=Open+Sans:wght@300&family=Roboto:wght@100&display=swap");

  width: 100%;
  // min-height: 100vh;
  // border: 1px solid white;
  background: linear-gradient(to top, black, #3b2349);
  padding-top: 20px;
  font-family: "Manrope", sans-serif;
  font-family: "Open Sans", sans-serif;
  font-family: "Roboto", sans-serif;
  margin: 0;
`;

const HeroContent = styled.div`
  width: 100%;
  // height: 90vh;
  display: flex;
  align-items: center;
  // border: 1px solid white;
  margin-top: 50px;
  color: #ff9e44;
  @media (max-width: 768px) {
    display: block;
  }
`;
const HeroLeftAnimation = keyframes`
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
`;
const HeroRightAnimation = keyframes`
  0% {
    transform: translatey(-20px);
  }
  50% {
    transform: translatey(0px);
  }
  100% {
    transform: translatey(-20px);
  }
`;
const HeroLeft = styled.div`
  width: 50%;
  // border: 1px solid red;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  // position: static;
  // z-index: 5;
  @media (max-width: 768px) {
    width: 100%;
    padding-top: 60px;
    height: 100%;
  }
`;

const HeroRight = styled.div`
  width: 50%;
  // height: 50vh;
  display: flex;
  // z-index: 1;
  justify-content: center;
  // border: 1px solid yellow;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;
const Button1 = styled.button`
  padding: 1rem;
  width: 10rem;
  border-radius: 10px;
  border: none;
  color: white;
  cursor: pointer;
  margin: 5px 5px;
  font-size: 1.2rem;

  background: linear-gradient(to bottom, #563c5c, black);
  box-shadow: 0px 8px 10px rgb(177, 72, 222, 0.35);
  @media (max-width: 768px) {
    width: 70%;
  }
`;
const Button2 = styled.button`
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
  a {
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
  }
  @media (max-width: 768px) {
    width: 70%;
  }
`;
const ButtonContainer = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: center;
  padding: 10px;
  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

const BannerImage = styled.div`
  // height: 60%;
  // width: 60%;
  animation-name: ${HeroRightAnimation};
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
`;

const H1 = styled.h3`
  width: 70%;
  text-align: center;
  @media (max-width: 768px) {
    width: 80%;
    text-align: center;
    margin-top: 30px;
  }
`;
const Hero = () => {
  return (
    <>
      <Main>
        <Navbar />
        <HeroContent>
          <HeroLeft>
            <H1>
              Litepaper Whitepaper Functionality Comparison Team Revolutionary
              Secure Messaging & Trading Dapp powered by Solana
            </H1>
            <ButtonContainer>
              <Button1>Join</Button1>
              <Button2>
                <a href="/assets/litepaper.pdf" alt="alt text" target="_blank">
                  Litepaper
                </a>
              </Button2>
            </ButtonContainer>
          </HeroLeft>
          <HeroRight>
            <BannerImage>
              <Image src={nj} width="400px" height="400px" alt="right image" />
            </BannerImage>
          </HeroRight>
        </HeroContent>
      </Main>
    </>
  );
};
export default Hero;
