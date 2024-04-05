import { Col } from "react-bootstrap";
import styles from "./SingleImageDiv.module.css";
import { CiHeart } from "react-icons/ci";
import { PiShareFatThin } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { addWishList, removeWishList } from "../../redux/slices/wishSlice";
import { FaHeart } from "react-icons/fa";
import { SingleImgData } from "../../interface";
import { Dispatch } from "redux";

type SingleImageProps = {
  singleImgData: SingleImgData;
};

const SingleImageDiv = ({ singleImgData }: SingleImageProps) => {
  
  const { id, title, desc, imgPath } = singleImgData;

  const dispatch: Dispatch<any> = useDispatch();

  const wish: SingleImgData[] = useSelector(
    (state: any) => state.wishListReducer
  );
  const wishVar: undefined | SingleImgData | SingleImgData[] = wish.find(
    (item: SingleImgData) => item.id === id
  );

  const addToWishList = (singleImgData: SingleImgData): void => {
    dispatch(addWishList(singleImgData));
  };

  const removeFromWishList = (singleImgData: SingleImgData): void => {
    dispatch(removeWishList(singleImgData));
  };

  return (
    <Col
      xl={4}
      lg={4}
      md={6}
      sm={6}
      className={`position-relative ${styles.imgContainer} p-0`}
    >
      <img src={imgPath} alt="backCover" className="img-fluid" />
      <div className={`${styles.overlay}`}>
        {title}
        <div className={`${styles.description}`}>{desc[0]}</div>
        <div className={`${styles.description}`}>{desc[1]}</div>
        <div className="d-flex justify-content-between">
          <div>
            {wishVar ? (
              <>
                <FaHeart
                  size={23}
                  color="red"
                  onClick={() => removeFromWishList(singleImgData)}
                />
                <span className="ps-1">{wishVar && "1"}</span>
              </>
            ) : (
              <CiHeart size={30} onClick={() => addToWishList(singleImgData)} />
            )}
          </div>
          <PiShareFatThin size={30} />
        </div>
      </div>
    </Col>
  );
};

export default SingleImageDiv;