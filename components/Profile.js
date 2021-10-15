import Image from "next/image"
import Perfil from "../public/perfil.jpg";
import Card from "./Card";
import Fondo from "../public/Fondo.svg"
import ProfileCss from "./Profile.module.css"
import Wave from "./Wave"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import Link from "next/link";
import { forwardRef } from "react";

const Profile = forwardRef(({refs},ref) => {
    return (
        <section id="home">
            <div className={ProfileCss.container}>
                <div className={ProfileCss.avatar}>
                    <Image src={Perfil} alt="Rogelio López Bernal" placeholder="blur"/>
                </div>
                <div className={ProfileCss.text}>
                    <h2>Rogelio López</h2>
                    <h2><span>FullStackJS</span> Developer</h2>
                    <div className="social">
                        <Link href="https://www.linkedin.com/in/rogeliolb"><a target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" className={ProfileCss.link}/></a></Link>
                        <Link href="https://www.facebook.com/rogelio.lb.3"><a target="_blank"><FontAwesomeIcon icon={faFacebook} size="2x" className={ProfileCss.link}/></a></Link>
                        <Link href="https://www.instagram.com/lbrogelio"><a target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" className={ProfileCss.link}/></a></Link>
                    </div>
                </div>
            </div>
            <Card title="About me" style={{position:"absolute",zIndex:1}} blur={true} ref={refs.card}>
                <p>I am 17 years old, with 3 years of experience working with JavaScript. I like to learn new things and solve problems. So don't be afraid to contact me because together we can do great things.</p>
            </Card>
            <Wave ref={refs.svg} />
            <style jsx>
                {`
                span{
                    color:var(--blue)
                }
                h2{
                    text-align:center;
                    font-size:clamp(19px,3.5vw,28px);
                }
                div.social{
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                    padding:10px;
                }
                p{
                    font-size:clamp(18px,2vw,26px);
                }
                svg:hover path{
                    fill:var(--blue);
                }
                `}
            </style>
        </section>
    )
}
)

export default Profile
