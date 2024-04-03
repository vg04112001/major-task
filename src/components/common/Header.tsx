import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaUserCircle,
} from "react-icons/fa";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () : void => setShow(false);
  const handleShow = () : void => setShow(true);

  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      className="p-0 bg-dark sticky-md-top"
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
          {/* <Link to="/book-online" className={`${styles.link}`}>
            BOOK ONLINE
          </Link> */}
          <Link to="/wishlist" className={`${styles.link}`}>
            YOUR WISHLIST
          </Link>
          <Link to="/login" className={`${styles.link}`}>
            <FaUserCircle size={25} className="me-2" />
            Log In
          </Link>
        </Nav>
      </Container>
      <Offcanvas
        show={show}
        onHide={handleClose}
        style={{ backgroundColor: "rgb(60, 60, 60)" }}
      >
        <Offcanvas.Body>
          <IoMdClose
            size="30"
            onClick={handleClose}
            className={`${styles.closeIcon}`}
          />
          <Link to="#link" className={`${styles.sideBarLinks}`}>
            <FaUserCircle size={25} className="me-2" />
            Log In
          </Link>
          <Link
            to="/"
            className={`${styles.sideBarLinks}`}
            onClick={handleClose}
          >
            HOME
          </Link>
          <Link
            to="/services"
            className={`${styles.sideBarLinks}`}
            onClick={handleClose}
          >
            SERVICES
          </Link>
          <Link
            to="/our-work"
            className={`${styles.sideBarLinks}`}
            onClick={handleClose}
          >
            OUR WORK
          </Link>
          <Link
            to="/about"
            className={`${styles.sideBarLinks}`}
            onClick={handleClose}
          >
            ABOUT US
          </Link>
          <Link
            to="/contact"
            className={`${styles.sideBarLinks}`}
            onClick={handleClose}
          >
            CONTACT
          </Link>
          <Link
            to="/book-online"
            className={`${styles.sideBarLinks}`}
            onClick={handleClose}
          >
            BOOK ONLINE
          </Link>
          <div className="d-flex justify-content-center pt-3">
            <FaFacebook size={30} color="white" className="me-3" />
            <FaPinterest size={30} color="white" className="me-3" />
            <FaInstagram size={30} color="white" />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};

export default Header;