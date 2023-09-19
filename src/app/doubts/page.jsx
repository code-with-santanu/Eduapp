"use client";
"use strict";
import React, { useState } from "react";

export default function doubt() {
  const [query, setQuery] = useState("");
  const [ans, setAns] = useState("");
  const [arr, setArr] = useState([
    {
      q: "Hello, Here is your personal assistant",
      a: "How can I help you?",
    },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();

    //Collect the response of the query

    const axios = require("axios");

    const apiKey = "";
    const client = axios.create({
      headers: { Authorization: "Bearer " + apiKey },
    });

    const params = {
      prompt: query,
      max_tokens: 200,
      temperature: 0.07,
    };

    client
      .post("https://api.openai.com/v1/engines/davinci/completions", params)
      .then((result) => {
        var data = result.data.choices[0].text;
        console.log(data);
        console.log(arr);
        setAns(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addResponse = (query, ans) => {
    let newData = [
      {
        q: query,
        a: ans,
      },
    ];
    setArr([...arr, newData]);
    console.log("addResponse done");
  };

  return (
    <div className="container">
      <div>
        <p>{query}</p>
        <br />
        <p>{ans}</p>

        {arr.map((data, idx) => (
          <li className="list-none" key={idx}>
            <p>{data.q}</p>
            <br />
            <p>{data.a}</p>
          </li>
        ))}
      </div>
      <div className="doubts">
        <input
          placeholder="Ask your doubt here..."
          value={query}
          onChange={({ target }) => setQuery(target?.value)}
        />
        <button
          type="submit"
          onClick={() => {
            handleSubmit(event);
            addResponse(query, ans);
          }}
        >
          Enter
        </button>
      </div>
    </div>
  );
}
