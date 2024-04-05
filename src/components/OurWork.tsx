import { Container, Row } from "react-bootstrap";
import styles from "./OurWork.module.css";
import { imagesData } from "../images";
import SingleImageDiv from "./common/SingleImageDiv";
import { SingleImgData } from "../interface";

const OurWork = () => {
  const imgList = imagesData.map((item: SingleImgData) => {
    return <SingleImageDiv key={item.id} singleImgData={item} />;
  });
  
  return (
    <Container className={`p-2 ${styles.containerWrap}`}>
      <h2 className="text-center">OUR WORK</h2>
      <div className={`${styles.services}`}></div>
      <Row className="mt-3">{imgList}</Row>
    </Container>
  );
};

export default OurWork;