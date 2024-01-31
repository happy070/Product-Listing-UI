import React from "react";
import CardItem from "./CardItem";
import jewellery1 from "../assets/Jewellery/jewellery1.jpg";
import jewellery2 from "../assets/Jewellery/jewellery2.jpg";
import jewellery3 from "../assets/Jewellery/jewellery3.jpg";
const Jewellery = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-auto">
        <CardItem
          imageUrl={jewellery1}
          title="Necklace"
          body="Taste the Difference Savor the Goodness! "
          price={49000}
          discountPrice={45000}
        />
        <CardItem
          imageUrl={jewellery2}
          title="Necklace"
          body="Taste the Difference Savor the Goodness! "
          price={55000}
          discountPrice={49000}
        />
        <CardItem
          imageUrl={jewellery3}
          title="Gold Bangles"
          body="Taste the Difference Savor the Goodness! "
          price={30000}
          discountPrice={25000}
        />
      </div>
    </>
  );
};

export default Jewellery;
