import React, { useState, useContext } from "react";
import { productLF } from "./productLF";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FavoriteContext } from "../FavoriteContext";
import { useCart } from "../CartContext";

function LFpage() {
  const { favorites, toggleFavorite } = useContext(FavoriteContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const platformFee = 10;
  const { dispatch } = useCart();

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    alert(`Added "${product.title}" to cart!`);
  };

  const handlePlaceOrder = () => {
    alert(`Order placed for ${quantity} ${selectedProduct.brand}!`);
    setQuantity(1);
    setSelectedProduct(null);
  };


  if (selectedProduct) {
    const priceTotal = selectedProduct.oldPrice * quantity;
    const discountTotal = (selectedProduct.oldPrice - selectedProduct.price) * quantity;
    const totalAmount = selectedProduct.price * quantity + platformFee;
    const saveAmount = priceTotal - totalAmount;

    return (
      <Container className="mt-5">
              <Row>
            
                <Col md={7}>
                  <Card style={{ padding: "20px" }}>
                    <div className="d-flex gap-4">
                      <Col md={6}>
                        <Card.Img className="rounded-pill" src={selectedProduct.img} />
                      </Col>
                      <Col md={6} style={{ alignContent: "center" }}>
                        <h2>{selectedProduct.brand}</h2>
                        <p>{selectedProduct.desc}</p>
                        <h4 ><span style={{ textDecoration: "line-through", color: "gray" }} > ${selectedProduct.oldPrice}</span>
                         <span>  ${selectedProduct.price}</span>
                        </h4>
                        <h5 style={{color:"green"}}>${selectedProduct.discount}</h5>
                        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", margin: "1rem 0" }}>
                          <Button
                            style={{ border: "1px solid black", backgroundColor: "white", color: "black", borderRadius: "1cm" }}
                            onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
                          >-</Button>
                          <span style={{ border: "1px solid black",borderRadius:"2cm", padding: "5px 15px", color: "red" }}>{quantity}</span>
                          <Button
                            style={{ border: "1px solid black", backgroundColor: "white", color: "black", borderRadius: "1cm" }}
                            onClick={() => setQuantity((q) => q + 1)}
                          >+</Button>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                          <Button onClick={handlePlaceOrder} variant="success">Place Order</Button>
                          <Button onClick={() => setSelectedProduct(null)} variant="secondary" className="ms-2">Cancel</Button>
                        </div>
                      </Col>
                    </div>
                  </Card>
                </Col>
      
               
                <Col md={5}>
                  <Card style={{ padding: "1rem", backgroundColor: "#f8f9fa" }}>
                    <h4>Order Summary</h4>
                    <hr />
                    <p style={{ display: "flex", justifyContent: "space-between" }}>
                      Price ({quantity} item{quantity > 1 ? "s" : ""}): <strong>${priceTotal}</strong>
                    </p>
                    <p style={{ display: "flex", justifyContent: "space-between" }}>
                      Discount: <strong>${discountTotal}</strong>
                    </p>
                    <p style={{ display: "flex", justifyContent: "space-between" }}>
                      Platform Fee: <strong>${platformFee}</strong>
                    </p>
                    <hr />
                    <h5 style={{ display: "flex", justifyContent: "space-between" }}>
                      Total Amount: <strong>${totalAmount}</strong>
                    </h5>
                    <hr />
                    <h4 style={{ color: "green" }}>You will save ${saveAmount} on this order</h4>
                  </Card>
                </Col>
              </Row>
            </Container>
    );
  }


  return (
    <Container className="mt-4 mb-3">
      <h4>
        Buy Louis Philippe Shoe's Collection Online{" "}
        <span style={{ fontSize: "13px", color: "gray" }}>* 286,130 items</span>
      </h4>

      <Row className="mt-5">
        {productLF.map((LF) => {
          const isFav = favorites.some(fav => fav.id === LF.id);
          return (
            <Col key={LF.id} lg={3} md={6} className="mb-4">
              <Card className="cus-card">
                <Card.Img src={LF.img} alt={LF.brand} />
                <Card.Title>
                  <div className="d-flex gap-2 mt-1"><Button variant="info" style={{ height: "20px", paddingTop: "0" }}>
                   <h6 style={{ paddingTop: "0" }}>best seller</h6></Button>
                    <Button variant="info" style={{ height: "20px", paddingTop: "0" }}>
                       <h6 style={{ paddingTop: "0" }}>latest style</h6> </Button>
                       <Button variant={isFav ? "danger" : "outline-danger"}style={{ height: "20px", paddingTop: "0" }}
                          onClick={() => toggleFavorite(LF)} >
                            <h6 style={{ paddingTop: "0" }}>{isFav ? "♥" : "♡"}</h6></Button>
                  </div>
                  <h4>{LF.brand}</h4>
                  <p className="fs-6 m-0">{LF.desc}</p>
                  <h6>
                    ${LF.price} <span style={{ color: "gray", textDecoration: "line-through" }}>${LF.oldPrice}</span>{" "}
                    <span style={{ color: "green" }}>{LF.discount}</span>
                  </h6>
                </Card.Title>
                <div className="d-flex gap-2 justify-content-center">
                  <Button variant="primary" onClick={() => handleAddToCart(LF)}>Add to Cart</Button>
                  <Button variant="success" onClick={() => setSelectedProduct(LF)}>Shop Now</Button>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>

      <Container className="d-flex mt-5 mb-5 justify-content-center gap-2">
        <Button variant="danger">1</Button>
        <Button variant="danger">2</Button>
        <Button variant="danger">3</Button>
        <Button variant="danger">4</Button>
        <Button variant="danger">5</Button>
        <Button variant="danger">more..</Button>
      </Container>
    </Container>
  );
}

export default LFpage;
