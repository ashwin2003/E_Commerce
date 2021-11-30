import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { Animated } from "react-animated-css";

const ProductScreen = ({ product }) => {
  return (
    <>
      <Container>
        <Animated
          animationIn="rubberBand"
          animationOut="bounce"
          animationInDuration={1600}
          animationOutDuration={1600}
          isVisible={true}
        >
          <div
            class="card border-primary mb-3 mt-3"
            style={{ maxWidth: "20rem" }}
          >
            <Link
              to={`/product/${product._id}`}
              style={{ textDecoration: "none" }}
            >
              <Card.Img src={product.image} variant="top" />
            </Link>
            <Card.Body>
              <Link
                to={`/product/${product._id}`}
                style={{ textDecoration: "none" }}
              >
                <Card.Title as="div">
                  <strong>{product.name}</strong>
                </Card.Title>
              </Link>
              <Card.Text as="div">
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </Card.Text>
              <Card.Text as="div">$ {product.price}</Card.Text>
            </Card.Body>
          </div>
        </Animated>
      </Container>
    </>
  );
};

export default ProductScreen;
