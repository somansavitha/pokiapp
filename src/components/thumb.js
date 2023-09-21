import React from "react";

const Thumb = (props) => {
  const { thumbImg } = props;
  return (
    <div className="thumb">
      <ul>
        {thumbImg.map((item) => (
          <li>
            <div className="bg-img">
              <img src={item.img} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Thumb;
