import React from "react";
import ContentLoader from "react-content-loader";

function ImgPlaceholder({ width, height }) {
  return (
    <>
      <ContentLoader
        speed={3}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        backgroundColor="#cfcfcf"
        foregroundColor="#ecebeb"
      >
        <rect x="2" y="2" rx="10" ry="10" width="100%" height="100%" />
      </ContentLoader>
    </>
  );
}

export default ImgPlaceholder;
