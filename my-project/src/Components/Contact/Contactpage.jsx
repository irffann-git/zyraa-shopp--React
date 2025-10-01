import React from 'react'
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import './Contactpage.css'


function Contactpage() {
  return (
    <Container className="mt-5">

      <Row className="mb-4">
        <Col className="text-center">
          <h1 className="fw-bold">Contact Us</h1>
          <p className="text-muted fs-5">
            Have questions or feedback? We’d love to hear from you. Reach out to
            <span className="text-danger fw-bold"> Zyraa</span> anytime!
          </p>
        </Col>
      </Row>

      <Row className="g-4">
 
        <Col md={7}>
          <Card className="p-4 shadow-sm border-0 bg-dark text-white">
            <h3 className="mb-3">Send Us a Message</h3>
            <Form>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Subject" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Write your message" />
              </Form.Group>

              <Button variant="danger" type="submit" className="px-5">
                Send Message
              </Button>
            </Form>
          </Card>
        </Col>

        <Col md={5}>
          <Card className="p-4 shadow-sm border-0 bg-dark h-100 text-white text-center" style={{lineHeight:"35px"}}>
            <h3 className="mb-3">Contact Information</h3>
            <p>
              <strong>Address:</strong> <br />
              Zyraa Shopp Pvt. Ltd. <br />
              123 Fashion Street, MG Road <br />
              Bengaluru, Karnataka, India
            </p>
            <p>
              <strong>Phone:</strong> <br /> +91 9562390365
            </p>
            <p>
              <strong>Email:</strong> <br /> zyraashopp@gmail.com
            </p>

            <h5 className="mt-4">Follow Us</h5>
            <p>
              <a href="#" className="me-3">Facebook</a>
              <a href="#" className="me-3">Instagram</a>
              <a href="#">Twitter</a>
            </p>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5 mb-5">
        <Col>
          <Card className="shadow-sm border-5">
            <iframe
              title="Ziya Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8888888!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v0000000000"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contactpage
