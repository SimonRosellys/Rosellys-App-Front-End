import React, { useEffect, useState } from "react";
import { getSetlists } from "../../utils/api";
import SingleSetlist from "./single-setlist";
import { Button } from "./Setlists.styled";

function SetLists() {
  const [setlists, setSetlists] = useState([]);

  useEffect(() => {
    getSetlists().then((lists) => {
      setSetlists(lists);
    });
  }, []);

  return (
    <>
      <header>
        <h1>SET LISTS</h1>
        <Button a href="/create-setlist">
          CREATE SET LIST
        </Button>
      </header>

      <main>
        <ul>
          {setlists.map((list) => {
            return (
              <li key={list.setlist_id}>
                <SingleSetlist id={list.setlist_id} />
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

export default SetLists;
