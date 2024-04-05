import { Offcanvas } from 'react-bootstrap'
import { FaUserCircle } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'
import styles from "../components/common/Header.module.css";
import SocialGroupIcons from './common/SocialGroupIcons';

const SideNavbar = ({showProp, onHideProp, onClickProp}:any) => {
  return (
    <>
       <Offcanvas
        show={showProp}
        onHide={onHideProp}
        style={{ backgroundColor: "rgb(60, 60, 60)" }}
      >
        <Offcanvas.Body>
          <IoMdClose
            size="30"
            onClick={onClickProp}
            className={`${styles.closeIcon}`}
          />
          <Link to="#link" className={`${styles.sideBarLinks}`}>
            <FaUserCircle size={25} className="me-2" />
            Log In
          </Link>
          <Link
            to="/"
            className={`${styles.sideBarLinks}`}
            onClick={onClickProp}
          >
            HOME
          </Link>
          <Link
            to="/services"
            className={`${styles.sideBarLinks}`}
            onClick={onClickProp}
          >
            SERVICES
          </Link>
          <Link
            to="/our-work"
            className={`${styles.sideBarLinks}`}
            onClick={onClickProp}
          >
            OUR WORK
          </Link>
          <Link
            to="/about"
            className={`${styles.sideBarLinks}`}
            onClick={onClickProp}
          >
            ABOUT US
          </Link>
          <Link
            to="/contact"
            className={`${styles.sideBarLinks}`}
            onClick={onClickProp}
          >
            CONTACT
          </Link>
          <Link
            to="/book-online"
            className={`${styles.sideBarLinks}`}
            onClick={onClickProp}
          >
            BOOK ONLINE
          </Link>
          <div className="d-flex justify-content-center pt-3">
            <SocialGroupIcons/>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default SideNavbar
