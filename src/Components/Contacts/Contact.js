import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import contactImg from "../../assets/img/contact-img.svg";
import contactImg from "../../assets/img/contact.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { SyncLoader } from "react-spinners";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [checkForm, setCheckForm] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors,setErrors]=useState({})

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCheckForm({
      ...checkForm,
      [name]: value,
    });
  };

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();
    const valErrors = {};
    if(!checkForm.fname.trim()){
      valErrors.fname="user name is required"
    }
    //trim() empty kehone /white space kehone empty string new yemimelsln yamalet false malet new. so ! is true
    if(!checkForm.lname.trim()){
      valErrors.lname="last name is required"
    }
    if(!checkForm.email.trim()){
      valErrors.email="email is required"
    }
    else if (!/^\S+@\S+\.\S+$/.test(checkForm.email)) {
      valErrors.email = "email is not valid";
    }
    if (!checkForm.phone.trim()) {
      valErrors.phone = "phone is required";
    } else if (!/^[0-9]{10}$/.test(checkForm.phone)) {
      valErrors.phone = "phone is not valid";
    }
    if (!checkForm.message.trim()){
      valErrors.message="message is required"
    }
    setErrors(valErrors)
    if (Object.keys(valErrors).length===0){
        setLoading(true);
        // emailjs
        //   .sendForm("service_cl1trm9", "template_yzbvr5h", form.current, {
      //     publicKey: "dJnv7Pm8MsNNuAeQb",
      emailjs
      .sendForm("service_eue9erk", "template_3hzkc8d", form.current, {
        publicKey: "TGcLo0rNGkIjBNCt9",
          })

          .then(
            (result) => {
              // console.log(result.text);
              // console.log("SUCCESS!");
              toast.success("Thanks alot! Email sent successfully!"); // Display success toast
              // Reset the form
              e.target.reset();
              setLoading(false);
              // form.current.reset()
              // useRef.reset();
            },
            (error) => {
              // console.log("FAILED...", error.text);
              toast.error("Failed to send email. Please try again."); // Display error toast
              setLoading(false);
            }
          );
    }
  
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail} noValidate>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          name="fname"
                          type="text"
                          placeholder="First Name *"
                          onChange={handleChange}
                        />
                        {errors.fname && (
                          <span className="error">{errors.fname}</span>
                        )}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          name="lname"
                          type="text"
                          placeholder="Last Name *"
                          onChange={handleChange}
                        />
                        {errors.lname && (
                          <span className="error">{errors.lname}</span>
                        )}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          name="email"
                          type="email"
                          placeholder="Email Address *"
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <span className="error">{errors.email}</span>
                        )}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          name="phone"
                          type="tel"
                          placeholder="Phone No.*"
                          onChange={handleChange}
                        />
                        {errors.phone && (
                          <span className="error">{errors.phone}</span>
                        )}
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          name="message"
                          rows="6"
                          placeholder="Message *"
                          onChange={handleChange}
                        ></textarea>
                        {errors.message && (
                          <div className="error">{errors.message}</div>
                        )}

                        <button type="submit" value="Send">
                          {loading ? (
                            <SyncLoader color="#36d7b7" />
                          ) : (
                            <div>
                              <span>submit</span>
                            </div>
                          )}
                        </button>
                      </Col>
                    </Row>
                  </form>
                  <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    theme="colored"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
