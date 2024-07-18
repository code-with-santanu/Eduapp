"use client";
import React, { useState } from "react";
import { quizData } from "../../quizdata";
import searchPic from "@/app/Images/imagesearch.png";
import Image from "next/image";
// import searchBar from "./searchBar";
// import { FaSearch } from "react-icons/fa";

export default function Quiz() {
	//for searchbar
	const [input, setInput] = useState("");
	const [showbar, setShowbar] = useState(true);
	const [showcontent, setShowcontent] = useState(true);
	console.log(input);

	const clearBar = event => {
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

	const { questions } = quizData;
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
		setResult(prev =>
			selectedAns
				? {
						...prev,
						score: prev.score + 10,
						correctAns: prev.correctAns + 1,
					}
				: {
						...prev,
						wrongAns: prev.wrongAns + 1,
					},
		);
		if (activeQuestion !== questions.length - 1) {
			setactiveQuestion(prev => prev + 1);
		} else {
			setactiveQuestion(0);
			setShowResult(true);
		}
		setChecked(false);
	};

	return (
		<>
			{/* <div className="flex p-32 justify-center items-center">
        {showbar && (
          <div className="flex flex-col items-center w-4/5">
            <div className="flex flex-col items-center">
              <p className="text-orange-500 bg-white py-2 w-2/3 text-center rounded-lg mb-10 text-3xl font-bold shadow">
                Give a Quick Test
              </p>
              <div className="flex items-center bg-white w-3/5 p-3 mb-8 rounded-lg shadow-md">
                <Image
                  className="w-40 h-40 bg-orange-100 rounded-xl p-3"
                  src={searchPic}
                  alt="Picture of search"
                />
                <p className="pl-6 text-lg font-semibold">
                  Just type the name of the topic in the search bar and we shall
                  present you a carefully curated quiz.
                </p>
              </div>
            </div>
            <div className="rounded-full flex items-center bg-white py-2 px-3 w-3/5">
              <input
                className="w-full"
                type="text"
                placeholder="Search here anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <div
                onClick={clearBar}
                className="bg-yellow-400 material-symbols-outlined"
              >
                search
              </div>
            </div>
          </div>
        )}
      </div>  */}

			<div className="flex flex-col items-center space-y-2 px-12 py-7">
				{showcontent && (
					<div className="w-1/2 rounded-lg bg-white p-3 text-center text-3xl font-extrabold text-orange-400 shadow-sm">
						Quiz on Networking
					</div>
				)}

				{showcontent && (
					<div className="w-3/4 rounded-lg bg-white px-10 py-4 text-xl shadow-md">
						{!showResult ? (
							<div className="">
								<div className="rounded-md bg-[#f5e6fc] px-8 py-2 text-2xl font-bold text-purple-500">
									Question: {activeQuestion + 1}
									<span>/{questions.length}</span>
								</div>
								<div className="border-b-2 border-slate-100 py-3 font-medium text-slate-700">
									{questions[activeQuestion].question}
								</div>
								{answer.map((answer, idx) => (
									<li
										className="cursor-pointer border-b-2 border-slate-100 px-10 py-4 font-medium text-slate-700 active:bg-[#f5e6fc]"
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
										className="ml-auto mt-2 w-28 cursor-pointer rounded-md border border-slate-400 bg-slate-100 px-4 py-2 text-center font-medium text-slate-700 hover:bg-slate-200"
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
								<div className="rounded-md bg-[#f5e6fc] px-8 py-2 text-2xl font-bold text-purple-500">
									See Your Result
								</div>
								<div className="">
									{/* <div className="text-center bg-yellow-200">Results</div> */}
									<div className="flex border-b-2 border-slate-200 bg-white px-16 py-3 font-bold text-blue-800">
										Accuracy:{" "}
										<span className="ml-auto space-x-6">
											{(result.score / 50) * 100}%
										</span>
									</div>
									<div className="flex border-b-2 border-slate-200 bg-white px-16 py-3 font-bold text-orange-400">
										Total Questions:{" "}
										<span className="ml-auto space-x-6">
											{questions.length}
										</span>
									</div>
									<div className="flex border-b-2 border-slate-200 bg-white px-16 py-3 font-bold text-blue-500">
										Total Score:{" "}
										<span className="ml-auto space-x-6">{result.score}</span>
									</div>
									<div className="flex border-b-2 border-slate-200 bg-white px-16 py-3 font-bold text-green-500">
										Correct Answer:{" "}
										<span className="ml-auto space-x-6">
											{result.correctAns}
										</span>
									</div>
									<div className="flex border-b-2 border-slate-200 bg-white px-16 py-3 font-bold text-red-400">
										Wrong Answer:{" "}
										<span className="ml-auto space-x-6">{result.wrongAns}</span>
									</div>
									<div className="flex flex-col items-center">
										<div
											className="mt-4 w-36 cursor-pointer rounded border border-blue-300 bg-slate-200 py-2 text-center font-bold text-blue-900 hover:bg-slate-300"
											onClick={() => {
												window.location.reload();
											}}
										>
											Finish
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				)}
			</div>
		</>
	);
}
