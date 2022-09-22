import React, { useState, useEffect } from "react";
import { getShows } from "../../utils/api";
import Moment from "moment";
import SingleShow from "./single-show";
import AddNewShow from "./add-show";
import "reactjs-popup/dist/index.css";
import { PopUpContent } from "./Shows.styled";

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
      <header>
        <h1>SHOWS</h1>
        <AddNewShow />
      </header>

      <main>
        <ul>
          {shows.map((show) => {
            const formatDate = Moment(show.show_date).format("ddd D MMM");
            return (
              <li key={shows.show_id}>
                <PopUpContent
                  trigger={
                    <div>
                      <h4>{show.venue_name}</h4>
                      <h6>{formatDate}</h6>
                    </div>
                  }
                  position="bottom center"
                  modal
                  closeOnDocumentClick
                >
                  <div>
                    <SingleShow id={show.show_id} />
                  </div>
                </PopUpContent>
              </li>
            );
          })}
        </ul>
      </main>
    </section>
  );
};

export default Shows;
