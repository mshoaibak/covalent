import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import Team from "../components/Team";
import FAQs from "../components/FAQs";
import Confidential from "../components/Confidential";
import Roadmap from "../components/Roadmap";
import Footer from "../components/Footer";
import Milestones from "../components/Milestones";
import Coverage from "../components/Coverage";
import Mention from "../components/Mention";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Covalent</title>
        <meta name="description" content="covalent home" />
        <link rel="icon" href="/logoo.png" />
      </Head>

      <main>
        <Hero />
        {/* <Navbar /> */}
        <FAQs />
        <Coverage />
        <Team />

        <Confidential />
        <Mention />

        <Milestones />
        {/* <Roadmap /> */}
        <Footer />
      </main>
    </div>
  );
}
