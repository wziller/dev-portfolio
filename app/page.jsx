import Frameworks from "./components/Frameworks/Frameworks";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Biography from "./components/Biography/Biography";
import Resume from "./components/Resume/Resume";
import SiteHero from "./components/SiteHeader/SiteHero";
import Footer from "./components/Footer/Footer";
import styles from "./page.module.css";
import dynamic from "next/dynamic";
import SiteHeader from "./components/SiteHeader/SiteHero";
const ContactPage = dynamic(() => import("../app/components/Contact/Contact"), { ssr: false });
export default function Home() {
  return (
    <main className={styles.main}>
      <div id="body-content-wrapper">
        <div if="navbar-wrapper">
          <Navbar />
        </div>
        <div id="content-wrapper">
         <SiteHeader/>
          <Biography />
          <Frameworks />
          <Projects />
          <Resume />
          <ContactPage />
          <Footer/>
        </div>
      </div>
    </main>
  );
}
