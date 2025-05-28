import React from "react";

export default function CartPage({ cardDetails }) {
  console.log("cardDetails", cardDetails);
  return (
    <div>
      {cardDetails.map((item) => {
        <>
          <span>{item.name}</span>
          <span>{item.price}</span>
        </>;
      })}
    </div>
  );
}
