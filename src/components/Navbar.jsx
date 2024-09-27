import React, { useContext } from "react";
import { useValue } from "../customProvider/CustomItemContext";

const Navbar = () => {
  // const { totalItem, totalPrice } = useContext(totalItemContext);

  const { totalItem, totalPrice, handleReset, toggleCart } = useValue();

  return (
    <div className="fixed w-full top-0">
      <div className="bg-zinc-700 text-white py-6 text-lg">
        <div className="flex justify-around">
          <h2 className="hidden md:block">Total Price : {totalPrice}</h2>
          <h2 className="hidden md:block">Item Count : {totalItem}</h2>
          <div>
            <button
              className="bg-gradient-to-t bg-green-950 px-6 py-1 rounded-md hover:bg-green-600 mr-4"
              onClick={toggleCart}
            >
              Cart
            </button>
            <button
              className="bg-gradient-to-t bg-red-950 px-6 py-1 rounded-md hover:bg-red-600"
              onClick={() => handleReset()}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
