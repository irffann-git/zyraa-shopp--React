import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaUserTie, FaFemale, FaChild, FaCheckCircle, FaShippingFast, FaLock } from "react-icons/fa";
import "./Aboutpage.css";

function Aboutpage() {
  return (
    <Container className="about-container py-5">
    
      <Row className="mb-5 text-center">
        <Col>
          <h1 className="fw-bold">
            About <span className="text-danger">Zyraa Shopp</span>
          </h1>
          <p className="text-muted fs-5 w-75 mx-auto">
            Welcome to <span className="fw-bold text-danger">Zyraa Shopp</span>, your trusted online fashion and lifestyle
            destination. We combine style, comfort, and affordability for everyone making shopping simple, fun, and reliable.
          </p>
        </Col>
      </Row>

      
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <img
            src="https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg"
            alt="About Ziya"
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col md={6}>
          <h2 className="fw-bold mb-3">Who We Are</h2>
          <p className="text-muted fs-5">
            At <span className="fw-bold text-danger">Zyraa</span>, we started with one simple idea to make fashion
            accessible for everyone, everywhere. Whether it’s trendy apparel, timeless classics, or lifestyle essentials, we
            curate collections to keep you stylish without compromising comfort or budget.
          </p>
        </Col>
      </Row>

      <Row className="g-4 text-center mb-5">
        <Col md={4}>
          <Card className="p-4 shadow-sm hover-card">
            <img
              src="https://static.vecteezy.com/system/resources/previews/045/729/459/large_2x/a-young-man-stands-with-arms-outstretched-holding-multiple-shopping-bags-he-is-looking-at-the-camera-with-a-neutral-expression-png.png"
              alt="Men Fashion"
              className="img-fluid rounded mb-3"
            />
            <h4>For Men</h4>
            <p>Trendy casuals, formals, sportswear, and accessories for the modern man.</p>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-4 shadow-sm hover-card">
            <img
              src="https://wallpaperaccess.com/full/1496247.jpg"
              alt="Women Fashion"
              className="img-fluid rounded mb-3 pb-3"
            />
            <h4>For Women</h4>
            <p>From ethnic elegance to stylish western wear fashion that defines you.</p>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-4 shadow-sm hover-card">
            <img
              src="https://i.pinimg.com/originals/61/69/5d/61695d9162eb15614d82ec6bd011501d.jpg"
              alt="Kids Fashion"
              className="img-fluid rounded mb-3"
            />
            <h4>For Kids</h4>
            <p>Fun, colorful, and comfortable fashion designed for little trendsetters.</p>
          </Card>
        </Col>
      </Row>

      <Row className="text-center mb-5">
        <h2 className="fw-bold mb-4">Why Choose Us?</h2>

        <Col md={4}>
          <Card className="p-4 shadow-sm hover-card">
            <img
              src="https://png.pngtree.com/png-clipart/20220918/original/pngtree-premium-quality-label-product-shop-png-image_8622672.png"
              alt="Quality"
              className="img-fluid rounded mb-3"
            />
            <h5>Quality First</h5>
            <p>Every product is carefully checked for durability and comfort.</p>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-4 shadow-sm hover-card">
            <img
              src="https://png.pngtree.com/png-clipart/20230414/original/pngtree-fast-delivery-label-png-image_9056541.png"
              alt="Delivery"
              className="img-fluid rounded mb-3"
            />
            <h5>Fast Delivery</h5>
            <p>Quick and reliable delivery with cash-on-delivery options available.</p>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-4 shadow-sm hover-card">
            <img
              src="https://static.vecteezy.com/system/resources/previews/022/763/820/large_2x/secure-payment-icon-vector.jpg"
              alt="Payments"
              className="img-fluid rounded mb-3"
            />
            <h5>Secure Payments</h5>
            <p>Shop confidently with our safe and easy payment methods.</p>
          </Card>
        </Col>
      </Row>

      
      <Row className="mt-5">
  <Col>
    <div className="mission-section p-5 text-center rounded-4 shadow-lg">
      <h2 className="fw-bold mb-4 text-white">Our Mission</h2>
      <p className="fs-5 text-light">
        At <span className="fw-bold text-danger">Zyraa Shopp</span>, our mission is to go beyond being just an online fashion 
        store we aspire to be a <strong>trusted lifestyle partner</strong> for every customer. 
        We believe shopping should not only be about buying products, but also about 
        <strong> discovering new trends, enjoying convenience, and feeling confident</strong> in 
        every choice you make. Our goal is to make high-quality fashion and lifestyle products 
        accessible to <strong>every home in India and beyond</strong>, ensuring that style and 
        affordability walk hand in hand. 
      </p>
    </div>
  </Col>
</Row>

<Row className="mt-5">
  <Col md={6}>
    <div className="vision-card p-4 rounded-4 shadow-sm text-center">
      <h2 className="fw-bold mb-3"> Our Vision</h2>
      <p className="fs-5">
        The vision of <span className="fw-bold text-danger">Zyraa Shopp</span> is to emerge as one of the most 
        <strong> customer-centric online marketplaces</strong> where people can find, explore, and 
        celebrate their individuality. By blending <strong>fashion and technology</strong>, we aim to 
        build an <strong>inclusive and innovative platform</strong> recognized for trust, reliability, 
        and creativity. 
      </p>
    </div>
  </Col>

  <Col md={6}>
    <div className="commitment-card p-4 rounded-4 shadow-sm text-center">
      <h2 className="fw-bold mb-3"> Our Commitment</h2>
      <p className="fs-5">
        At <span className="fw-bold text-danger">Zyraa Shopp</span>, we are committed to delivering 
        <strong> quality, convenience, and happiness</strong> with every purchase. From 
        <strong> genuine products and secure payments</strong> to <strong>fast doorstep delivery</strong>, 
        we put our customers first always. Your trust is our success. 
      </p>
    </div>
  </Col>
</Row>



    </Container>
  );
}

export default Aboutpage;
