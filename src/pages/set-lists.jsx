import React, { useEffect, useState } from "react";
import { getSetlists } from "../utils/api";
import SingleSetlist from "../components/single-setlist";
import CreateSetlist from "../components/create-setlist";

function Set_Lists() {
  const [setlists, setSetlists] = useState([]);

  useEffect(() => {
    getSetlists().then((lists) => {
      setSetlists(lists);
      // setIsLoading(false);
    });
  }, []);

  // console.log(setlists);

  return (
    <section>
      <CreateSetlist />
      <nav>
        <h1 className="list-title">List of Rosellys Set Lists</h1>
        {setlists.map((list) => {
          return (
            <div className="show-list-items" key={list.setlist_id}>
              <div>
                <SingleSetlist id={list.setlist_id} />
              </div>
            </div>
          );
        })}
      </nav>
    </section>
  );
}

export default Set_Lists;
