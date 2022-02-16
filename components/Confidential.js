// import styles from "../styles/Confidential.module.css";
import { Row, Col, Container } from "react-bootstrap";
import { confidential } from "../assets/data/confidential";
import Image from "next/image";
import styled from "styled-components";
import { keyframes } from "styled-components";
const Main = styled.div`
  //   @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200&family=Open+Sans:wght@300&family=Roboto:wght@100&display=swap");

  width: 100%;
  background: linear-gradient(to top, black, #3b2349);
  padding-top: 10px;
  margin: -1px 0;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: "Manrope", sans-serif;
  font-family: "Open Sans", sans-serif;
  font-family: "Roboto", sans-serif;
`;

const ImageAnimation = keyframes`
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
const UpperDiv = styled.div`
  margin-bottom: 5rem;
  margin-top: 5rem;
`;
const H1 = styled.h1`
  text-align: center;
  margin-bottom: 10px;
  font-size: 3rem;
`;
const SpanHead = styled.span`
  color: #ff9e44;
`;
const P = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`;
const H4 = styled.h4`
  text-align: center;
  color: #ff9e44;
`;
const ContentParagraph = styled.div`
  text-align: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    // width: 70%;
  }
  @media (max-width: 667px) {
    width: 70%;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  animation-name: ${ImageAnimation};
  filter: opacity(0.5) drop-shadow(0 0 0 gold);

  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
`;
const Confidential = () => {
  return (
    <>
      <Main id="corefeatures">
        <UpperDiv>
          <H1>
            CORE <br />
            <SpanHead>FEATURES</SpanHead>
          </H1>
          <P>
            No centralized data storage. No privacy issues. No censorship.
            <br />
            You’re the only one who’s able to access and manage your messages.
          </P>
        </UpperDiv>
        <div>
          <Container>
            <Row className="">
              {confidential.map((val, indx) => {
                return (
                  <>
                    <Col key={indx} sm="12" md="4" className="mb-5" id="cols">
                      <ImageWrapper>
                        <Image
                          width={70}
                          height={70}
                          src={val.image}
                          alt="image"
                        />
                      </ImageWrapper>
                      <H4>{val.heading}</H4>
                      <ContentParagraph>{val.info}</ContentParagraph>
                    </Col>
                  </>
                );
              })}
            </Row>
          </Container>
        </div>
      </Main>
    </>
  );
};

export default Confidential;
