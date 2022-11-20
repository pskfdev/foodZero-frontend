import React, { useState } from "react";
import { Image } from "react-bootstrap";
import ImgPlaceholder from "./ImgPlaceholder";

function ImgLoad({ src }) {
  const [ImgLoading, setImgLoading] = useState(false);

  return (
    <>
      {!ImgLoading && <ImgPlaceholder width="100%" height="600" />}
      <Image
        className={`${ImgLoading ? "d-block" : "d-none"}`}
        src={src}
        fluid
        rounded
        onLoad={() => setTimeout(() => setImgLoading(true), 2000)}
        style={{ width: "100%", height: "600px", objectFit: "cover" }}
      />
    </>
  );
}

export default ImgLoad;
