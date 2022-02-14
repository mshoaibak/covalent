import styled from "styled-components";
const Main = styled.div`
  //   @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200&family=Open+Sans:wght@300&family=Roboto:wght@100&display=swap");

  background-color: #3b2349;
  background-image: linear-gradient(to top, black, #3b2349);

  height: 100vh;
  /* border: 1px solid yellow; */
  text-align: center;
  color: white;

  font-family: "Manrope", sans-serif;
  font-family: "Open Sans", sans-serif;
  font-family: "Roboto", sans-serif;
  @media (max-width: 900px) {
    // height: auto;
  }
`;
const H1 = styled.h1`
  text-align: center;
  padding: 10px 0;
  font-size: 3rem;
  color: #ff9e44;
  font-weight: bold;
  letter-spacing: 1px;
`;
const Maps = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Inner = styled.div`
  width: 15%;
  height: 80%;

  border-left: 2px dashed #ff9e44;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  @media (max-width: 800) {
    width: 29%;
  }
  @media (max-width: 800px) {
    width: 25%;
  }
`;

const Roadmap = () => {
  return (
    <>
      <Main>
        <H1>Roadmap</H1>
        <Maps>
          <Inner>
            <h4>Q4</h4>
            <p>Architecture Design Beta Testing</p>
            <p>Implementation of network nodes</p>
            <p>Private Sale</p>
          </Inner>
          <Inner>
            <h4>Q4</h4>
            <p>Architecture Design Beta Testing</p>
            <p>Implementation of network nodes</p>
            <p>Private Sale</p>
          </Inner>
          <Inner>
            <h4>Q4</h4>
            <p>Architecture Design Beta Testing</p>
            <p>Implementation of network nodes</p>
            <p>Private Sale</p>
          </Inner>
          <Inner>
            <h4>Q4</h4>
            <p>Architecture Design Beta Testing</p>
            <p>Implementation of network nodes</p>
            <p>Private Sale</p>
          </Inner>
        </Maps>
      </Main>
    </>
  );
};
export default Roadmap;
