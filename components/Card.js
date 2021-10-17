import React, { forwardRef } from "react";

const Card = forwardRef(
  ({ title, blur, children, style, id, className }, ref) => {
    return (
      <section
        className={`card ${className ? className : ""}`}
        style={style}
        id={id ? id : null}
        ref={ref}
      >
        {title ? (
          <h2>
            {title}
            <span />
          </h2>
        ) : (
          <></>
        )}
        {children}
        <style jsx>{`
          section.card {
            width: 100%;
            backdrop-filter: ${blur ? "blur(2px)" : "unset"};
            background-color: ${blur ? "rgba(251,251,255,.9)" : "white"};
            padding: 20px;
            box-shadow: 0px 1px 2px 0 rgba(0, 0, 0, 0.25);
          }
          h2 {
            font-size: clamp(24px, 5vw, 32px);
            display: inline-grid;
            place-items: center;
            margin-bottom: 15px;
          }
          h2 span {
            width: 80%;
            height: 4px;
            background: var(--blue);
            border-radius:20px;
          }
        `}</style>
      </section>
    );
  }
);

export default Card;
