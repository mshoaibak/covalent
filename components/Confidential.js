import styles from "../styles/Confidential.module.css";
import { Row, Col, Container } from "react-bootstrap";
import { confidential } from "../assets/data/confidential";
import Image from "next/image";
import styled from "styled-components";
import { keyframes } from "styled-components";
const Main = styled.div`
  //   @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200&family=Open+Sans:wght@300&family=Roboto:wght@100&display=swap");

  /* height: 100vh; */
  width: 100%;
  background: linear-gradient(to top, #3b2349, black);
  padding-top: 10px;
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
`;
const H6 = styled.h6`
  text-align: center;
`;
const ContentParagraph = styled.div`
  //   display: flex;
  //   justify-content: center;
  //   text-align: center;
  text-align: center;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  animation-name: ${ImageAnimation};
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
`;
const Confidential = () => {
  return (
    <>
      <Main>
        <UpperDiv>
          <H1>
            Your Conversations <br />
            <SpanHead>Stay Confidential</SpanHead>
          </H1>
          <P>
            No centralized data storage. No privacy issues. No censorship.
            <br />
            You’re the only one who’s able to access and manage your messages.
          </P>
        </UpperDiv>
        <div>
          <Container>
            <Row className="d-flex justify-content-center">
              {confidential.map((val) => {
                return (
                  <>
                    <Col sm="12" md="3" className="mb-5" id="cols">
                      <ImageWrapper>
                        <Image src={val.image} alt="image" />
                      </ImageWrapper>
                      <H6>{val.heading}</H6>
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
