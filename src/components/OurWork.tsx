import { Container, Row } from "react-bootstrap";
import styles from "./OurWork.module.css";
import { imagesData } from "../images";
import SingleImageDiv from "./common/SingleImageDiv";
import { SingleImgData } from "../interface";
// import { useSelector } from "react-redux";

const OurWork = () => {
  // const wish = useSelector((state: any) => state.wishListReducer);
  // console.log(wish);

  const imgList = imagesData.map((item: SingleImgData) => {
    return <SingleImageDiv key={item.id} singleImgData={item} />;
  });

  return (
    <Container className="p-2">
      <h2 className="text-center">OUR WORK</h2>
      <div className={`${styles.services}`}></div>
      <Row className="mt-3">{imgList}</Row>
    </Container>
  );
};

export default OurWork;