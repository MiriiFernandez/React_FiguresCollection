import React from "react";

import Banner_Links from "../links/Banner_Links";

function StandardContainer({ path, name, imagen , style}) {
  return (
      <div className={`banner_container ${style} `}>
        <img src={imagen} alt="" />
        <Banner_Links path={path} name={name} />
      </div>
  );
}

export default StandardContainer;
