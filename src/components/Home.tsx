import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import styles from "./Home.module.css";
import { RiToolsFill } from "react-icons/ri";
const Home = () => {
  return (
    <>
      <div
        className={`${styles.fixedBg}`}
        style={{ backgroundImage: 'url("assets/new_car_back.png")' }}
      ></div>
      <div id={styles.text}>
        <div className="d-flex justify-content-center">
          <RiToolsFill size={100} />
        </div>
        <h1>JADE & ANDY</h1>
        <h3>VINTAGE CAR SPECIALIST</h3>
      </div>
      <div className={`${styles.icons}`}>
        <FaFacebook size={30} color="white" className="me-3" />
        <FaPinterest size={30} color="white" className="me-3" />
        <FaInstagram size={30} color="white" />
      </div>
      <div
        className={`${styles.fixedBg}`}
        style={{ backgroundImage: 'url("assets/happy_face.png")' }}
      ></div>
    </>
  );
};

export default Home;