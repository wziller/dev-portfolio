
import Frameworks from "./components/Frameworks/Frameworks";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <Biography/>
      <Frameworks/>
      <Projects/>
      <Resume/>
      <Contact/>
    </main>
  );
}
