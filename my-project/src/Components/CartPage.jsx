import React, { useState } from "react";
import { useCart } from "./CartContext";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function CartPage() {
  const { state, dispatch } = useCart();
  const platformFee = 10;


  const [quantities, setQuantities] = useState(
    state.cartItems.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {})
  );

  if (state.cartItems.length === 0)
    return (
      <h3 className="text-center mt-5 mb-5 pb-5 pt-5">Your cart is empty</h3>
    );

  const handleQuantityChange = (id, delta) => {
    setQuantities({
      ...quantities,
      [id]: Math.max(1, quantities[id] + delta),
    });
  };

  const handlePlaceOrder = () => {
    alert("Order successfully placed!");
  
    dispatch({ type: "CLEAR_CART" });
   
    setQuantities({});
  };

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const totalPrice = state.cartItems.reduce(
    (sum, item) => sum + item.price * quantities[item.id],
    0
  );
  const totalOldPrice = state.cartItems.reduce(
    (sum, item) => sum + item.oldPrice * quantities[item.id],
    0
  );
  const totalDiscount = totalOldPrice - totalPrice;
  const totalAmount = totalPrice + platformFee;

  return (
    <Container fluid className="mt-5">
      <Row>
  
        <Col lg={8} md={12} style={{ maxHeight: "80vh", overflowY: "auto" }}>
          {state.cartItems.map((item) => (
            <Card
              key={item.id}
              className="mb-3 p-3 flex-column flex-md-row align-items-center"
            >
              <Card.Img
                src={item.img}
                alt={item.brand}
                style={{ width: "180px", height: "230px", objectFit: "cover" }}
                className="mb-3 mb-md-0"
              />
              <Card.Body className="d-flex flex-column ms-md-3 w-100">
                <Card.Title>{item.brand}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
                <div className="mb-2">
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "gray",
                      marginRight: "10px",
                    }}
                  >
                    ${item.oldPrice}
                  </span>
                  <span>${item.price}</span>
                </div>
                <h5 style={{ color: "green" }}>{item.discount}</h5>
                <div className="d-flex flex-wrap gap-2 mt-2 align-items-center">
                  <Button
                    style={{
                      backgroundColor: "white",
                      border: "1px solid black",
                      color: "black",
                    }}
                    onClick={() => handleQuantityChange(item.id, -1)}
                  >
                    {" "}
                    -{" "}
                  </Button>
                  <span
                    style={{
                      padding: "5px 10px",
                      border: "1px solid",
                      borderRadius: "2cm",
                    }}
                  >
                    {quantities[item.id]}{" "}
                  </span>
                  <Button
                    style={{
                      backgroundColor: "white",
                      border: "1px solid black",
                      color: "black",
                    }}
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    +
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove{" "}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Col>

    
        <Col lg={4} md={12} className="mt-4 mt-lg-0">
          <Card style={{ position: "sticky", top: "20px", padding: "1rem" }}>
            <h4>Order Summary</h4>
            <hr />
            <p className="d-flex justify-content-between">
              Price ({state.cartItems.length} items):{" "}
              <strong>${totalPrice}</strong>
            </p>
            <p className="d-flex justify-content-between text-success">
              Discount: <strong>${totalDiscount}</strong>
            </p>
            <p className="d-flex justify-content-between">
              Platform Fee: <strong>${platformFee}</strong>
            </p>
            <hr />
            <h5 className="d-flex justify-content-between">
              Total Amount: <strong>${totalAmount}</strong>
            </h5>
            <hr />
            <h5 style={{ color: "green" }}>
              You will save ${totalDiscount} on this order
            </h5>
            <Button
              variant="success"
              className="w-100 mt-3"
              onClick={handlePlaceOrder}
            >
              Place Order
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CartPage;
