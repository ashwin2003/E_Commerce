import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const footer = () => {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col className="navbar fixed-bottom d-flex justify-content-center mt-3 ">
              <span>Copyright &copy; Shopping App</span>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default footer;
