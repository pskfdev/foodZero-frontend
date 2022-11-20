import React, {useState} from "react";
import { Row, Col, Image } from "react-bootstrap";
import ReactReadMoreReadLess from "react-read-more-read-less";
import ImgPlaceholder from "./ImgPlaceholder";

function BlogList({ src, title, detail }) {
  const [ImgLoading, setImgLoading] = useState(false);

  return (
    <Row xs={1} sm={1} md={2} lg={2} className="mx-auto my-6">
      <Col>
        {!ImgLoading && <ImgPlaceholder width="100%" height="500" />}
        <Image
          src={src}
          alt={title}
          rounded
          fluid
          className={`mx-auto ${ImgLoading ? "d-block" : "d-none"}`}
          onLoad={() => setTimeout(() => setImgLoading(true), 2000)}
          style={{
            objectFit: "cover",
          }}
        />
      </Col>
      <Col className="my-5 my-md-auto">
        <div className="w-75 mx-auto">
          <h2 className="text-dark">{title}</h2>
          <hr style={{ borderTop: "4px dotted #000" }} />
          <p className="text-dark">
            <ReactReadMoreReadLess
              charLimit={100}
              readMoreText={"Read more ➜"}
              readLessText={"Read less ▲"}
              readMoreStyle={{ color: "#9CAA00", cursor: "pointer" }}
              readLessStyle={{ color: "#9CAA00", cursor: "pointer" }}
            >
              {detail}
            </ReactReadMoreReadLess>
          </p>
        </div>
      </Col>
    </Row>
  );
}

export default BlogList;
