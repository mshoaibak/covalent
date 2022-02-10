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

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.upFooter}>
          <Container>
            <Row>
              <Col sm="12" md="4">
                <div>
                  {/* <h2>Covalent</h2>
                  <h5 className={styles.h5}>About Us</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </p> */}
                </div>
                <div>
                  <h5 className={styles.h5}>Contact Us</h5>
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
                <h5 className={styles.h5}>Information</h5>
                <div className={styles.links}>
                  <Link href="/about">
                    <a className={styles.link}> About Us</a>
                  </Link>
                  <Link href="/">
                    <a className={styles.link}> More Search</a>
                  </Link>
                  <Link href="/">
                    <a className={styles.link}> Blog</a>
                  </Link>
                </div>
              </Col>
              <Col sm="12" md="4">
                <h5 className={styles.h5}>Follow</h5>
                <div className={styles.links}>
                  <Link href="/">
                    <a className={styles.link}> Twitter</a>
                  </Link>
                  <Link href="/">
                    <a className={styles.link}> Discord</a>
                  </Link>
                  <Link href="/">
                    <a className={styles.link}> Facebook</a>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <hr /> */}
        <div className={styles.downFooter}>Copyrights © 2022 Covalent</div>
      </div>
    </>
  );
};
export default Footer;
