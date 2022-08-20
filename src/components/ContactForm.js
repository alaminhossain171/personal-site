import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ContactForm() {
const [name,setName]=React.useState();
const [email,setEmail]=React.useState();
const [msg,setMsg]=React.useState();
  const form = useRef();
  const notify = () => toast("Message Send Successfully!");
  const sendEmail = (event) => {


  
    console.log('====>',name,email,msg)
  
    // emailjs
    //   .sendForm(
    //     "service_xvjpnah",
    //     "template_ylsk42a",
    //     form.current,
    //     "B4dgHr18bltMGgqGY"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       notify();
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };
  return (
    <>
      <h5 className="text-center fw-bold"> Contact Me</h5>

      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
          onChange={(e)=>setName(e.target.value)}
            type="text"
            placeholder="Enter your Name"
            name="user_name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your Email</Form.Label>
          <Form.Control
           onChange={(e)=>setName(e.target.value)}
            type="email"
            placeholder="Enter your email"
            name="user_email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" onChange={(e)=>setMsg(e.target.msg)}>
          <Form.Label>Enter your message</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" />
        </Form.Group>
        <div className="text-center my-2">
          <Button
            variant="primary"
            className="px-4 "
            type="submit"
            value="Send"
            onClick={sendEmail}

          >
            Send
          </Button>
        </div>
      </Form>
      <ToastContainer />
    </>
  );
}
