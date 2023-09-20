"use client";
"use strict";
import React, { useState } from "react";

export default function doubt() {
  const a = [
    {
      q: "Hello, Here is your personal assistant",
      a: "How can I help you?",
    },
  ];

  const [query, setQuery] = useState("");
  const [question, setQuestion] = useState("");
  const [ans, setAns] = useState("");
  const [arr, setArr] = useState(a);

  const handleSubmit = async (event) => {
    event.preventDefault();
    //Collect the response of the query
    arr.splice(0);
    const OpenAI = require("openai").OpenAI;
    const openai = new OpenAI({
      apiKey: "",
      dangerouslyAllowBrowser: true,
    });
    async function main() {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: query,
          },
        ],
      });
      let data = response.choices[0].message.content;
      console.log(data);

      setAns(data);
    }
    main();
  };

  const addResponse = async (query, ans) => {
    await handleSubmit(event);
    var newData = [
      {
        q: query,
        a: ans,
      },
    ];

    setArr([newData, ...arr]);
    console.log("addResponse done");
    console.log(arr);
  };

  return (
    <div className="container">
      <div>
        <p>{question}</p>
        <br />
        <p>{ans}</p>

        {arr.map((data, idx) => {
          return (
            <li className="list-none" key={idx}>
              <p>{data.q}</p>
              <br />
              <p>{data.a}</p>
            </li>
          );
        })}
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
            arr.splice(0);
            addResponse(query, ans);
            setQuestion(query);
            setQuery("");
          }}
        >
          Enter
        </button>
      </div>
    </div>
  );
}
