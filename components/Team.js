import Image from "next/image";
import teamImg from "../assets/images/fakebgImage.png";
// import styles from "../styles/Team.module.css";

import styled from "styled-components";

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  color: #ff9e44;
  font-size: 3rem;
  letter-spacing: 1px;
  margin: 2rem auto;
`;

const Main = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200&family=Open+Sans:wght@300&family=Roboto:wght@100&display=swap");

  width: 100%;
  background: linear-gradient(to top, #3b2349, black);
  padding-top: 10px;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: "Manrope", sans-serif;
  font-family: "Open Sans", sans-serif;
  font-family: "Roboto", sans-serif;
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
  border: 1px solid #ff9e44;
  width: 300px;
  height: 300px;
  /* object-fit: contain; */
  border-radius: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;
const Team = () => {
  return (
    <>
      <Main>
        <H1>The Team</H1>
        <TheTeam>
          <Person>
            <Image height={200} width={200} src={teamImg} alt="team image" />
          </Person>
          <Person>
            <Image height={200} width={200} src={teamImg} alt="team image" />
          </Person>
          <Person>
            <Image height={200} width={200} src={teamImg} alt="team image" />
          </Person>
        </TheTeam>
      </Main>
    </>
  );
};

export default Team;
