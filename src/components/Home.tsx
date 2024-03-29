import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
    <div className={`${styles.fixedBg}`}>
      <div>
      {/* <img
        src="assets/car.jpg"
        alt="placeholder"
        style={{ width: "100%", maxHeight: "888px" }}
      /> */}
      </div>
    </div>
      <div id={styles.text}>
        <h1>JADE & ANDY</h1>
        <h3>VINTAGE CAR SPECIALIST</h3>
      </div>
      <div className={`${styles.icons}`}>
        <FaFacebook size={30} color="white" className="me-3" />
        <FaPinterest size={30} color="white" className="me-3" />
        <FaInstagram size={30} color="white" />
      </div>
    </>
  );
};

export default Home;
