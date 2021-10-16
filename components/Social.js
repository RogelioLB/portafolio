import React from 'react'
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ProfileCss from "./Profile.module.css";

const Social = () => {
    return (
        <div className="social">
            <Link href="https://www.linkedin.com/in/rogeliolb"><a target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" className={ProfileCss.link}/></a></Link>
            <Link href="https://www.facebook.com/rogelio.lb.3"><a target="_blank"><FontAwesomeIcon icon={faFacebook} size="2x" className={ProfileCss.link}/></a></Link>
            <Link href="https://www.instagram.com/lbrogelio"><a target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" className={ProfileCss.link}/></a></Link>
            <Link href="https://www.github.com/RogelioLB"><a target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" className={ProfileCss.link}/></a></Link>
            <style jsx>{`
            div.social{
                display:flex;
                align-items:center;
                justify-content:space-between;
                padding:10px;
            }    
            `}</style>
        </div>
    )
}

export default Social
