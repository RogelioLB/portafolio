import React, { useRef } from 'react'
import Link from "next/link";
import {useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { useFocus } from '../hooks/useFocus';

const NavBar = () => {
    const home = useRef();
    const services = useRef();
    
    useFocus([home,services]);

    return (
        <nav>
            <Link href="#home">
                <a ref={home} className="home active">
                    <FontAwesomeIcon icon={faUser}/>
                    <h3>Home</h3>
                </a>
            </Link>
            <Link href="#services">
                <a ref={services} className="services">
                    <FontAwesomeIcon icon={faBriefcase}/>
                    <h3>Services</h3>
                </a>
            </Link>
            <style jsx>{`
            nav{
                display: flex;
                position: fixed;
                background-color: rgba(255, 251, 255, 0.7);
                width: 80%;
                backdrop-filter: blur(5px);
                bottom: 24px;
                padding: 25px;
                left: 50%;
                border-radius:10px;
                right: 50%;
                transform: translateX(-50%);
            }   

            a{
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:center;
                position:relative;
                flex:1;
                transition:.2s all ease;
            }
            
            a:after{
                position:absolute;
                content:"";
                width:0px;
                height:0px;
                background: var(--blue);
                bottom:-10px;
                border-radius:50%;
                transition:.4s all ease;
            }

            a.active{
                color:var(--blue);
            }

            a.active:after{
                position:absolute;
                content:"";
                width:10px;
                height:10px;
                background: var(--blue);
                bottom:-10px;
                border-radius:50%;
            }

            a :global(svg){
                width:32px !important;
                height:32px;
            }
            h3{
                font-size:16px;
            }
            `}</style>
        </nav>
    )
}

export default NavBar
