import { Row, Col, Container } from "react-bootstrap";
import styles from "../styles/Footer.module.css";
import {
  faPhone,
  faEnvelope,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styled from "styled-components";
const Main = styled.div`
  width: 100%;

  background: linear-gradient(to top, #3b2349, black);
  padding-top: 10px;
  left: 0;
  color: aliceblue;
  font-family: "Manrope", sans-serif;
  font-family: "Open Sans", sans-serif;
  font-family: "Roboto", sans-serif;
`;
const UPFooter = styled.div`
  height: 30vh;
  border-bottom: 1px solid #ff9e44;
`;

const DownFooter = styled.div`
  height: 10vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
`;
const Anchor = styled.a`
  text-decoration: none;
  color: #ff9e44;
  &:hover {
    color: #ff9e44;
  }
`;

const H5 = styled.h5`
  color: #ff9e44;
`;
const Footer = () => {
  return (
    <>
      <Main>
        <UPFooter>
          <Container>
            <Row style={{ marginTop: "100px" }}>
              <Col sm="12" md="4">
                <div>
                  <H5>Contact Us</H5>
                  <div styles={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ marginBottom: "10px" }}>
                      <FontAwesomeIcon
                        icon={faPhone}
                        style={{
                          fontSize: 20,
                          color: "#ff9e44",
                          margin: "auto 5",
                        }}
                      />
                      +929999999
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        style={{
                          fontSize: 20,
                          color: "#ff9e44",
                          margin: "auto 5",
                        }}
                      />
                      dummyemail@dummy.com
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm="12" md="4">
                <H5>Information</H5>
                <Links>
                  <Link href="/about">
                    <Anchor> About Us</Anchor>
                  </Link>
                  <Link href="/">
                    <Anchor> More Search</Anchor>
                  </Link>
                  {/* <Link href="/">
                    <Anchor> Blog</Anchor>
                  </Link> */}
                </Links>
              </Col>
              {/* <Col sm="12" md="4">
                <H5>Follow</H5>
                <Links>
                  <Link href="/">
                    <Anchor> Twitter</Anchor>
                  </Link>
                  <Link href="/">
                    <Anchor> Discord</Anchor>
                  </Link>
                  <Link href="/">
                    <Anchor> Facebook</Anchor>
                  </Link>
                </Links>
              </Col> */}
            </Row>
          </Container>
        </UPFooter>
        {/* <hr /> */}
        <DownFooter>Copyrights © 2022 Covalent</DownFooter>
      </Main>
    </>
  );
};
export default Footer;
