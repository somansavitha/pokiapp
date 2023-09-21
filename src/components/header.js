import React from "react";
import data from "./../data.json";
import Thumbnail from "./thumbnail";

const Header = (props) => {
  const { headerThumbs } = data;
  return (
    <div className="headers">
      <div role="button" className="poki-btn">
        pOki
      </div>
      <div role="button" className="poki-btn games-btn">
        Online Games
      </div>
      <Thumbnail thumbImg={headerThumbs} />
    </div>
  );
};

export default Header;
