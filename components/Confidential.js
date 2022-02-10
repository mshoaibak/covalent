import styles from "../styles/Confidential.module.css";
import { Row, Col, Container } from "react-bootstrap";
import { confidential } from "../assets/data/confidential";
import Image from "next/image";
const Confidential = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.upperDiv}>
          <h1 className={styles.h1}>
            Your Conversations <br />
            <span className={styles.spanHead}>Stay Confidential</span>
          </h1>
          <p className={styles.p}>
            No centralized data storage. No privacy issues. No censorship.
            <br />
            You’re the only one who’s able to access and manage your messages.
          </p>
        </div>
        <div className={styles.lowerDiv}>
          <Container>
            <Row className="d-flex justify-content-center">
              {confidential.map((val) => {
                return (
                  <>
                    <Col sm="12" md="3" className="mb-5" id="cols">
                      <div className={styles.imageWrapper}>
                        <Image src={val.image} alt="image" />
                      </div>
                      <h6 className={styles.h6}>{val.heading}</h6>
                      <div className={styles.contentParagraph}>{val.info}</div>
                    </Col>
                  </>
                );
              })}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Confidential;
