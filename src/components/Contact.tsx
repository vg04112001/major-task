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


  // const handlerSubmit = (event: any) => {
  //   // console.log(event)
  //   event.preventDefault();
  //   console.log(form);
    
  //   fetch(`http://localhost:8000/data`, {
  //     method: "POST",
  //     body: JSON.stringify(form),
  //     headers: {
  //       "Content-Type": "application/json",
  //     }
  //   }).then((response) => response.json());


  //   const fileData = JSON.stringify(form);
  //   // handleSaveToPC(fileData, 'formData');
  //   // const file = '/formData.json'
  //   // const obj = form
     
  //   // jsonfile.writeFile(file, obj)
  //   // .then(res => {
  //   //   console.log('Write complete')
  //   // })
  //   // .catch(error => console.error(error))

  //   setForm({
  //     fname: "",
  //     lname: "",
  //     email: "",
  //     subject: "",
  //     message: "",
  //   });
  // };

const handlerSubmit = (event: any) => {
  event.preventDefault();

  // Check email uniqueness
  fetch("http://localhost:8000/data")
      .then((response) => response.json())
      .then((jsonData) => {
          const existingUser = jsonData.find((user: any) => user.email === form.email);
          if (existingUser) {
              // Email already exists, update the existing record
              const confirmUpdate = prompt("Email is already in use. Do you want to update the user email?");
              if (confirmUpdate) {
                // console.log(existingUser)
                  // Set updated email in the form
                  // console.log(existingUser)
                  // setForm({ ...existingUser, email: "" });
                  let pattern = /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;
                  // pattern.test(confirmUpdate);
                  if (pattern.test(confirmUpdate)) {
                    if(existingUser.email === confirmUpdate){
                      alert("Please enter other email to update.");
                    }
                    else{
                      const updatedForm = { ...existingUser, email: confirmUpdate };
                      updateUser(existingUser.id, updatedForm);
                    }
                    // alert("Email is valid!");
                  } else {
                    alert("Please enter a valid email address.");
                  }
                  // const updatedForm = { ...existingUser, email: confirmUpdate };
                  // Update user data
                  // updateUser(existingUser.id, updatedForm); // Assuming your data has an 'id' field
              } else {
                  // Optionally, you can reset the form
                  setForm({ ...form, email: "" });
              }
          } else {
              // Email is unique, proceed with creating a new record
              createNewUser();
          }
      })
      .catch((error) => {
          console.error("Error fetching existing data:", error);
          // Handle error scenario
      });
};

const createNewUser = () => {
  // POST request to create a new user
  fetch("http://localhost:8000/data", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
          "Content-Type": "application/json",
      }
  }).then((response) => response.json())
    .then(() => {
        // Reset form after successful submission
        alert("New user created successfully!");
        setForm({
            fname: "",
            lname: "",
            email: "",
            subject: "",
            message: "",
        });

        // alert("New user created successfully!");
    })
    .catch((error) => {
        console.error("Error creating new user:", error);
        // Handle error scenario
    });
};

const updateUser = (userId: string, updatedForm: any) => {
  // PUT/PATCH request to update the existing user record
  fetch(`http://localhost:8000/data/${userId}`, {
      method: "PUT",
      body: JSON.stringify(updatedForm),
      headers: {
          "Content-Type": "application/json",
      }
  }).then((response) => response.json())
    .then(() => {
        // Reset form after successful update
        alert("User record updated successfully!");
        setForm({
            fname: "",
            lname: "",
            email: "",
            subject: "",
            message: "",
        });

        // alert("User record updated successfully!");
    })
    .catch((error) => {
        console.error("Error updating user record:", error);
        // Handle error scenario
    });
};



  // const handleSaveToPC = (jsonData:any, filename:any) => {
  //   const fileData = JSON.stringify(jsonData);
  //   const blob = new Blob([fileData], {type: "text/plain"});
  //   const url = URL.createObjectURL(blob);
  //   // console.log(url)
  //   const link = document.createElement('a');
  //   console.log(link)
  //   // link.download = `${filename}.json`;
  //   // link.href = url;
  //   // link.click();
  // };

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
                  minLength={2}
                  maxLength={10}
                  onChange={handleChange}
                  className={`${styles.inputElement}`}
                  pattern="[A-Za-z]{2,10}"
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
                  minLength={2}
                  maxLength={10}
                  onChange={handleChange}
                  className={`${styles.inputElement}`}
                  pattern="[A-Za-z]{2,10}"
                  required
                />
                <br />
                <label htmlFor="email">Email</label>
                <br />
                {/* <input type="email" id="email" name="email" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"></input> */}
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={`${styles.inputElement}`}
                  placeholder=""
                  value={form.email}
                  onChange={handleChange}
                  // title="email validate"
                  pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'
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