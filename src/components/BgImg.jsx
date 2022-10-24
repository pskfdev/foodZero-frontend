import React from "react";

function BgImg(props) {
  return (
    <div
      className="bg-image p-5 text-center text-white"
      style={{
        backgroundImage: `url(${props.img})`,
      }}
    >
    </div>
  );
}

export default BgImg;
