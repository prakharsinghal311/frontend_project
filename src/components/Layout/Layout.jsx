import { Outlet, NavLink } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import classes from "./Layout.module.css";
// import CardUI from "../UI/CardUI";

const Layout = () => {
  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand className={classes.links}>
            <NavLink activeclassname={classes.active} to="/home">
              HOME
            </NavLink>
          </Navbar.Brand>
          <Navbar.Brand className={classes.links}>
            <NavLink activeclassname={classes.active} to="/">
              STORE
            </NavLink>
          </Navbar.Brand>
          <Navbar.Brand className={classes.links}>
            <NavLink activeclassname={classes.active} to="/about">
              ABOUT
            </NavLink>
          </Navbar.Brand>
          <Navbar.Brand className={classes.links}>
            <NavLink activeclassname={classes.active} to="/login">
              Login
            </NavLink>
          </Navbar.Brand>
          <Navbar.Brand className={classes.links}>
            <NavLink activeclassname={classes.active} to="/ContactUS">
              Contact US
            </NavLink>
          </Navbar.Brand>
        </Container>
      </Navbar>
      {/* <CardUI /> */}
      <Outlet />
    </>
  );
};

export default Layout;
