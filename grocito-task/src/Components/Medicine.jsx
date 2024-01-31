import React from "react";
import CardItem from "./CardItem";
import tablet1 from "../assets/tablets/vicks.jpg";
import tablet2 from "../assets/tablets/disprin-tablet.jpg";
const Medicine = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 mx-auto">
        <CardItem
          imageUrl={tablet1}
          title="Vicks"
          body="Cold And Cough"
          price={60}
          discountPrice={50}
        />
        <CardItem
          imageUrl={tablet2}
          title="Disprin"
          body="Headache Relief in mins"
          price={40}
          discountPrice={34}
        />
      </div>
    </>
  );
};

export default Medicine;
