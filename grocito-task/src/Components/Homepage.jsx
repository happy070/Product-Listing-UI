import React, { useState } from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import trolley from "../assets/trolley.png";
import grocery from "../assets/grocery.jpg";
import laptop from "../assets/laptops.jpg";
import jewelry from "../assets/jewelry.jpg";
import clothes from "../assets/clothes.jpg";
import cake from "../assets/cake.jpg";
import headphone from "../assets/headphones.jpg";
import pharma from "../assets/pharma.jpg";
import "../../src/index.css";
import Footer from "./Footer";
import Electronics from "../Components/Electronics";
import Clothing from "./Clothing";
import Grocery from "./Grocery";
import Jewellery from "../Components/Jewellery";
import Medicine from "./Medicine";
import elecIcon from "../assets/icons/plug.png";
import clothe from "../assets/icons/clothes-hanger.png";
import groceryIcon from "../assets/icons/grocery.png";
import JewelleryIcon from "../assets/icons/jewellery.png";
import medicineIcon from "../assets/icons/medicine.png";
const Homepage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Electronics");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const commonStyle = {
    cursor: "pointer",
    marginBottom: "5px",
    backgroundColor: "white",
    color: "black",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
  };
  const selectedStyle = {
    ...commonStyle,
    backgroundColor: "#347aeb",
    color: "white",
  };
  const CategoryView = () => {
    return (
      <>
        <h5 className="text-center category">Categories</h5>
        <Row>
          <Col xs={6} md={12}>
            <ListGroup>
              <ListGroupItem
                onClick={() => handleCategoryClick("Electronics")}
                style={
                  selectedCategory === "Electronics"
                    ? selectedStyle
                    : commonStyle
                }
              >
                <strong>Electronics &nbsp;</strong>
                <span>
                  <img
                    src={elecIcon}
                    style={{ height: 20, width: 20 }}
                    alt="#"
                  />
                </span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col xs={6} md={12}>
            <ListGroup>
              <ListGroupItem
                onClick={() => handleCategoryClick("Clothing")}
                style={
                  selectedCategory === "Clothing" ? selectedStyle : commonStyle
                }
              >
                <strong>Clothing &nbsp;</strong>
                <span>
                  <img src={clothe} style={{ height: 20, width: 20 }} alt="#" />
                </span>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={12}>
            <ListGroup>
              <ListGroupItem
                onClick={() => handleCategoryClick("Grocery")}
                style={
                  selectedCategory === "Grocery" ? selectedStyle : commonStyle
                }
              >
                <strong>Grocery &nbsp;</strong>
                <span>
                  <img
                    src={groceryIcon}
                    style={{ height: 20, width: 20 }}
                    alt="#"
                  />
                </span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col xs={6} md={12}>
            <ListGroup>
              <ListGroupItem
                onClick={() => handleCategoryClick("Medicine")}
                style={
                  selectedCategory === "Medicine" ? selectedStyle : commonStyle
                }
              >
                <strong>Medicines &nbsp;</strong>
                <span>
                  <img
                    src={medicineIcon}
                    style={{ height: 20, width: 20 }}
                    alt="#"
                  />
                </span>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        <ListGroup>
          <ListGroupItem
            className="jewel"
            onClick={() => handleCategoryClick("Jewellery")}
            style={
              selectedCategory === "Jewellery" ? selectedStyle : commonStyle
            }
          >
            <strong>Jewellery &nbsp;</strong>
            <span>
              <img
                src={JewelleryIcon}
                alt="#"
                style={{ height: 20, width: 20 }}
              />
            </span>
          </ListGroupItem>
        </ListGroup>
      </>
    );
  };
  const ProductView = () => {
    return (
      <>
        <div className="d-flex">
          {selectedCategory === null && <Electronics />}
          {selectedCategory === "Electronics" && <Electronics />}
          {selectedCategory === "Clothing" && <Clothing />}
          {selectedCategory === "Grocery" && <Grocery />}
          {selectedCategory === "Jewellery" && <Jewellery />}
          {selectedCategory === "Medicine" && <Medicine />}
        </div>
      </>
    );
  };

  return (
    <>
      <div>
        <Container
          style={selectedStyle}
          fluid
          className="d-flex justify-content-center align-items-center text-center"
        >
          <div>
            <h2 style={{ fontFamily: "Sixtyfour, sans-serif" }}>
              Welcome to Grocito...
            </h2>
            <h6 style={{ fontFamily: "Poppins, sans-serif" }}>
              Discover the ultimate all-in-one shopping experience with Grocito.
              <span>
                <img
                  src={trolley}
                  style={{ height: 30, marginTop: 0 }}
                  alt="image not Found"
                />
              </span>
            </h6>
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
            <img
              style={{
                height: "200px",
                width: "300px",
                borderRadius: "25px",
                margin: 10,
              }}
              className="scroll-item"
              src={pharma}
              text="First slide"
            />
          </div>
        </div>

        <Container fluid className="px-5 pt-5">
          <Row>
            <Col
              md={12}
              lg={2}
              style={{
                paddingTop: "20px",
                borderRight: "1px solid #ccc",
                backgroundColor: "#f8f9fa",
              }}
            >
              <CategoryView />
            </Col>
            <Col md={10}>
              <ProductView className="overflow-auto" />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
