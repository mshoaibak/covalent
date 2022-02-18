import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretUp } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

const ScrollButton = styled.div`
  position: fixed;
  width: 100%;
  left: 90%;
  bottom: 65px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: #ff9e44;
  @media (max-width: 912px) {
    left: 85%;
  }
`;

const ScrollBtn = () => {
  const [show, setShow] = useState(false);
  const handleVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setShow(true);
    } else if (scrolled <= 300) {
      setShow(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  typeof window !== "undefined" &&
    window.addEventListener("scroll", handleVisibility);

  return (
    <>
      {show && (
        <ScrollButton>
          <FontAwesomeIcon icon={faSquareCaretUp} onClick={scrollToTop} />
        </ScrollButton>
      )}
    </>
  );
};
export default ScrollBtn;
