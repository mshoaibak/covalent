// // import styles from "../styles/FAQs.module.css";
// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faqsData } from "../assets/data/faqsData";
// import styled from "styled-components";
// import { keyframes } from "styled-components";
// import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

// const fadeAnimation = keyframes`
// 0% {
//   transform: translateY(-20px);
// }

// 100% {
//   transform: translateY(0px);
// }
// `;

// const Main = styled.div`
//   //   @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200&family=Open+Sans:wght@300&family=Roboto:wght@100&display=swap");

//   min-height: 70vh;
//   width: 100%;
//   background: linear-gradient(to top, black, #3b2349);
//   padding-top: 10px;
//   color: white;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   font-family: "Manrope", sans-serif;
//   font-family: "Open Sans", sans-serif;
//   font-family: "Roboto", sans-serif;
// `;

// const H1 = styled.h1`
//   text-align: center;
//   font-size: 3rem;
//   letter-spacing: 1px;
//   margin-bottom: 4rem;
// `;

// const Faqs = styled.div`
//   width: 80%;

//   margin: 0 auto;
// `;
// const Question = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: 10px 20px;
//   cursor: pointer;
// `;
// const QP = styled.p`
//   font-size: 1.2rem;
//   font-weight: bold;
// `;
// const AP = styled.p`
//   display: ${({ show }) => (show ? "block" : "none")};
//   padding: 0 20px;
//   animation: ${fadeAnimation};
//   animation-duration: 0.2s;
//   animation-timing-function: ease-in;
//   font-size: 1rem;
//   color: #ff9e44;
//   font-size: 1rem;
// `;
// const FAQs = () => {
//   // const [show1, setShow1] = useState(0);
//   // const [show2, setShow2] = useState(false);
//   // const [show3, setShow3] = useState(false);
//   const [show, setShow] = useState([]);

//   const handleAnswer1 = (ind) => {
//     show1 ? setShow1(null) : setShow1(ind);
//   };
//   const handleAnswer2 = () => {
//     show2 ? setShow2(false) : setShow2(true);
//   };
//   const handleAnswer3 = () => {
//     show3 ? setShow3(false) : setShow3(true);
//   };
//   const handleAnswer = (v) => {
//     console.log(v);

//     // if (show.includes(v)) {

//     //   let fill = show.filter((kl) => {
//     //     return k != v;
//     //   });
//     //   setShow(fill);
//     // } else {
//     //   setShow(...show, v);
//     // }
//     show === v ? setShow(0) : setShow(v);
//   };
//   // console.log(show);
//   return (
//     <>
//       <Main>
//         <H1>Frequently asked questions</H1>
//         <Faqs>
//           {faqsData.map((val, indx) => {
//             return (
//               <>
//                 <div key={indx}>
//                   <Question
//                     onClick={() => {
//                       handleAnswer(val.id);
//                     }}
//                   >
//                     <QP>{val.question}</QP>
//                     <FontAwesomeIcon
//                       icon={faCaretDown}
//                       style={{
//                         fontSize: 20,
//                         color: "#ff9e44",
//                         margin: "auto 0",
//                       }}
//                     />
//                   </Question>
//                   {show === val.id && <AP show={show}>{val.answer}</AP>}
//                   {/* {show.indexOf(val.id !== -1) && (
//                     <AP show={show}>{val.answer}</AP>
//                   )} */}
//                 </div>
//               </>
//             );
//           })}

//           {/* <div>
//             <Question onClick={handleAnswer3}>
//               <QP>How is covalent different from others</QP>
//               <FontAwesomeIcon
//                 icon={faCaretDown}
//                 style={{
//                   fontSize: 20,
//                   color: "#ff9e44",
//                   margin: "auto 0",
//                 }}
//               />
//             </Question>

//             <AP show3={show3}>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam,
//             </AP>
//           </div> */}
//         </Faqs>
//       </Main>
//     </>
//   );
// };
// export default FAQs;
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
  min-height: 70vh;
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
  // border: 1px solid yellow;
`;

const H1 = styled.h1`
  text-align: center;
  font-size: 3rem;
  letter-spacing: 1px;
  margin-bottom: 4rem;
  // font-weight: bold;
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
  // const [show1, setShow1] = useState(0);
  // const [show2, setShow2] = useState(false);
  // const [show3, setShow3] = useState(false);
  const [show, setShow] = useState(0);

  const handleAnswer1 = (ind) => {
    show1 ? setShow1(null) : setShow1(ind);
  };
  const handleAnswer2 = () => {
    show2 ? setShow2(false) : setShow2(true);
  };
  const handleAnswer3 = () => {
    show3 ? setShow3(false) : setShow3(true);
  };
  const handleAnswer = (v) => {
    console.log(v);
    show === v ? setShow(0) : setShow(v);
  };
  // console.log(show);
  return (
    <>
      <Main>
        <H1>FREQUENTLY ASKED QUESTIONS</H1>
        <Faqs>
          {faqsData.map((val, indx) => {
            return (
              <>
                <div key={indx}>
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
              </>
            );
          })}

          {/* <div>
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
            <AP show3={show3}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </AP>
          </div> */}
        </Faqs>
      </Main>
    </>
  );
};
export default FAQs;
