import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useAuth } from "./LogSignContext";

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      navigate("/");
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0b0b0bff 0%, #474646ff 100%)",
        padding: "20px",
      }}
    >
      <Card className="p-4 p-md-5 shadow-lg rounded-4" style={{ maxWidth: "450px", width: "100%" }}>
        <h2 className="text-center mb-4" style={{ color: "#201e1fff", fontWeight: "700" }}>
          Login
        </h2>
        {error && <p className="text-danger text-center">{error}</p>}
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ borderRadius: "0.5rem", padding: "0.75rem" }}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ borderRadius: "0.5rem", padding: "0.75rem" }}
            />
          </Form.Group>
          <Button
            type="submit"
            className="w-100 mb-3"
            style={{
              background: "linear-gradient(90deg, #060606ff, #5b5a5aff)",
              border: "none",
              padding: "0.75rem",
              fontWeight: "600",
              fontSize: "1rem",
              borderRadius: "0.5rem",
              transition: "all 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = 0.9)}
            onMouseOut={(e) => (e.currentTarget.style.opacity = 1)}
          >
            Login
          </Button>
        </Form>
        <p className="text-center mt-2" style={{ fontSize: "0.9rem" }}>
          Don’t have an account?{" "}
          <span
            style={{ color: "#f80834ff", cursor: "pointer", fontWeight: "600" }}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>
      </Card>
    </div>
  );
}

export default LoginPage;
