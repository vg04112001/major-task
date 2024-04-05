import { Link } from "react-router-dom";
import SocialGroupIcons from "./SocialGroupIcons";

const Footer = () => {
  const date = new Date();
  return (
    <div className="py-3 position-fixed bottom-0 w-100" style={{ background: "rgb(60,60,60)" }}>
      <div className="d-flex justify-content-center mb-2 d-none d-sm-flex">
        <SocialGroupIcons/>
      </div>
      <p className="text-center text-white">
        &copy; {date.getFullYear()} by Jade & Andy. Powered and secured by{" "}
        <span>
          <Link to="/" className="text-white">
            Wix
          </Link>
        </span>
      </p>
    </div>
  );
};

export default Footer;