import React from "react";
import { useValue } from "../customProvider/CustomItemContext";

const CardModal = () => {
  const { toggleCart, cart, totalPrice, clearCart, totalItem } = useValue();
  return (
    <>
      <div className="mt-[5em] sm:mt-[5em] md:mt-[5em] lg:mt-[5em] flex justify-around bg-red-950 text-white">
        <div
          className="w-full text-center py-4 hover:bg-red-700 cursor-pointer"
          onClick={clearCart}
        >
          Clear
        </div>
        <div
          className="w-full text-center py-4 hover:bg-red-700 cursor-pointer"
          onClick={toggleCart}
        >
          Close
        </div>
      </div>
      <div className="itemContainer flex justify-center">
        <table className="w-11/12 mt-5 text-center border">
          <tr>
            <th className="py-3">Item Name</th>
            <th className="py-3">Item Price</th>
            <th className="py-3">Quantity</th>
          </tr>

          {cart.map((item, index) => (
            <tr key={index}>
              <td className="py-3">{item.name}</td>
              <td className="py-3">{item.price}</td>
              <td className="py-3">{item.quantity}</td>
            </tr>
          ))}
          <tr>
            <td className="text-lg bg-red-950 py-3 text-white">Total</td>
            <td className="text-lg bg-red-950 py-3 text-white">{totalPrice}</td>
            <td className="text-lg bg-red-950 py-3 text-white">{totalItem}</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default CardModal;
