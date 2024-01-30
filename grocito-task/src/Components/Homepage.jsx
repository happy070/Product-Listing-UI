import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import trolley from "../assets/trolley.png";
import grocery from "../assets/grocery.jpg";
import laptop from "../assets/laptops.jpg";
import jewelry from "../assets/jewelry.jpg";
import iphone from "../assets/iphone.jpg";
import clothes from "../assets/clothes.jpg";
import cake from "../assets/cake.jpg";
import headphone from "../assets/headphones.jpg";
import pharma from "../assets/pharma.jpg";
import "../../src/index.css";
const Homepage = () => {
  const MyStyle = {
    backgroundColor: "#347aeb",
    color: "white",
    height: "100px",
  };
  const CategoryView = () => {
    return (
      <>
        <h2>This Category view</h2>
      </>
    );
  };
  const ProductView = () => {
    return (
      <>
        <h2>This is product View</h2>
      </>
    );
  };

  return (
    <>
      <div>
        <Container
          style={MyStyle}
          fluid
          className="d-flex justify-content-center align-items-center text-center"
        >
          <div>
            <h3>Welcome to Grocito...</h3>
            <h6>
              Discover the ultimate all-in-one shopping experience with Grocito.
            </h6>
          </div>
          <div>
            {" "}
            <span>
              <img
                src={trolley}
                style={{ height: 40, marginTop: 32 }}
                alt="image not Found"
              />
            </span>
          </div>
        </Container>
        <div className="overflow-auto">
          <div className="d-flex scroll-container">
            <img
              style={{
                height: "200px",
                width: "300px",
                borderRadius: "25px",
                margin: 10,
              }}
              className="scroll-item"
              src={headphone}
              text="First slide"
            />
            <img
              style={{
                height: "200px",
                width: "300px",
                borderRadius: "25px",
                margin: 10,
              }}
              className="scroll-item"
              src={laptop}
              text="First slide"
            />
            <img
              style={{
                height: "200px",
                width: "300px",
                borderRadius: "25px",
                margin: 10,
              }}
              className="scroll-item"
              src={cake}
              text="First slide"
            />
            <img
              style={{
                height: "200px",
                width: "300px",
                borderRadius: "25px",
                margin: 10,
              }}
              className="scroll-item"
              src={jewelry}
              text="First slide"
            />
            <img
              style={{
                height: "200px",
                width: "300px",
                borderRadius: "25px",
                margin: 10,
              }}
              className="scroll-item"
              src={clothes}
              text="First slide"
            />
            <img
              style={{
                height: "200px",
                width: "300px",
                borderRadius: "25px",
                margin: 10,
              }}
              className="scroll-item"
              src={grocery}
              text="First slide"
            />
          </div>
        </div>

        <Container fluid className="px-5 pt-5">
          <Row>
            <Col md={2}>
              <CategoryView />
            </Col>
            <Col md={10}>
              <ProductView />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Homepage;
