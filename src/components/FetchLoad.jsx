import React, { useState } from "react";
import { Image } from "react-bootstrap";
import ImgPlaceholder from "./ImgPlaceholder";

function FetchLoad({src}) {
  const [ImgLoading, setImgLoading] = useState(false);

  return (
    <>
      {!ImgLoading && <ImgPlaceholder width="100%" height="400" />}
      <Image
        className={`mx-auto shadow ${ImgLoading ? "d-block" : "d-none"}`}
        src={src}
        onLoad={() => setTimeout(() => setImgLoading(true), 500)}
        rounded
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
          cursor: "pointer"
        }}
      />
    </>
  );
}

export default FetchLoad;
