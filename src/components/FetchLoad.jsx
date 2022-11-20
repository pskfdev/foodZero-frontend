import React, { useState } from "react";
import { Image } from "react-bootstrap";
import ImgPlaceholder from "./ImgPlaceholder";

function FetchLoad({src}) {
  const [ImgLoading, setImgLoading] = useState(false);

  return (
    <>
      {!ImgLoading && <ImgPlaceholder width="100%" height="400" />}
      <Image
        className={`mx-auto ${ImgLoading ? "d-block" : "d-none"}`}
        src={src.url}
        onLoad={() => setTimeout(() => setImgLoading(true), 2000)}
        rounded
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
        }}
      />
    </>
  );
}

export default FetchLoad;
