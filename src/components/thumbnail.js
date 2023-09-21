import React from "react";

const Thumbnail = (props) => {
  const { thumbImg } = props;
  return (
    <div className="wrapper">
      <div className="gallery">
        <ul>
          {thumbImg.map((item) => (
            <li>
              <img src={item.img} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Thumbnail;
