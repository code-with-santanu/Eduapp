"use client";
"use strict";
import React, { useState } from "react";

export default function doubt() {
  const [query, setQuery] = useState("");
  const [ans, setAns] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    //Collect the response of the query

    const axios = require("axios");

    const apiKey = "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";
    const client = axios.create({
      headers: { Authorization: "Bearer " + apiKey },
    });

    const params = {
      prompt: query,
      max_tokens: 200,
    };

    client
      .post("https://api.openai.com/v1/engines/davinci/completions", params)
      .then((result) => {
        var data = result.data.choices[0].text;
        console.log(params.prompt + "\n" + result.data.choices[0].text);
        setAns(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div>
        <p>{ans}</p>
      </div>
      <div className="doubts">
        <input
          placeholder="Ask your doubt here..."
          value={query}
          onChange={({ target }) => setQuery(target?.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Enter
        </button>
      </div>
    </div>
  );
}
