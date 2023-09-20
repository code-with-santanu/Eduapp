"use client";
import React, { useState } from "react";
import { quiz } from "./data";
import searchBar from "./searchBar";
import { FaSearch } from "react-icons/fa";

export default function Quiz() {
  //for searchbar
  const [input, setInput] = useState("");
  const [showbar, setShowbar] = useState(true);
  const [showcontent, setShowcontent] = useState(false);
  console.log(input);

  const clearBar = (event) => {
    event.preventDefault();
    setShowbar(false);
    setShowcontent(true);
  };

  //for search results
  const [activeQuestion, setactiveQuestion] = useState(0);
  const [selectedAns, setSelectedAns] = useState("");
  const [checked, setChecked] = useState(null);
  const [selectedAnsIndex, setSelectedAnsIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAns: 0,
    wrongAns: 0,
  });

  const { questions } = quiz;
  const { question, answer, correct } = questions[activeQuestion];

  // select and check answer
  const onAnswerSelected = (answer, idx) => {
    setChecked(true);
    setSelectedAnsIndex(idx);
    if (answer === correct) {
      setSelectedAns(true);
      console.log("true");
    } else {
      setSelectedAns(false);
      console.log("false");
    }
  };

  //calculate score and move to next question
  const nextQuestion = () => {
    setSelectedAnsIndex(null);
    setResult((prev) =>
      selectedAns
        ? {
            ...prev,
            score: prev.score + 10,
            correctAns: prev.correctAns + 1,
          }
        : {
            ...prev,
            wrongAns: prev.wrongAns + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setactiveQuestion((prev) => prev + 1);
    } else {
      setactiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
    <div className="flex flex-col px-12 py-7 space-y-2 items-center">
      {showbar && (
        <div className="searchbar-container">
          {/* <searchBar /> */}
          <div className="input-field">
            <FaSearch id="search-icon" />
            <input
              type="text"
              placeholder="Search here anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={clearBar}
              className=" text-center text-blue-900 font-bold bg-slate-200 w-15 py-0 rounded border border-blue-300 hover:bg-slate-300 mt-4"
            >
              Enter
            </button>
          </div>
          <div className="main-text">
            Want to test your proficiency on a particular topic? Just type the
            name of the topic in the search bar and we shall present you a
            carefully curated quiz
          </div>
        </div>
      )}

      {showcontent && (
        <div className="text-orange-400 shadow-sm bg-white p-3 rounded-lg w-1/2 text-center text-3xl font-extrabold">
          Quiz on Networking
        </div>
      )}

      {showcontent && (
        <div className="w-3/4 shadow-md bg-white rounded-lg px-10 py-4 text-xl">
          {!showResult ? (
            <div className="">
              <div className="bg-[#f5e6fc] rounded-md py-2 px-8 text-2xl font-bold text-purple-500">
                Question: {activeQuestion + 1}
                <span>/{questions.length}</span>
              </div>
              <div className="font-medium text-slate-700 py-3 border-b-2 border-slate-100">
                {questions[activeQuestion].question}
              </div>
              {answer.map((answer, idx) => (
                <li
                  className="text-slate-700 font-medium py-4 px-10 border-b-2 border-slate-100 cursor-pointer active:bg-[#f5e6fc]"
                  key={idx}
                  onClick={() => onAnswerSelected(answer, idx)}
                  // className={
                  //   selectedAnsIndex === idx ? "li-selected" : "li-hover"
                  // }
                >
                  <span>{answer}</span>
                </li>
              ))}
              {checked ? (
                <div
                  onClick={nextQuestion}
                  className="w-28 rounded-md text-center px-4 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-400 font-medium mt-2 ml-auto cursor-pointer"
                >
                  {activeQuestion === question.length - 1 ? "Finish" : "Next"}
                </div>
              ) : (
                <button
                  onClick={nextQuestion}
                  disabled
                  className="btn-dis"
                ></button>
              )}
            </div>
          ) : (
            <div className="">
              <div className="bg-[#f5e6fc] rounded-md py-2 px-8 text-2xl font-bold text-purple-500">
                See Your Result
              </div>
              <div className="">
                {/* <div className="text-center bg-yellow-200">Results</div> */}
                <div className="flex px-16 font-bold text-blue-800 py-3 border-b-2 border-slate-200 bg-white">
                  Accuracy:{" "}
                  <span className="ml-auto space-x-6">
                    {(result.score / 50) * 100}%
                  </span>
                </div>
                <div className="flex px-16 font-bold text-orange-400 py-3 border-b-2 border-slate-200 bg-white">
                  Total Questions:{" "}
                  <span className="ml-auto space-x-6">{questions.length}</span>
                </div>
                <div className="flex px-16 font-bold text-blue-500 py-3 border-b-2 border-slate-200 bg-white">
                  Total Score:{" "}
                  <span className="ml-auto space-x-6">{result.score}</span>
                </div>
                <div className="flex px-16 font-bold text-green-500 py-3 border-b-2 border-slate-200 bg-white">
                  Correct Answer:{" "}
                  <span className="ml-auto space-x-6">{result.correctAns}</span>
                </div>
                <div className="flex px-16 font-bold text-red-400 py-3 border-b-2 border-slate-200 bg-white">
                  Wrong Answer:{" "}
                  <span className="ml-auto space-x-6">{result.wrongAns}</span>
                </div>
                <div
                  className="flex flex-col items-center"
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  <div className=" text-center text-blue-900 font-bold bg-slate-200 w-36 py-2 rounded border border-blue-300 hover:bg-slate-300 mt-4">
                    Finish
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
