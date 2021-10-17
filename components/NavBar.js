import React, { useRef } from "react";
import Link from "next/link";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faUser,faCodeBranch, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useFocus } from "../hooks/useFocus";

const NavBar = () => {
  const home = useRef();
  const services = useRef();
  const projects = useRef();
  const contact = useRef();

  useFocus([home, services,projects,contact]);

  return (
    <nav>
      <Link href="#home">
        <a ref={home} className="home active">
          <FontAwesomeIcon icon={faUser} />
          <h3>Home</h3>
        </a>
      </Link>
      <Link href="#services">
        <a ref={services} className="services">
          <FontAwesomeIcon icon={faBriefcase} />
          <h3>Services</h3>
        </a>
      </Link>
      <Link href="#projects">
          <a ref={projects} className="projects">
              <FontAwesomeIcon icon={faCodeBranch} />
              <h3>Projects</h3>
          </a>
      </Link>
      <Link href="#contact">
        <a ref={contact} className="contact">
          <FontAwesomeIcon icon={faEnvelope} />
          <h3>Contact</h3>
        </a>
      </Link>
      <style jsx>{`
        nav {
          display: flex;
          position: fixed;
          background-color: rgba(255, 251, 255, 0.7);
          width: 90%;
          backdrop-filter: blur(5px);
          bottom: 24px;
          padding: 25px;
          left: 50%;
          border-radius: 10px;
          gap:20px;
          right: 50%;
          z-index:1;
          transform: translateX(-50%);
        }

        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex:1;
          position: relative;
          transition: 0.2s all ease;
        }
        a:after {
          position: absolute;
          content: "";
          width: 0px;
          height: 10px;
          background: var(--blue);
          bottom: -10px;
          border-radius:10px;
          transition: 0.4s all ease;
        }

        a.active {
          color: var(--blue);
        }

        a.active:after {
          position: absolute;
          content: "";
          width: 100%;
          height: 10px;
          background: var(--blue);
          bottom: -10px;
        }

        a :global(svg) {
          width: 28px !important;
          height: 28px;
        }
        h3 {
          font-size: 16px;
        }

        @media (min-width:690px){
          nav{
            width:100%;
            top:0;
            border-radius:0;
            bottom:unset;
            z-index:2;
          }
          a:after{
            height:0px;
          }
          a.active:after{
            width:10px;
            border-radius:50%;
          }
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
