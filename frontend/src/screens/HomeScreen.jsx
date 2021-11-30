import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import ProductScreen from "./ProductScreen";
import { listProducts } from "../actions/productActions";
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";
import ReactPlayer from "react-player";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} md={3}>
              <ProductScreen product={product} />
            </Col>
          ))}
          <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
