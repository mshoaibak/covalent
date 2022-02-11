import styles from "../styles/FAQs.module.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faqsData } from "../assets/data/faqsData";
import styled from "styled-components";
import {
  faMinus,
  faShevron,
  faDown,
  faShevrondown,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

const Main = styled.div`
  min-height: 70vh;
  width: 100%;
  background: linear-gradient(to top, black, #3b2349);
  padding-top: 10px;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: "Manrope", sans-serif;
  font-family: "Open Sans", sans-serif;
  font-family: "Roboto", sans-serif;
`;

const H1 = styled.h1`
  text-align: center;
  font-size: 3rem;
  letter-spacing: 1px;
  margin-bottom: 4rem;
`;

const Faqs = styled.div`
  width: 80%;

  margin: 0 auto;
`;
const Question = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  cursor: pointer;
`;
const QP = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;
const AP = styled.p`
  font-size: 1rem;
`;
const FAQs = () => {
  const [show1, setShow1] = useState(0);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const handleAnswer1 = (ind) => {
    show1 ? setShow1(null) : setShow1(ind);
  };
  const handleAnswer2 = () => {
    show2 ? setShow2(false) : setShow2(true);
  };
  const handleAnswer3 = () => {
    show3 ? setShow3(false) : setShow3(true);
  };

  return (
    <>
      <Main>
        <H1>Frequently asked questions</H1>
        <Faqs>
          <div className={styles.faq}>
            <Question onClick={handleAnswer1}>
              <QP>What we offer</QP>
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{
                  fontSize: 20,
                  color: "#ff9e44",
                  margin: "auto 0",
                }}
              />
            </Question>
            <AP className={show1 ? styles.showAnswer : styles.hideAnswer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </AP>
          </div>
          <div>
            <Question className={styles.question} onClick={handleAnswer2}>
              <QP>How is covalent different from others</QP>
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{
                  fontSize: 20,
                  color: "#ff9e44",
                  margin: "auto 0",
                }}
              />
            </Question>

            <AP className={show2 ? styles.showAnswer : styles.hideAnswer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </AP>
          </div>
          <div>
            <Question onClick={handleAnswer3}>
              <QP>How is covalent different from others</QP>
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{
                  fontSize: 20,
                  color: "#ff9e44",
                  margin: "auto 0",
                }}
              />
            </Question>

            <AP className={show3 ? styles.showAnswer : styles.hideAnswer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </AP>
          </div>
        </Faqs>
      </Main>
    </>
  );
};
export default FAQs;
