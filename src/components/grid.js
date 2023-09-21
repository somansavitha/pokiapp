import React from "react";
import Thumb from "./thumb";

const Grid = (props) => {
  const { pokis } = props;
  return (
    <div className="wrapper">
      <div className="grid-container" style={props.style}>
        <ul className="img-grid">
          {pokis.map((item) => (
            <li key={item.id}>
              <a
                href="#"
                className="overlay-container"
                data-overlay-text={item.title}
              >
                <img src={item.img} alt={item.title} className="overlay-img" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Thumb thumbImg={props.thumbImg} />
    </div>
  );
};

export default Grid;
