import Image from "next/image";
import teamImg from "../assets/images/fakebgImage.png";
import haider from "../assets/images/haider.png";
import ikram from "../assets/images/ikram.png";
import auth from "../assets/images/auth.png";

// import styles from "../styles/Team.module.css";

import styled from "styled-components";

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  color: #ff9e44;
  font-size: 3rem;
  letter-spacing: 1px;
  margin: 2rem auto;
  // font-weight: bold;
`;

const Main = styled.div`
  //   @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200&family=Open+Sans:wght@300&family=Roboto:wght@100&display=swap");

  width: 100%;
  height: 100vh;
  background: linear-gradient(to top, black, #3b2349);
  padding-top: 10px;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: "Manrope", sans-serif;
  font-family: "Open Sans", sans-serif;
  font-family: "Roboto", sans-serif;
  // border: 1px solid white;
`;

const TheTeam = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  margin-bottom: 7rem;
  @media (max-width: 900px) {
    flex-direction: column;
    margin:top:3rem
  }
`;

const Person = styled.div`
  // border: 1px solid #ff9e44;
  width: 270px;
  height: 270px;
  max-width: 100%;
  /* object-fit: contain; */
  // border-radius: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  contain: content;
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;
const Team = () => {
  return (
    <>
      <Main id="team">
        <H1>VENTURE</H1>
        <TheTeam>
          <Person>
            <Image height={200} width={200} src={haider} alt="team image" />
            GHULAM HAIDER
          </Person>

          <Person>
            <Image height={200} width={200} src={ikram} alt="team image" />
            Dr. IKRAM ASHRAF
          </Person>
          <Person>
            <Image height={200} width={200} src={auth} alt="team image" />
            AUTHORNATE
          </Person>
        </TheTeam>
      </Main>
    </>
  );
};

export default Team;
