import { useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import Profile from "../components/Profile";
import Services from "../components/Services";
import Head from "next/head";
import Projects from "../components/ProjectsContainer";
import Contact from "../components/Contact";
import SkillsContainer from "../components/SkillsContainer";

export default function Home() {
  const [height, setHeight] = useState(null);
  const card = useRef();
  const svg = useRef();

  useEffect(() => {
    setHeight(card.current.clientHeight - svg.current.clientHeight - 4);
    window.addEventListener("resize", () => {
      const top = card.current.clientHeight - svg.current.clientHeight - 4;
      setHeight(top);
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content="Hello I'm an FullStackJS Developer, specialized in FrontEnd with React or NextJS, Want to know in what i have worked? Well this is my portfolio, where i show you my projects."></meta>
        <meta name="keywords" contnet="fullstack,js,developer,desarrollador,javascript,rogelio,Rogelio,react,nextjs,next,fullstackjs,github"></meta>
        <title>Rogelio López | FullStackJS Developer</title>
      </Head>
      <NavBar />
      <Profile refs={{ card, svg }} />
      <div className="container" style={{ marginTop: height }}>
        <Card title="Services" id="services">
          <Services />
        </Card>
        <Card title="Projects" id="projects">
          <Projects />
        </Card>
        <Card title="Skills" id="projects">
          <SkillsContainer />
        </Card>
        <Card title="Get in touch with me" id="contact">
          <Contact />
        </Card>
      </div>
      <style jsx>{`
        div.container{
          margin-bottom:150px;
        }
        @media (min-width: 690px) {
          div.container {
            padding: 20px;
            margin:0;
          }
          div.container > :global(.card) {
            margin-bottom:20px;
          }
        }
      `}</style>
    </>
  );
}
