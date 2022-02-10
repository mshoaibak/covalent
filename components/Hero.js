import styles from "../styles/Hero.module.css";
import Navbar from "./Navbar";
import rightImage from "../assets/images/layers.svg";
import covalent from "../assets/images/covalent.png";
import covalent1 from "../assets/images/covalent1.png";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <div className={styles.main}>
        <Navbar />
        {/* sdsdssdsdsdsdds */}
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <div className={styles.heroHeading}>
              <h2>
                Litepaper Whitepaper Functionality Comparison Team Revolutionary
                Secure Messaging & Trading Dapp powered by Solana
              </h2>
            </div>
            <div className={styles.buttonsDiv}>
              <button className={styles.btn1}>Join</button>
              <button className={styles.btn2}>LitePaper</button>
            </div>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.bannerImg}>
              <Image
                className={styles.imgg}
                src={covalent1}
                alt="right image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
