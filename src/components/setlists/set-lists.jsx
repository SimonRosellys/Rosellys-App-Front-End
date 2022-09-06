import React, { useEffect, useState } from "react";
import { getSetlists } from "../../utils/api";
import SingleSetlist from "./single-setlist";

function Set_Lists() {
  const [setlists, setSetlists] = useState([]);

  useEffect(() => {
    getSetlists().then((lists) => {
      setSetlists(lists);
    });
  }, []);

  return (
    <>
      <header className="title-and-button">
        <h1 className="list-title">SET LISTS</h1>
        <a href="/create-setlist" className="button-standard">
          CREATE SET LIST
        </a>
      </header>

      <main>
        <ul>
          {setlists.map((list) => {
            return (
              <li className="show-list-items" key={list.setlist_id}>
                <SingleSetlist id={list.setlist_id} />
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

export default Set_Lists;
