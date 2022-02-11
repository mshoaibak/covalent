import Confidential from "./Confidential";
import FAQs from "./FAQs";
import Footer from "./Footer";
import Hero from "./Hero";
import Roadmap from "./Roadmap";
import Team from "./Team";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <>
      <Hero />
      {/* <Navbar /> */}
      <Team />
      <FAQs />
      <Confidential />
      <Roadmap />
      <Footer />
      {/* {children} */}
    </>
  );
};

export default Layout;
