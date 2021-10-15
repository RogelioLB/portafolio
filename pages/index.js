import { useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import Profile from "../components/Profile";
import Services from "../components/Services";
import Head from "next/head";
import Projects from "../components/Projects";
import Social from "../components/Social";
import Contact from "../components/Contact";

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
        <title>Rogelio López | FullStackJS Developer</title>
      </Head>
      <Profile refs={{ card, svg }} />
      <div className="container" style={{ marginTop: height }}>
        <Card title="Services" id="services">
          <Services />
        </Card>
        <Card title="Projects" id="projects">
          <Projects />
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
          }
          div.container > :global(.card) {
            margin-bottom:20px;
          }
        }
      `}</style>
      <NavBar />
    </>
  );
}
