"use client";
import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
export default function Doubts() {
  // const a = [
  //   {
  //     q: "Hello, Here is your personal assistant",
  //     a: "How can I help you?",
  //   },
  // ];

  const [query, setQuery] = useState("");
  const [question, setQuestion] = useState("");
  const [ans, setAns] = useState("");
  const [show, setShow] = useState(false);
  const [arr, setArr] = useState([]);

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
      try {
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
			} catch (error) {
				toast.error("API key is not present");
			}
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
		
		<div className="flex justify-center py-20">
			<Toaster/>
      <div className="flex flex-col w-2/3 items-center">
      {(!show) && <div>
          <div className="text-2xl text-center font-bold bg-white px-6 py-2 rounded-lg text-orange-500 shadow mb-20">Hello, Here is your personal assistant</div>
          <div className="text-8xl text-center py-10 font-extrabold text-orange-500 drop-shadow-md">GEEKTOPIA</div>
          <div className="font-semibold text-blue-900 text-2xl text-center ">How can I help you?</div>
      </div>}
      {show && <div className="w-full">
        <div className="text-2xl font-semibold bg-white px-6 py-3 rounded-lg text-blue-800 shadow mb-5">Q. {question}</div>
        <div className="flex text-lg px-6 pt-6 pb-12 font-medium bg-white text-slate-700 rounded-lg shadow-md"><div><span className="text-orange-500 bg-orange-100 py-1 px-2 rounded-md">Ans:&nbsp;</span></div><div className="pr-5 pl-3 text-justify">{(ans=== "")? <div className="h-5 w-5 rounded-full border-t-4 border-r-4 border-orange-500 animate-spin"><div className="bg-white w-2"></div></div>: ans}</div></div>
        {/* <div className="">
          {arr.map((data, idx) => {
            return (
              <div className="bg-blue-200" key={idx}>
                <div className=" text-2xl text-center font-semibold bg-white p-2 rounded-lg text-blue-900">{data.q}</div>
                <br />
                <div className="text-lg text-center font-semibold">{data.a}</div>
              </div>
            );
          })}
        </div> */}
        
        
      </div>}
      <div className="w-full flex justify-center mt-4">
        <input
        className="px-4 py-2 shadow w-2/5 rounded-full "
          placeholder="Ask your doubt here..."
          value={query}
          onChange={({ target }) => setQuery(target?.value)}
        />
        <button
          className="bg-white py-2 px-4 rounded-full ml-1 shadow hover:bg-orange-500 hover:text-white font-bold text-slate-700"
          type="submit"
          onClick={() => {
            arr.splice(0);
            addResponse(query, ans);
            setQuestion(query);
            setQuery("");
            setShow(true);
          }}
        >
          Submit
        </button>
      </div>
      </div>
    </div>
  );
}
