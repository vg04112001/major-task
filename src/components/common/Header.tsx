import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import {
  FaUserCircle,
} from "react-icons/fa";
import { useState } from "react";
import SideNavbar from "../SideNavbar";

const Header = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () : void => setShow(false);
  const handleShow = () : void => setShow(true);

  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      className="p-0 bg-dark sticky-sm-top"
      style={{ height: "64px" }}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="d-block d-sm-none ms-auto border-0 box-shadow-none text-decoration-none"
          onClick={handleShow}
        />
        <Nav className={`${styles.navItems}`}>
          <Link to="/" className={`${styles.link}`}>
            HOME
          </Link>
          <Link to="/services" className={`${styles.link}`}>
            SERVICES
          </Link>
          <Link to="/our-work" className={`${styles.link}`}>
            OUR WORK
          </Link>
          <Link to="/about" className={`${styles.link}`}>
            ABOUT US
          </Link>
          <Link to="/contact" className={`${styles.link}`}>
            CONTACT
          </Link>
          <Link to="/wishlist" className={`${styles.link}`}>
            YOUR WISHLIST
          </Link>
          <Link to="/login" className={`${styles.link}`}>
            <FaUserCircle size={25} className="me-2" />
            Log In
          </Link>
        </Nav>
      </Container>
      <SideNavbar
        showProp={show}
        onHideProp={handleClose}
        onClickProp={handleClose}
      />
    </Navbar>
  );
};

export default Header;