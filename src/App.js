import React, { useState, useEffect } from "react";
import "./App.css";

const API_KEY = "e7a46a487ec841a4bfb1ff4f9f7d72bf";

function App() {
  const [search, setSearch] = useState("");
  const [query, getQuery] = useState("");

  const updateSearch = event => {
    setSearch(event.target.value);
    // console.log(search);
  };

  const submitSearch = event => {
    event.preventDefault();
    getQuery(search);

    setSearch("");
    //console.log(query);
  };

  const getData = async () => {
    console.log("get Data", query);
    if (query) {
      const response = await fetch(
        `https://api.weatherbit.io/v2.0/forecast/daily?postal_code=${query}&country=US&key=${API_KEY}`
      );
      const data = await response.json();
      console.log(data);
    }
  };

  useEffect(() => {
    getData();
  }, [query]);

  return (
    <div>
      hello
      <form>
        {" "}
        Enter your zip code:
        <input type='text' value={search} onChange={updateSearch}></input>
        <button type='submit' onClick={submitSearch}>
          search
        </button>
      </form>
    </div>
  );
}

export default App;
