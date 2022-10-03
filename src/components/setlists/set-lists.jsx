import React, { useEffect, useState } from "react";
import { getSetlists } from "../../utils/api";
import SingleSetlist from "./single-setlist";
import { Button, Header } from "./Setlists.styled";

function SetLists() {
  const [setlists, setSetlists] = useState([]);

  useEffect(() => {
    getSetlists().then((lists) => {
      setSetlists(lists);
    });
  }, []);

  return (
    <section>
      <Header>
        <h1>SET LISTS</h1>
        <Button a href="/create-setlist">
          CREATE SET LIST
        </Button>
      </Header>

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
    </section>
  );
}

export default SetLists;
