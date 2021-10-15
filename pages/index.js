import { useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import Profile from "../components/Profile";
import Services from "../components/Services";

export default function Home() {
  const [height,setHeight] = useState(null);
  const card = useRef();
  const svg = useRef();

  useEffect(()=>{
    setHeight(card.current.clientHeight - svg.current.clientHeight -4)
    window.addEventListener("resize",()=>{
      const top = card.current.clientHeight - svg.current.clientHeight-4
      setHeight(top)
    })
  },[])
  
  return (
    <>
      <Profile refs={{card,svg}}/>
      <div className="container" style={{marginTop:height}}>
        <Card title="Services" id="services" type="section">
          <Services/>
        </Card>
      </div>
      <style jsx>{`
      @media (min-width:690px){
        div.container{
        padding:20px;
        }
      }
      `}</style>
      <NavBar />
    </>
  )
}
