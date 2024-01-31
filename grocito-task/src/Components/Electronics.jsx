import React from "react";
import CardItem from "./CardItem";
import headphones from "../assets/Electronics/headphones.jpg";
import cooler from "../assets/Electronics/Cooler.jpg";
import mixer from "../assets/Electronics/Mixer.jpg";
import speaker from "../assets/Electronics/speaker.jpg";
import refrigerator from "../assets/Electronics/Refrigerator1.avif";
import TV from "../assets/Electronics/TV.avif";
import WashingMachine from "../assets/Electronics/washingmachine.webp";
import Heater from "../assets/Electronics/Heater1.jpg";

const Electronics = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mx-auto">
        <CardItem
          imageUrl={headphones}
          title="Sony Headphones"
          body="High-quality wireless audio with BLUETOOTH® and LDAC technology"
          price={2000}
          discountPrice={1599}
        />
        <CardItem
          imageUrl={cooler}
          title="Bajaj Cooler"
          body="Bajaj Frio 23L Personal Air Cooler with Honeycomb Pads."
          price={2000}
          discountPrice={1599}
        />
        <CardItem
          imageUrl={mixer}
          title="MahaRaja Mixer"
          body="It was a mixer grinder that offered three types of grinding solutions."
          price={2000}
          discountPrice={1599}
        />
        <CardItem
          imageUrl={speaker}
          title="Boat Home Theater"
          body="High-quality wireless audio with BLUETOOTH® and LDAC technology"
          price={2000}
          discountPrice={1599}
        />
        <CardItem
          imageUrl={refrigerator}
          title="LG Refrigerator"
          body=" LG Side-By-Side Refrigerator bringing together efficient cooling."
          price={2000}
          discountPrice={1599}
        />
        <CardItem
          imageUrl={TV}
          title="Samsung TV"
          body="High picture quality And multimedia features. Full HD Resolution"
          price={2000}
          discountPrice={1599}
        />
        <CardItem
          imageUrl={WashingMachine}
          title="LG WashingMachine"
          body=" LG 5 Star with Steam Inverter Direct Drive Technology.A Smart Tech. "
          price={2000}
          discountPrice={1599}
        />
        <CardItem
          imageUrl={Heater}
          title="USHA Heater"
          body="High-quality wireless audio with BLUETOOTH® and LDAC technology."
          price={2000}
          discountPrice={1599}
        />
      </div>
    </>
  );
};

export default Electronics;
