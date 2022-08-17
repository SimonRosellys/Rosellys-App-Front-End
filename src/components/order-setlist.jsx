import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function OrderSetlist(unorderedSetlist) {
  // console.log("order-list invoked", unorderedSetlist);
  const [orderedList, setOrderedList] = useState(unorderedSetlist);
  const [isShown, setIsShown] = useState(false);

  const handleShowMore = () => {
    setIsShown((current) => !current);
  };

  console.log("here", unorderedSetlist);

  return (
    <section>
      <h1>test</h1>
    </section>
  );
}

export default OrderSetlist;
