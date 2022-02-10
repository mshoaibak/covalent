import styles from "../styles/FAQs.module.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faqsData } from "../assets/data/faqsData";
import {
  faMinus,
  faShevron,
  faDown,
  faShevrondown,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

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
      <div className={styles.main}>
        <h1 className={styles.faqHeading}>Frequently asked questions</h1>
        <div className={styles.faqs}>
          <div className={styles.faq}>
            <div className={styles.question} onClick={handleAnswer1}>
              <p className={styles.que}>What we offer</p>
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{
                  fontSize: 20,
                  color: "#ff9e44",
                  margin: "auto 0",
                }}
              />
            </div>
            <p className={show1 ? styles.showAnswer : styles.hideAnswer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
          <div className={styles.faq}>
            <div className={styles.question} onClick={handleAnswer2}>
              <p className={styles.que}>
                How is covalent different from others
              </p>
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{
                  fontSize: 20,
                  color: "#ff9e44",
                  margin: "auto 0",
                }}
              />
            </div>

            <p className={show2 ? styles.showAnswer : styles.hideAnswer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
          <div className={styles.faq}>
            <div className={styles.question} onClick={handleAnswer3}>
              <p className={styles.que}>
                How is covalent different from others
              </p>
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{
                  fontSize: 20,
                  color: "#ff9e44",
                  margin: "auto 0",
                }}
              />
            </div>

            <p className={show3 ? styles.showAnswer : styles.hideAnswer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default FAQs;
