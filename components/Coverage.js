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
const Main = styled.div`
  //   @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200&family=Open+Sans:wght@300&family=Roboto:wght@100&display=swap");

  background-color: #3b2349;
  background-image: linear-gradient(to top, #3b2349, black);
  width: 100%;
  //   min-height: 100vh;
  min-height: 100vh;
  /* border: 1px solid yellow; */
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

const Maps = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
const HK = styled.h1`
  text-align: center;
  //   padding: 10px 0;
  font-size: 3rem;
  //   color: #ff9e44;
  color: ${({ color }) => color};

  //   font-weight: bold;
  top: 450%;
  letter-spacing: 1px;
`;
const Inner = styled.div`
  //   width: 80%;
  height: 80vh;
  //   border: 1px solid yellow;
  //   border-left: 2px dashed #ff9e44;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  //   @media (max-width: 800) {
  //     width: 29%;
  //   }
  //   @media (max-width: 800px) {
  //     width: 25%;
  //   }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-evenly;
  //   border: 1px solid red;
  position: absolute;
  top: 430%;
  width: 100%;
  @media (max-width: 900px) {
    top: 560%;
  }
`;
const FirstImg = styled.div`
  //   border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;
const SecondImg = styled.div`
  //   border: 1px solid green;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px 0;
`;
const ThirdImg = styled.div`
  //   border: 1px solid green;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px 0;
`;
const FourthImg = styled.div`
  //   border: 1px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;
const Coverage = () => {
  return (
    <>
      <Main>
        <H1>EXCLUSIVE COVERAGE</H1>
        <FirstImg>
          <Image src={altcoin} alt="altcoin" />
          <Image src={finance} alt="finance" />
        </FirstImg>

        <SecondImg>
          <Image src={bitcoin} alt="bitcoin" />
          <Image src={btc} alt="btc" />
        </SecondImg>

        <ThirdImg>
          <Image src={zcrypto} alt="zcrypto" />
          <Image src={amb} alt="amb" />
        </ThirdImg>
        <FourthImg>
          <Image src={coin} alt="coin" />
        </FourthImg>
      </Main>
    </>
  );
};
export default Coverage;
