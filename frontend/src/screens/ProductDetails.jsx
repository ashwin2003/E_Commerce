import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.net.min";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Button,
  Image,
  ListGroupItem,
  Container,
  Form,
} from "react-bootstrap";
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import { listProductDetails } from "../actions/productActions";

const Product = ({ history }) => {
  const [Qty, setQty] = useState(1);
  let { id } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);

  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(id));
    // eslint-disable-next-line
  }, [id]);

  // const addToCartHandler = () => {
  //   history.push(`/cart/${id}?qty=${Qty}`);
  // };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <Container>
          <Link to="/" className="btn btn-dark mt-3 mb-2">
            <i className="fas fa-arrow-left    "></i>
            &nbsp; GO BACK
          </Link>

          <Row className="d-flex  ">
            <Col md={6}>
              <Image
                src={product.image}
                alt={product.name}
                className="img-fluid"
              />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <h3>{product.name}</h3>
                </ListGroupItem>
                <ListGroupItem>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} Reviews`}
                  />
                </ListGroupItem>
                <ListGroupItem>Price : Rs. {product.price}</ListGroupItem>
                <ListGroupItem>{product.description}</ListGroupItem>
              </ListGroup>
            </Col>
            <Col md={3}>
              <ListGroupItem>
                <Row>
                  <Col>Status :</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock " : "out of stock"}
                  </Col>
                </Row>
              </ListGroupItem>
              {product.countInStock > 0 && (
                <ListGroupItem>
                  <Row>
                    <Col>Qty</Col>
                    <Form.Control
                      as="select"
                      value={Qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Row>
                </ListGroupItem>
              )}
              <ListGroupItem>
                <Link to={`/cart/${id}?qty=${Qty}`}>
                  <Button
                    className="btn-block"
                    type="button"
                    // onClick={addToCartHandler}
                  >
                    Add to cart
                  </Button>
                </Link>
              </ListGroupItem>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const ProductDetails = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div ref={myRef} style={{ height: "100vh", width: window.innerWidth }}>
      <Product />
    </div>
  );
};

export default ProductDetails;
