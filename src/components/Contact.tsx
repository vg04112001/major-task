import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./Contact.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

const Contact = () => {
  // const [fname, setFname] = useState('');
  const [form, setForm] = useState({
    fname: '',
    lname: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(()=> {
    console.log('re-render')
  },[])
  const handleChange = (event:any) => {
    // setFname(event.target.value);
    console.log(event.target.id)
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handlerSubmit = (event:any) => {
    // console.log(event) 
    event.preventDefault();
    // setFname('') 
    console.log(form)

    const jsonData = JSON.stringify(form);
    console.log(jsonData)
    // fs.writeFileSync('formdata.json', jsonData);

    setForm({
      fname: '',
      lname: '',
      email: '',
      subject: '',
      message: ''
    });
  }

  return (
    <div className="bg-secondary">
      <img
        src="assets/contact_car.png"
        alt="car-image"
        className={`${styles.imgCar}`}
      />
      <Container fluid>
        <Row className={`bg-white ${styles.rowWrap} shadow`}>
          <div>
            <h2 className="text-center">FIND US</h2>
            <div className={`${styles.aboutUs}`}></div>
          </div>
          <Col
            className={` ps-5  ${styles.colWrap} text-left`}
            lg={6}
            md={6}
            sm={12}
          >
            <div className="my-3">
              <div>500 Terry Francine Street</div>
              <div>San Francisco, CA 94158</div>
              <div>info@mysite.com</div>
              <div>Tel: 123-456-7890</div>
            </div>
            <div>
              <div>OPENING HOURS:</div>
              <div>Mon - Fri: 7am - 10pm</div>
              <div>​​Saturday: 8am - 10pm</div>
              <div>​Sunday: 8am - 11pm</div>
            </div>
          </Col>
          <Col
            className={`bg-white ${styles.colWrap}`}
            lg={6}
            md={6}
            sm={12}
          >
            <div className="my-3">
            <form onSubmit={handlerSubmit}>
              <label htmlFor="fname">First name</label><br/>
              <input type="text" id="fname" name="fname"  value={form.fname}
          onChange={handleChange} className={`${styles.inputElement}`} /><br/>
              <label htmlFor="lname">Last name</label><br/>
              <input type="text" id="lname" name="lname" value={form.lname}
          onChange={handleChange} className={`${styles.inputElement}`}/><br/>
              <label htmlFor="email">Email</label><br/>
              <input type="email" id="email" name="email" required className={`${styles.inputElement}`} placeholder=""
               value={form.email}
               onChange={handleChange}/><br/>
              <label htmlFor="subject">Subject</label><br/>
              <input type="text" id="subject" name="subject" className={`${styles.inputElement}`}  value={form.subject}
          onChange={handleChange}/><br/>
              <label htmlFor="message">Message</label><br/>
              <textarea  id="message" rows={4} cols={23} name="message" className={`${styles.inputElement}`}  value={form.message}
          onChange={handleChange}/><br/><br/>
              
              <input type="submit" value="Submit"/>
            </form> 
            </div>
          </Col>
          {/* <Col
            lg={12}
            md={12}
            sm={12}
            className={`w-50 my-2 mx-auto shadow bg-white ${styles.colWrap}`}
          >
            <h2 className="text-center">ABOUT US</h2>
            <div className={`${styles.aboutUs}`}></div>
            <div className="mt-4">
              <p className={`${styles.textPara}`}>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. Feel free to drag and
                drop me anywhere you like on your page. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <p className={`${styles.textPara}`}>
                This is a great space to write long text about your company and
                your services. You can use this space to go into a little more
                detail about your company. Talk about your team and what
                services you provide.
              </p>
            </div>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default Contact;