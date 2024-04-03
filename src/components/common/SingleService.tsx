import { Col } from "react-bootstrap";
import { SingleServiceItem } from "../../interface";

type SingleServiceProps = {
  singleService : SingleServiceItem
}

const SingleService = ({ singleService }: SingleServiceProps) => {
  const { title, text, icon } = singleService;
  return (
    <Col lg={4} md={6} sm={12} className="text-center">
      <div className="d-flex justify-content-center">{icon}</div>
      <h5>{title}</h5>
      <p>{text}</p>
    </Col>
  );
};

export default SingleService;