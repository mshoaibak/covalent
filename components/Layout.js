import Confidential from "./Confidential";
import FAQs from "./FAQs";
import Footer from "./Footer";
import Hero from "./Hero";
import Roadmap from "./Roadmap";
import Team from "./Team";

const Layout = ({ children }) => {
  return (
    <>
      <Hero />
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
