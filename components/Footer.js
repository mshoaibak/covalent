import { Row, Col, Container } from "react-bootstrap";
// import styles from "../styles/Footer.module.css";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/logo.png";
import {
  faTwitter,
  faFacebook,
  faDiscord,
  faInstagram,
  faReddit,
  faSnapchat,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
const Main = styled.div`
  width: 100%;
  // min-height: 100vh;
  //   @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200&family=Open+Sans:wght@300&family=Roboto:wght@100&display=swap");

  background: linear-gradient(to top, black, #3b2349);
  padding-top: 10px;
  color: aliceblue;
  font-family: "Manrope", sans-serif;
  font-family: "Open Sans", sans-serif;
  font-family: "Roboto", sans-serif;
`;
const UPFooter = styled.div`
  border-bottom: 1px solid #ff9e44;
  padding: 48px 16px;
  margin: auto;
`;

const DownFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;
const Logo = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  @media (max-width: 900px) {
    height: 50px;
    width: 40%;
  }
  @media (max-width: 450px) {
    height: 50px;
    width: 60%;
  }
`;
const Links = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
  color: #ff9e44;
`;
const Anchor = styled.a`
  text-decoration: none;
  color: #ff9e44;
  cursor: pointer;
  display: inline-block;
  width: fit-content;

  &:hover {
    color: ${({ color }) => (color ? color : " #ff9e44")};
    trnasform: translatey(-5px);
  }
  @media (max-width: 280px) {
    font-size: 10px;
  }
`;

const H5 = styled.h5`
  color: white;
`;
const Footer = () => {
  return (
    <>
      <Main>
        <UPFooter>
          <Container>
            <Row style={{ marginTop: "100px" }}>
              <Col xs="12">
                <Logo>
                  <Image src={logo} alt="logo" />
                </Logo>
              </Col>
              <Col xs="7" sm="6" md="4" className="mt-5">
                <div>
                  <H5>Contact Us</H5>
                  <div styles={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ marginBottom: "10px", color: "#ff9e44" }}>
                      <Anchor>+929999999</Anchor>
                    </div>
                    <div style={{ color: "#ff9e44" }}>
                      <Anchor>dummy@dummy.com</Anchor>
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs="5" sm="6" md="4" className="mt-5">
                <H5>Information</H5>
                <Links>
                  <Anchor>About Us</Anchor>
                  <Anchor>More Search</Anchor>
                </Links>
              </Col>
              <Col xs="7" sm="6" md="4" className="mt-5">
                <H5>Products</H5>
                <Links>
                  <Anchor href="/assets/litepaper.pdf">Pitch Deck</Anchor>
                  <Anchor href="#corefeatures">Core Featues</Anchor>
                  <Anchor>Comparisons</Anchor>
                  <Anchor href="#team">Venture</Anchor>
                  <Anchor>Advisors</Anchor>
                </Links>
              </Col>
              <Col xs="5" sm="6" md="4" className="mt-5">
                <H5>Services</H5>
                <Links>
                  <Anchor href="#faqs">FAQ</Anchor>
                  <Anchor>support Center</Anchor>
                </Links>
              </Col>
              <Col xs="5" sm="6" className="mt-5">
                <H5>Legal</H5>
                <Links>
                  <Anchor>Terms Of Use</Anchor>
                  <Anchor>Privacy Policy</Anchor>
                </Links>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col sm="6" md="3" className="mt-5">
                <H5>Community</H5>
                <Row className="mb-5">
                  <Col sm="12" md="8" lg="6">
                    <Anchor
                      className="mr-2"
                      color="#00acee"
                      href="https://twitter.com"
                    >
                      <FontAwesomeIcon
                        icon={faTwitter}
                        style={{
                          fontSize: 20,
                          margin: "auto 5",
                        }}
                      />
                    </Anchor>
                    <Anchor
                      className="mr-2"
                      color="#5865F2"
                      href="https://discord.com"
                    >
                      <FontAwesomeIcon
                        icon={faDiscord}
                        style={{
                          fontSize: 20,
                          margin: "auto 5",
                        }}
                      />
                    </Anchor>
                    <Anchor
                      className="mr-2"
                      color="#3b5998"
                      href="https://facebook.com"
                    >
                      <FontAwesomeIcon
                        icon={faFacebook}
                        style={{
                          fontSize: 20,
                          margin: "auto 5",
                        }}
                      />
                    </Anchor>

                    <Anchor
                      className="mr-2"
                      color="#FF4500"
                      href="https://reddit.com"
                    >
                      <FontAwesomeIcon
                        icon={faReddit}
                        style={{
                          fontSize: 20,
                          margin: "auto 5",
                        }}
                      />
                    </Anchor>
                    <Anchor
                      className="mr-2"
                      color="#FFFC00"
                      href="https://snapchat.com"
                    >
                      <FontAwesomeIcon
                        icon={faSnapchat}
                        style={{
                          fontSize: 20,
                          margin: "auto 5",
                        }}
                      />
                    </Anchor>
                    <Anchor
                      className="mr-2"
                      color="#FF0000"
                      href="https://snapchat.com"
                    >
                      <FontAwesomeIcon
                        icon={faYoutube}
                        style={{
                          fontSize: 20,
                          margin: "auto 5",
                        }}
                      />
                    </Anchor>
                    <Anchor
                      className="mr-2"
                      color="#0077b5"
                      href="https://linkedin.com"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        style={{
                          fontSize: 20,
                          margin: "auto 5",
                        }}
                      />
                    </Anchor>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </UPFooter>
        <DownFooter>Copyrights © 2022 Covalent</DownFooter>
      </Main>
    </>
  );
};
export default Footer;
