import React from "react";
import Card from "./Card";
import Service from "./Service";
import { faCode, faPencilRuler } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div>
      <Card blur={true} className="services">
        <Service title="Build your Website" icon={faCode}>
          <p>
            I can create your own website as you desire. With a design
            personalized. Creation of blogs, personal pages, landing pages, etc.
          </p>
        </Service>
        <Service title="Web Design" icon={faPencilRuler}>
          <p>
            Design of your website completely responsive, elegant, minimalist,
            pleasing to the eye. I can assure you that your design will be what
            you are looking for.
          </p>
        </Service>
      </Card>
      <style jsx>{`
        div :global(.services) {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          gap: 30px;
        }
        p {
          font-size: clamp(18px, 2.5vw, 20px);
        }
        @media (min-width: 690px) {
          div :global(.services) {
            flex-direction: row;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
