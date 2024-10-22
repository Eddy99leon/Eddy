import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return(
    <div>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <div className="container">
        {t("welcome")}
      </div>
    </div>
  ) 
};

export default Home;
