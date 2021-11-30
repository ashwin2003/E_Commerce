import React, { useEffect } from "react";
import Message from "../components/shared/Message";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Form,
  Button,
  Card,
  Image,
  ListGroup,
  ListGroupItem,
  Container,
} from "react-bootstrap";
import { addToCart, removeFromCart } from "../actions/cartAction";

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkout = () => {
    history.push("/login?redirect=shipping");
  };
  return (
    <>
      <Container>
        <Row>
          <h2 className="d-flex justify-content-center m-4">Cart</h2>

          <Col md={8}>
            {cartItems.length == 0 ? (
              <Message>Your Cart is Empty !</Message>
            ) : (
              <ListGroup variant="fluid">
                {cartItems.map((item) => (
                  <ListGroupItem>
                    <Row className="d-flex justify-content-around">
                      <Col md={2}>
                        <Image src={item.image} alt={item.name} fluid rounded />
                      </Col>
                      <Col md={3}>
                        <Link
                          to={`/product/${item.product}`}
                          style={{ textDecoration: "none" }}
                        >
                          {item.name}
                        </Link>
                      </Col>
                      <Col md={2}>Rs. {item.price}</Col>
                      <Col md={2}>
                        <Form.Control
                          as="select"
                          value={item.qty}
                          onChange={(e) =>
                            dispatch(
                              addToCart(item.product, Number(e.target.value))
                            )
                          }
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                        <Button
                          type="button"
                          variant="light"
                          onClick={() => removeFromCartHandler(item.product)}
                          className="mt-3"
                        >
                          <i
                            className="fa fa-trash text-danger"
                            aria-hidden="true"
                          ></i>
                        </Button>
                      </Col>
                    </Row>
                  </ListGroupItem>
                ))}
              </ListGroup>
            )}
          </Col>
          <Col md={4} className="">
            <Card>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <h5>
                    subtotal (
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
                  </h5>
                  Rs.
                  {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}
                </ListGroupItem>
                <Button
                  type="button"
                  className="btn-block btn-dark btn-md"
                  disabled={cartItems.length === 0}
                  onClick={checkout}
                >
                  Proceed to checkout
                </Button>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CartScreen;
