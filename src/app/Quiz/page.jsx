"use client";
import React, { useState } from "react";
import { quiz } from "./data.js";
import Navbar from "../components/Navbar.js";

const page = () => {
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
    <div className=" container bg-sky-200 h-full">
      <h1 className="head">Quiz on Networking</h1>
      <div className="head2">
        <h2>
          Question: {activeQuestion + 1}
          <span>/{questions.length}</span>
        </h2>
      </div>
      <div>
        {!showResult ? (
          <div className="quizContainer">
            <h3 className="head3">{questions[activeQuestion].question}</h3>
            {answer.map((answer, idx) => (
              <li
                key={idx}
                onClick={() => onAnswerSelected(answer, idx)}
                className={
                  selectedAnsIndex === idx ? "li-selected" : "li-hover"
                }
              >
                <span>{answer}</span>
              </li>
            ))}
            {checked ? (
              <button onClick={nextQuestion} className="next-btn">
                {activeQuestion === question.length - 1 ? "Finish" : "Next"}
              </button>
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
  );
};

export default page;
