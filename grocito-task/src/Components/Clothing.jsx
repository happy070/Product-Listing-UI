import React from "react";
import CardItem from "./CardItem";
import jeans from "../assets/Clothing/jeans.jpg";
import Hoodie from "../assets/Clothing/Hoodie.jpg";
import kids from "../assets/Clothing/kids.jpg";
import kidsSuit from "../assets/Clothing/kidsSuit.webp";
import puma from "../assets/Clothing/Puma.avif";
import jeansWoman from "../assets/Clothing/jeansWoman.jpg";
import Tshirt from "../assets/Clothing/Tshirt.jpg";
import Suit from "../assets/Clothing/Suit.jpg";
const Clothing = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mx-auto">
        <CardItem
          imageUrl={jeans}
          title="Levi's Jeans"
          body="It is woven, with a hint of stretch, to deliver maximum comfort."
          price={1500}
          discountPrice={999}
        />
        <CardItem
          imageUrl={Hoodie}
          title="US POLO"
          body="U.S. POLO ASSN. captures the authenticity of classic American style"
          price={1000}
          discountPrice={599}
        />
        <CardItem
          imageUrl={kids}
          title="kidzy"
          body="It is woven, with a hint of stretch, to deliver maximum comfort."
          price={400}
          discountPrice={299}
        />
        <CardItem
          imageUrl={kidsSuit}
          title="Kidzy"
          body="Introducing our delightful collection of kids' wear ."
          price={899}
          discountPrice={599}
        />
        <CardItem
          imageUrl={puma}
          title="Puma"
          body="Featuring the iconic Puma logo and sleek designs."
          price={1500}
          discountPrice={999}
        />
        <CardItem
          imageUrl={Tshirt}
          title="Peter EngLand"
          body="Introducing the Peter England T-shirt collection."
          price={599}
          discountPrice={399}
        />
        <CardItem
          imageUrl={jeansWoman}
          title="Levi's"
          body="Introducing the Levi's T-shirt collection."
          price={1500}
          discountPrice={999}
        />
        <CardItem
          imageUrl={Suit}
          title="Raymonds"
          body="Introducing the Raymonds Men Suit collection."
          price={2000}
          discountPrice={1299}
        />
      </div>
    </>
  );
};

export default Clothing;
