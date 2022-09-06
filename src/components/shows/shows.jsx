import React, { useState, useEffect } from "react";
import { getShows } from "../../utils/api";
import Moment from "moment";
import SingleShow from "./single-show";
import AddNewShow from "./add-show";
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

  if (isLoading) return <p>Loading your shows, please wait</p>;

  return (
    <section>
      <header className="title-and-button">
        <h1 className="title-header">SHOWS</h1>
        <AddNewShow className="title-button" />
      </header>

      <main>
        <ul>
          {shows.map((show) => {
            const formatDate = Moment(show.show_date).format("ddd D MMM");
            return (
              <li className="show-list-items" key={shows.show_id}>
                <Popup
                  trigger={
                    <div>
                      <h4>{show.venue_name}</h4>
                      <h6>{formatDate}</h6>
                    </div>
                  }
                  position="bottom center"
                >
                  <div className="modal-content">
                    <SingleShow id={show.show_id} />
                  </div>
                </Popup>
              </li>
            );
          })}
        </ul>
      </main>
    </section>
  );
};

export default Shows;
