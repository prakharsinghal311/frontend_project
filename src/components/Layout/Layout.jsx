import { Outlet, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import classes from "./Layout.module.css";
import CardUI from "../UI/CardUI";
import "bootstrap/dist/css/bootstrap.css";

const Layout = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" bg="dark">
        <Container>
          <Navbar.Brand>
            <NavLink activeclassname={classes.active} to="/">
              STORE
            </NavLink>
          </Navbar.Brand>
          <Navbar.Brand>
            <NavLink activeclassname={classes.active} to="/about">
              ABOUT
            </NavLink>
          </Navbar.Brand>
          <Navbar.Brand>
            <NavLink activeclassname={classes.active} to="/login">
              Login
            </NavLink>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <CardUI />
      <Outlet />
    </>
  );
};

export default Layout;
