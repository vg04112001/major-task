import { Col, Container, Row } from "react-bootstrap";
import styles from "./About.module.css";

const About = () => {
  return (
    <Container fluid>
      <Row className="bg-secondary">
        <Col
          lg={12}
          md={12}
          sm={12}
          className={`w-50 my-2 mx-auto shadow bg-white ${styles.colWrap}`}
        >
          <h2 className="text-center">ABOUT US</h2>
          <div className={`${styles.aboutUs}`}></div>
          <div className="mt-4">
            <p className={`${styles.textPara}`}>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <p className={`${styles.textPara}`}>
              This is a great space to write long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;