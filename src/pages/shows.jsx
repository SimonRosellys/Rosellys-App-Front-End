import React, { useState, useEffect } from "react";
import { getShows } from "../utils/api";
import SingleShow from "../components/single-show";
import AddNewShow from "../components/add-show";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Shows = () => {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getShows().then((shows) => {
      setShows(shows);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Don't have a cow man, your shows are on the way</p>;

  return (
    <section>
      <div className="title-and-button">
        <h1 className="title-header">SHOWS</h1>
        <AddNewShow className="title-button" />
      </div>
      <nav>
        {shows.map((show) => {
          return (
            <div className="show-list-items" key={show.show_id}>
              <Popup
                trigger={<h4>{show.venue_name}</h4>}
                position="bottom center"
              >
                <div className="modal-content">
                  <SingleShow id={show.show_id} />
                </div>
              </Popup>
            </div>
          );
        })}
      </nav>
    </section>
  );
};

export default Shows;
