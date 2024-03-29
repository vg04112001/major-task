import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styles from './Header.module.css';
import { FaUserCircle } from "react-icons/fa";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoMdClose  } from "react-icons/io";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <Navbar bg="dark" data-bs-theme="dark" className="p-0 bg-dark sticky-md-top" style={{height: "64px"}}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-block d-sm-none ms-auto border-0 box-shadow-none text-decoration-none" onClick={handleShow}/>
          {/* <Button variant="primary" onClick={handleShow} className="d-block d-sm-none ms-auto">
          Launch
          </Button> */}
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className={`${styles.navItems}`}>
            <Link to="/" className={`text-decoration-none text-white ${styles.link}`}>HOME</Link>
            <Link to="/services" className={`text-decoration-none text-white ${styles.link}`}>SERVICES</Link>
            <Link to="#home" className={`text-decoration-none text-white ${styles.link}`}>OUR WORK</Link>
            <Link to="/about" className={`text-decoration-none text-white ${styles.link}`}>ABOUT US</Link>
            <Link to="/contact" className={`text-decoration-none text-white ${styles.link}`}>CONTACT</Link>
            <Link to="/book-online" className={`text-decoration-none text-white ${styles.link}`}>BOOK ONLINE</Link>
            <Link to="#link" className={`text-decoration-none text-white ${styles.link}`}><FaUserCircle size={25} className="me-2"/>Log In</Link>
          </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
      <Offcanvas show={show} onHide={handleClose} style={{ backgroundColor:"rgb(60, 60, 60)"}}>
        {/* <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header> */}
        <Offcanvas.Body>
        <IoMdClose size="30"  onClick={handleClose} className={`${styles.closeIcon}`}/>
            <Link to="#link" className={`text-decoration-none text-white d-flex justify-content-center pb-3 ${styles.sideBarLinks}`}><FaUserCircle size={25} className="me-2"/>Log In</Link>
            <Link to="#home" className={`text-decoration-none text-white d-flex justify-content-center py-3 ${styles.sideBarLinks}`}>HOME</Link>
            <Link to="#link" className={`text-decoration-none text-white d-flex justify-content-center py-3 ${styles.sideBarLinks}`}>SERVICES</Link>
            <Link to="#home" className={`text-decoration-none text-white d-flex justify-content-center py-3 ${styles.sideBarLinks}`}>OUR WORK</Link>
            <Link to="#link" className={`text-decoration-none text-white d-flex justify-content-center py-3 ${styles.sideBarLinks}`}>ABOUT US</Link>
            <Link to="#home" className={`text-decoration-none text-white d-flex justify-content-center py-3 ${styles.sideBarLinks}`}>CONTACT</Link>
            <Link to="#link" className={`text-decoration-none text-white d-flex justify-content-center py-3 ${styles.sideBarLinks}`}>BOOK ONLINE</Link>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};

export default Header;