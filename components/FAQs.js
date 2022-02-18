import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faqsData } from "../assets/data/faqsData";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const fadeAnimation = keyframes`
0% {
  transform: translateY(-20px);
}
100% {
  transform: translateY(0px);
}
`;

const Main = styled.div`
  //   @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200&family=Open+Sans:wght@300&family=Roboto:wght@100&display=swap");
  // min-height: 70vh;
  width: 100%;
  background: linear-gradient(to top, #3b2349, black);
  padding: 20px 0;
  margin: -15px 0;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: "Manrope", sans-serif;
  font-family: "Open Sans", sans-serif;
  font-family: "Roboto", sans-serif;
  outline: 1px solid yellow;
  @media (max-height: 667px) {
    margin-top: -2px;
  }
`;

const H1 = styled.h1`
  text-align: center;
  outline: 1px solid red;

  font-size: 3rem;
  letter-spacing: 1px;
  margin: 4rem 0;
  // font-weight: bold;
  @media (max-width: 280px) {
    letter-spacing: 0;
    font-size: 2rem;
  }
`;

const Faqs = styled.div`
  width: 80%;
  margin: 0 auto;
  outline: 1px solid white;
`;
const Question = styled.div`
  display: flex;
  border: 1px solid green;

  justify-content: space-between;
  padding: 10px 20px;
  cursor: pointer;
`;
const QP = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  border: 1px solid blue;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const AP = styled.p`
  display: ${({ show }) => (show ? "block" : "none")};
  padding: 0 20px;
  animation: ${fadeAnimation};
  animation-duration: 0.2s;
  animation-timing-function: ease-in;
  font-size: 1rem;
  color: #ff9e44;
  font-size: 1rem;
`;
const FAQs = () => {
  const [show, setShow] = useState(0);

  const handleAnswer = (v) => {
    show === v ? setShow(0) : setShow(v);
  };

  return (
    <>
      <Main id="faqs">
        <H1>FAQs</H1>
        <Faqs>
          {faqsData.map((val, indx) => {
            return (
              <div key={val.id}>
                <Question
                  onClick={() => {
                    handleAnswer(val.id);
                  }}
                >
                  <QP>{val.question}</QP>
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    style={{
                      fontSize: 20,
                      color: "#ff9e44",
                      margin: "auto 0",
                    }}
                  />
                </Question>
                {show === val.id ? <AP show={show}>{val.answer}</AP> : ""}
              </div>
            );
          })}
        </Faqs>
      </Main>
    </>
  );
};
export default FAQs;
