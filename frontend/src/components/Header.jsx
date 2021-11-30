import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userAction";

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container flex">
          <a class="navbar-brand" href="/">
            Shopping App
          </a>

          <div class="d-flex">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link" href="/cart">
                  <i className="fas fa-shopping-cart"></i>
                  &nbsp;CART
                </a>
              </li>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <Link to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </Link>
                </NavDropdown>
              ) : (
                <li class="nav-item">
                  <a class="nav-link" href="/login">
                    <i className="fas fa-user"></i>&nbsp;SIGN IN
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
