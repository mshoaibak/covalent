import Image from "next/image";
import teamImg from "../assets/images/fakebgImage.png";
import styles from "../styles/Team.module.css";

const Team = () => {
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.teamHeading}>The Team</h1>
        <div className={styles.theTeam}>
          <div className={styles.teamDiv}>
            <Image height={300} width={350} src={teamImg} alt="team image" />
          </div>
          <div className={styles.teamDiv}>
            <Image height={300} width={350} src={teamImg} alt="team image" />
          </div>
          <div className={styles.teamDiv}>
            <Image height={300} width={350} src={teamImg} alt="team image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
