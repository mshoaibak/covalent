import Image from "next/image";
import styled from "styled-components";
import VV from "../assets/images/vvc.SVG";

const Main = styled.div`
  //   @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200&family=Open+Sans:wght@300&family=Roboto:wght@100&display=swap");

  background-color: #3b2349;
  background-image: linear-gradient(to top, black, #3b2349);

  //   height: 100vh;
  min-height: 100vh;
  /* border: 1px solid yellow; */
  text-align: center;
  color: white;
  //   border: 1px solid yellow;

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
  padding-top: 80px;
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
const Milestones = () => {
  return (
    <>
      <Main>
        <H1>MILESTONES</H1>

        <Maps>
          <Inner>
            <Image src={VV} alt="milestone-image" />
          </Inner>
          <Bottom>
            {/* <HK color="#ff9e44">Q1</HK>
            <HK color="#ff4093">Q2</HK>
            <HK color="#c06ee2">Q3</HK>
            <HK color="#5aa5da">Q4</HK> */}
          </Bottom>
        </Maps>
      </Main>
    </>
  );
};
export default Milestones;
