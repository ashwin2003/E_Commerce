import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div>
      <Spinner
        animation="border"
        variant="info"
        style={{ width: 100, height: 100, margin: "auto", display: "block" }}
      />
    </div>
  );
};

export default Loader;
