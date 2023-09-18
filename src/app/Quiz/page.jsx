"use client";
import React, { useState } from "react";
import { quiz } from "./data";
export default function Quiz(){
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
      <div className="text-orange-300 shadow-sm bg-white p-3 rounded-lg w-2/3 text-center text-4xl font-extrabold">Quiz on Networking</div>
      <div className="w-4/5 rounded-lg shadow-sm bg-white text-blue-900 font-bold">

      <div className="rounded-t-lg border-b-2 border-slate-100 bg-white text-blue-900 text-2xl font-bold px-10 py-4">
        Question: {activeQuestion + 1}
        <span>/{questions.length}</span>
      </div>

      <div className="rounded-b-lg px-10 py-4 text-xl">
        {!showResult ? (
          <div className="">
            <div className="font-medium text-slate-700 py-3 border-b-2 border-slate-100">{questions[activeQuestion].question}</div>
            {answer.map((answer, idx) => (
              <li className="text-slate-700 font-medium py-4 px-10 border-b-2 border-slate-100 cursor-pointer active:bg-purple-200"
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
              <div onClick={nextQuestion} className="w-28 rounded-md text-center px-4 py-2 bg-purple-200 mt-2 ml-auto cursor-pointer">
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
          <div className="quizContainer2">
            <h3>Results</h3>
            <h3>You Scored {(result.score / 50) * 100}%</h3>
            <p>
              Total Questions: <span>{questions.length}</span>
            </p>
            <p>
              Total Score: <span>{result.score}</span>
            </p>
            <p>
              Correct Answer: <span>{result.correctAns}</span>
            </p>
            <p>
              Wrong Answer: <span>{result.wrongAns}</span>
            </p>
            <button
              className="retake-btn"
              onClick={() => window.location.reload()}
            >
              Retake
            </button>
          </div>
        )}
      </div>

      </div>
    </div>
  );
};
