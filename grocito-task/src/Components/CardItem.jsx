import React from "react";
import { Button, Card } from "react-bootstrap";

const CardItem = (props) => {
  const { imageUrl, title, body, price, discountPrice } = props;
  return (
    <div>
      <Card style={{ width: "15rem", margin: "5px" }}>
        <Card.Img variant="top" style={{ height: "170px" }} src={imageUrl} />
        <Card.Body>
          <Card.Title style={{ fontFamily: "Raleway, sans-serif" }}>
            {title}
          </Card.Title>
          <Card.Text style={{ fontFamily: "Poppins, sans-serif" }}>
            {body}
          </Card.Text>
          <div>
            <strong>Price:</strong> <s>₹{price}</s>
          </div>
          <div>
            <strong>Discount Price:</strong> ₹{discountPrice}
          </div>
          <Button className="mt-2">Add</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardItem;
