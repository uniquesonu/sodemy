import React from "react";

const Total = ({
  total,
  subTotal,
  discount,
}: {
  total: number;
  subTotal: number;
  discount: number;
}) => {
  return (
    <div className="w-full h-64 p-6 bg-foreground rounded-lg flex flex-col justify-between text-background top-28 sticky">
      <div className="flex flex-col justify-between gap-4">
        <p className="text-3xl font-bold">Total:</p>
        <div>
          <span className="flex gap-4">
            <p className="text-xl font-semibold">₹ {total}</p>
            <p className="text-lg font-semibold line-through">₹ {subTotal}</p>
          </span>
          <p className="text-gray-400">(₹ {discount} off)</p>
        </div>
      </div>
      <div className="flex mt-8">
        <button className="bg-purple-500 text-white px-6 py-3 rounded-lg w-full">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Total;
