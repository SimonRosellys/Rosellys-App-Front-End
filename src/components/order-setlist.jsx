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

  return (
    <section onClick={() => handleShowMore()}>
      <h4 className="dev-box" onClick={() => handleShowMore()}>
        This is the component that will reorder the list and allow to save
      </h4>
      {isShown && <div>test</div>}

      {/* <Popup trigger={<button> Trigger</button>} position="right center">
        <div>Popup content here !!</div>
      </Popup> */}

      {
        /* map setlist here to render current setOrderedList
      make reorderable react-beautiful */
        // https://www.youtube.com/watch?v=y1w6C9A5a2A
      }
    </section>
  );
}

export default OrderSetlist;
