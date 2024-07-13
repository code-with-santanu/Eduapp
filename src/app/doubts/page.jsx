"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export default function Doubts() {
	const [query, setQuery] = useState("");
	const [question, setQuestion] = useState("");
	const [ans, setAns] = useState("");
	const [show, setShow] = useState(false);
	const [arr, setArr] = useState([]);

	const handleSubmit = async event => {
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
				// console.log(data);

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
			<Toaster />
			<div className="flex w-2/3 flex-col items-center">
				{!show && (
					<div>
						<div className="mb-20 rounded-lg bg-white px-6 py-2 text-center text-2xl font-bold text-orange-500 shadow">
							Hello, Here is your personal assistant
						</div>
						<div className="py-10 text-center text-8xl font-extrabold text-orange-500 drop-shadow-md">
							GEEKTOPIA
						</div>
						<div className="text-center text-2xl font-semibold text-blue-900">
							How can I help you?
						</div>
					</div>
				)}
				{show && (
					<div className="w-full">
						<div className="mb-5 rounded-lg bg-white px-6 py-3 text-2xl font-semibold text-blue-800 shadow">
							Q. {question}
						</div>
						<div className="flex rounded-lg bg-white px-6 pb-12 pt-6 text-lg font-medium text-slate-700 shadow-md">
							<div>
								<span className="rounded-md bg-orange-100 px-2 py-1 text-orange-500">
									Ans:&nbsp;
								</span>
							</div>
							<div className="pl-3 pr-5 text-justify">
								{ans === "" ? (
									<div className="h-5 w-5 animate-spin rounded-full border-r-4 border-t-4 border-orange-500">
										<div className="w-2 bg-white"></div>
									</div>
								) : (
									ans
								)}
							</div>
						</div>
					</div>
				)}
				<div className="mt-4 flex w-full justify-center">
					<input
						className="w-2/5 rounded-full px-4 py-2 shadow"
						placeholder="Ask your doubt here..."
						value={query}
						onChange={({ target }) => setQuery(target?.value)}
					/>
					<button
						className="ml-1 rounded-full bg-white px-4 py-2 font-bold text-slate-700 shadow hover:bg-orange-500 hover:text-white"
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
