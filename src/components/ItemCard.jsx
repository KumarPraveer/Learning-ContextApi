import React, { useContext } from "react";
import { useValue } from "../customProvider/CustomItemContext";

const ItemCard = (props) => {
  let { id, name, price } = props;

  let { handleAddToCart, handleRemoveFromCart } = useValue();

  return (
    <>
      <div className="card  bg-zinc-700 text-white flex flex-col  m-5 p-4 w-full sm:w-full lg:w-3/12 md:w-5/12   text-center rounded-lg shadow-lg">
        <h2 className="p-3">Item Name: {name}</h2>
        <h2>Item Price: {price}</h2>
        <button
          className="bg-green-950 hover:bg-green-600 py-2 mt-2 rounded-lg"
          onClick={() => handleAddToCart({ id, name, price })}
        >
          Add to Cart
        </button>
        <button
          className="bg-red-950 hover:bg-red-600 py-2 mb-4 rounded-lg"
          onClick={() => handleRemoveFromCart(id, price)}
        >
          Remove from Cart
        </button>
      </div>
    </>
  );
};

export default ItemCard;
