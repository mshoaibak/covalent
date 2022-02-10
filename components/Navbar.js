import styles from "../styles/Navbar.module.css";
import logo from "../assets/images/logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [yes, setYes] = useState(false);
  const handle = () => {
    yes ? setYes(false) : setYes(true);
  };

  return (
    <>
      <div className={styles.navMain}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" />
        </div>
        <div className={styles.listDiv}>
          <ul className={yes ? styles.uul : styles.ul}>
            <li className={styles.listBorder}>Pitch deck</li>
            <li className={styles.listBorder}>Core Features</li>
            <li className={styles.listBorder}> Comparison</li>
            <li className={styles.listBorder}>Team</li>
            <li className={styles.listBorder}>Advisors</li>
            {/* <li onClick={handle}>
              <FontAwesomeIcon icon={faBars} />
            </li> */}
          </ul>
        </div>
        <div className={styles.toggle}>
          <FontAwesomeIcon onClick={handle} icon={faBars} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
