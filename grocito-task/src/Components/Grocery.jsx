import React from "react";
import CardItem from "./CardItem";
import bread from "../assets/Grocery/bread.jpg";
import fruits from "../assets/Grocery/fruits.avif";
import vegitable from "../assets/Grocery/vegitable.avif";
import maggi from "../assets/Grocery/Maggi.jpg";
import namkeen from "../assets/Grocery/namkeen.webp";
import oil from "../assets/Grocery/oil.webp";
import toothpaste from "../assets/Grocery/toothpaste.webp";
import vim from "../assets/Grocery/vim.jpg";
const Grocery = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mx-auto">
        <CardItem
          imageUrl={bread}
          title="Britania Bread"
          body="Introducing Britannia Bread A good Choice"
          price={70}
          discountPrice={62}
        />
        <CardItem
          imageUrl={vim}
          title="vim Bar"
          body="Here is the perfect Solution for the Dish wash."
          price={50}
          discountPrice={30}
        />
        <CardItem
          imageUrl={maggi}
          title="Maggi"
          body="Introducing 2 Minutes Noodles"
          price={14}
          discountPrice={12}
        />
        <CardItem
          imageUrl={oil}
          title="Sunflower Oil"
          body="Low Colestrol Oil , Stay Healthy Stay Safe"
          price={150}
          discountPrice={120}
        />
        <CardItem
          imageUrl={namkeen}
          title="Namkeen"
          body="Savor the Crunch, Embrace the Flavor."
          price={160}
          discountPrice={120}
        />
        <CardItem
          imageUrl={toothpaste}
          title="Colgate"
          body="Unleash Your Brightest Smile Every Day!"
          price={200}
          discountPrice={159}
        />
        <CardItem
          imageUrl={fruits}
          title="Fruits"
          body="Taste the Difference Savor the Goodness! "
          price={200}
          discountPrice={149}
        />
        <CardItem
          imageUrl={vegitable}
          title="Vegitables"
          body="A Garden of Goodness Right in Your Kitchen"
          price={200}
          discountPrice={159}
        />
      </div>
    </>
  );
};

export default Grocery;
