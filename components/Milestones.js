import Image from "next/image";
import styled from "styled-components";
import VV from "../assets/images/neww.png";
// import VV from "../assets/images/pkr.PNG";
// import VV from "../assets/images/kj.PNG";

const Main = styled.div`
  background-color: #3b2349;
  background-image: linear-gradient(to top, black, #3b2349);
  position: relative;
  min-height: 100vh;
  text-align: center;
  color: white;
  margin: -2px 0;

  font-family: "Manrope", sans-serif;
  font-family: "Open Sans", sans-serif;
  font-family: "Roboto", sans-serif;
`;

const H1 = styled.h1`
  text-align: center;
  padding: 80px 0;
  font-size: 3rem;
  color: #ff9e44;

  letter-spacing: 1px;
  @media (max-width: 280px) {
    letter-spacing: 0;
    font-size: 2rem;
  }
`;

const Inner = styled.div`
  width: 80%;

  display: flex;
  justify-content: center;
  margin: 0 auto;

  flex-direction: column;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const MilesData = styled.div`
  width: 150px;

  @media (max-width: 700px) {
    width: 180px;
    font-size: 12px;
  }
  @media (max-width: 525px) {
    width: 120px;
    font-size: 10px;
  }
  @media (max-width: 460px) {
    width: 100px;
    font-size: 10px;
  }
  @media (max-width: 400px) {
    margin-left: 0;
    margin-right: 0;
    width: 80px;
  }
`;
const Milestones = () => {
  return (
    <>
      <Main>
        <H1>ROADMAP</H1>

        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <MilesData>
            Trade over-the counter (OTC) crypto assets and tokens P2P via an
            integrated ESC (escrow smart contract) functionality.
          </MilesData>
          <MilesData>
            Trade over-the counter (OTC) crypto assets and tokens P2P via an
            integrated ESC (escrow smart contract) functionality.
          </MilesData>
          <MilesData style={{ marginRight: "100px" }}>
            Trade over-the counter (OTC) crypto assets and tokens P2P via an
            integrated ESC (escrow smart contract) functionality.
          </MilesData>
        </div>
        <Inner>
          <Image src={VV} alt="milestone-image" />
        </Inner>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <MilesData style={{ marginLeft: "90px" }}>
            Trade over-the counter (OTC) crypto assets and tokens P2P via an
            integrated ESC (escrow smart contract) functionality.
          </MilesData>
          <MilesData>
            Trade over-the counter (OTC) crypto assets and tokens P2P via an
            integrated ESC (escrow smart contract) functionality.
          </MilesData>
          <MilesData>
            Trade over-the counter (OTC) crypto assets and tokens P2P via an
            integrated ESC (escrow smart contract) functionality.
          </MilesData>
        </div>
      </Main>
    </>
  );
};
export default Milestones;
