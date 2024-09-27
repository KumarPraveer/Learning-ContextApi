import React from "react";
import items from "../data";
import ItemCard from "./ItemCard";

const Items = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center mt-[7em]">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            id={item.id}
            name={item.itemName}
            price={item.itemPrice}
          />
        ))}
      </div>
    </>
  );
};

export default Items;
