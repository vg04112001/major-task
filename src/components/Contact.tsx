import styles from "./Contact.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { SingleFormData } from "../interface";

const Contact = () => {
  const [form, setForm] = useState<SingleFormData>({
    fname: "",
    lname: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    console.log("re-render");
  }, []);
  const handleChange = (event: any) : void => {
    // setFname(event.target.value);
    // console.log(event.target.id);
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };


  const handlerSubmit = (event: any) : void => {
    // console.log(event)
    event.preventDefault();
    console.log(form);
    const fileData = JSON.stringify(form);
    handleSaveToPC(fileData, 'formData');
    // const file = '/formData.json'
    // const obj = form
     
    // jsonfile.writeFile(file, obj)
    // .then(res => {
    //   console.log('Write complete')
    // })
    // .catch(error => console.error(error))

    setForm({
      fname: "",
      lname: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleSaveToPC = (jsonData:any, filename:any) => {
    const fileData = JSON.stringify(jsonData);
    const blob = new Blob([fileData], {type: "text/plain"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = `${filename}.json`;
    link.href = url;
    link.click();
  };

  return (
    <div className="bg-secondary">
      <img
        src="assets/contact_car.png"
        alt="car"
        className={`${styles.imgCar}`}
      />
      <Container fluid>
        <Row className={`bg-white ${styles.rowWrap} shadow`}>
          <div>
            <h2 className="text-center">FIND US</h2>
            <div className={`${styles.aboutUs}`}></div>
          </div>
          <Col
            className={`ps-5 pt-3 ${styles.contentWrap}`}
            lg={6}
            md={6}
            sm={6}
          >
            <div className="my-3">
              <div>500 Terry Francine Street</div>
              <p>San Francisco, CA 94158</p>
              <p>info@mysite.com</p>
              <p>Tel: 123-456-7890</p>
            </div>
            <div>
              <div>OPENING HOURS:</div>
              <div>Mon - Fri: 7am - 10pm</div>
              <div>​​Saturday: 8am - 10pm</div>
              <div>​Sunday: 8am - 11pm</div>
            </div>
          </Col>
          <Col className={`pt-3 ps-3 ${styles.contentWrap}`} lg={6} md={6} sm={6}>
            <div className="my-3">
              <form onSubmit={handlerSubmit}>
                <label htmlFor="fname">First name</label>
                <br />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  value={form.fname}
                  minLength={4}
                  maxLength={15}
                  onChange={handleChange}
                  className={`${styles.inputElement}`}
                  required
                />
                <br />
                <label htmlFor="lname">Last name</label>
                <br />
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  value={form.lname}
                  minLength={4}
                  maxLength={15}
                  onChange={handleChange}
                  className={`${styles.inputElement}`}
                  required
                />
                <br />
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={`${styles.inputElement}`}
                  // placeholder=""
                  value={form.email}
                  onChange={handleChange}
                  pattern='[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}'
                />
                <br />
                <label htmlFor="subject">Subject</label>
                <br />
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={`${styles.inputElement}`}
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
                <br />
                <label htmlFor="message">Message</label>
                <br />
                <textarea
                  id="message"
                  rows={4}
                  cols={23}
                  name="message"
                  className={`${styles.inputElement}`}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
                <br />
                <input type="submit" value="Submit" className="bg-dark text-white"/>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;