import styles from "./Services.module.css";
import { services } from "../services";
import SingleService from "./common/SingleService";
import { Container, Row } from "react-bootstrap";

const Services = () => {
  const serviceList = services.map((item) => {
    return <SingleService key={item.id} singleService={item} />;
  });

  return (
    <Container className="p-2">
      <h2 className="text-center">SERVICES</h2>
      <div className={`${styles.services}`}></div>
      <Row className="mt-3">{serviceList}</Row>
    </Container>
  );
};

export default Services;