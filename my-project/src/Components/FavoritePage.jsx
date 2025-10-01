import React, { useContext } from "react";
import { FavoriteContext } from "./FavoriteContext"; 
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useCart } from "./CartContext";

function FavoritePage() {
  const { favorites, toggleFavorite } = useContext(FavoriteContext);
  const { dispatch } = useCart();

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    alert(`Added "${product.title}" to cart!`);
  };

  if (favorites.length === 0) {
    return <h4 className="text-center mt-5 pt-5 pb-5 mb-5">No favorites added yet</h4>;
  }

  return (
    <Container className="mt-4">
      <h3 className="mb-4">Your Favorites</h3>
      <Row>
        {favorites.map((item) => (
          <Col 
            key={item.id} 
            xs={12} 
            sm={6}   
            className="mb-4"
          >
            <Card className="h-100 flex-row align-items-center">
              <Card.Img  src={item.img} alt={item.brand} 
                style={{ width: "180px", height: "230px", objectFit: "cover" }}/>
              <Card.Body className="d-flex flex-column ms-3">
                <Card.Title>{item.brand}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
                <div className="mb-2">
                  <span style={{ textDecoration: "line-through", color: "gray", marginRight: "10px" }}>
                    ${item.oldPrice}
                  </span>
                  <span>${item.price}</span>
                </div>
                <h5 style={{color:"green"}}>{item.discount}</h5>
                <div className="d-flex gap-4">
                <Button
                  variant="danger"
                  onClick={() => toggleFavorite(item)}
                  className="mt-auto"
                  style={{ width: "fit-content" }}
                >
                  Remove Favorite
                </Button>
                <Button  onClick={() => handleAddToCart(item)} style={{ width: "fit-content" }}>Add to Cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FavoritePage;
