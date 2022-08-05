import React, { useState, useEffect } from "react";
import { getShows } from "../utils/api";
// import { Link } from "react-router-dom";
import SingleShow from "../components/single-show";
import AddNewShow from "../components/add-show";

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
      <AddNewShow />
      <nav>
        <h1 className="list-title">List of Rosellys Shows</h1>
        {shows.map((show) => {
          return (
            <div className="show-list-items" key={show.show_id}>
              <div>
                <SingleShow id={show.show_id} />
              </div>
            </div>
          );
        })}
      </nav>
    </section>
  );
};

export default Shows;
