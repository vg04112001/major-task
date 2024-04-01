import { Col } from "react-bootstrap";
import styles from "./SingleImageDiv.module.css";
import { CiHeart } from "react-icons/ci";
import { PiShareFatThin } from "react-icons/pi";
import {  useState } from "react";
import { useDispatch } from "react-redux";
import { addWishList, removeWishList } from "../../redux/actions/wishAction";
import { FaHeart } from "react-icons/fa";

const SingleImageDiv = ({ singleImgData }: any) => {
  const { id, title, desc, imgPath, wishDisplay } = singleImgData;

  const dispatch = useDispatch();
  // console.log(defaultState)
  // const wishState = d[0]?.wishDisplay;
  // console.log(d[0].wishDisplay)
  const [wishCount, setWishCount] = useState(false);
  // console.log(wishCount)

  const addToWishList = (singleImgData: any) => {
    setWishCount((s) => !s);
    dispatch(addWishList(singleImgData));
  };

  const removeFromWishList = (singleImgData: any) => {
    setWishCount((s) => !s);
    dispatch(removeWishList(singleImgData));
  };

  return (
    <Col
      lg={4}
      md={6}
      sm={12}
      className={`position-relative ${styles.imgContainer} p-0`}
    >
      <img src={imgPath} alt="back-image" className="img-fluid" />
      <div className={`${styles.overlay}`}>
        {title}
        <div>{desc[0]}</div>
        <div>{desc[1]}</div>
        <div className="d-flex justify-content-between">
          <div>
            {wishCount ? (
              <>
                <FaHeart
                  size={23}
                  color="red"
                  onClick={() => removeFromWishList(singleImgData)}
                />
                <span className="ps-1">{wishCount && "1"}</span>
              </>
            ) : (
              <CiHeart size={30} onClick={() => addToWishList(singleImgData)} />
            )}
          </div>
          <PiShareFatThin />
        </div>
      </div>
    </Col>
  );
};

export default SingleImageDiv;