"use client";
import Link from "next/link";
import data from "../../../data";
import { useState } from "react";

export default function Roadmap() {
	const [show, setShow] = useState("Backend Development");
	const [isDropped, setIsDropped] = useState(false);
	const [current, setCurrent] = useState();
	return (
		<>
			<div className="">
				{/* <Navbar/> */}
				<div className="flex w-full space-x-7 px-12 py-7">
					<div className="h-fit w-1/4 rounded-lg bg-white shadow-md">
						<div className="border-slate-00 rounded-t-lg border-b-2 px-6 py-4 text-lg font-bold text-orange-500">
							Courses
						</div>
						{data.roadmap.map((val, index, arr) => {
							let cn =
								"cursor-pointer hover:underline hover:bg-purple-50 py-4 px-6 text-slate-800 font-medium";
							if (index != arr.length - 1)
								return (
									<div
										key={index}
										className={`${cn} border-b-2 border-slate-100`}
										onClick={() => {
											setShow(val.course);
										}}
									>
										{val.course}
									</div>
								);
							else
								return (
									<div
										key={index}
										className={cn}
										onClick={() => {
											setShow(val.course);
										}}
									>
										{val.course}
									</div>
								);
						})}
					</div>
					<div className="w-3/4 rounded-lg bg-white pb-3 shadow-md">
						<div className="rounded-t-lg border-b-2 border-slate-200 p-3 text-center text-3xl font-bold text-orange-500">
							RoadMap
						</div>
						<div className="px-10 py-4 text-2xl font-bold text-blue-900">
							{show}
						</div>
						<div>
							{data.roadmap.map((value, ind) => {
								if (value.course === show)
									return (
										<div key={ind}>
											{value.topics.map((val, index) => {
												return (
													<div
														key={index}
														className="cursor-pointer px-16 py-3 text-xl"
														onClick={() => {
															if (val.name === current)
																setIsDropped(!isDropped);
															setCurrent(val.name);
														}}
													>
														<div className="flex items-center rounded-md border-b border-l-4 border-orange-400 p-1 text-orange-500">
															{val.name}
															<span className="material-symbols-outlined ml-auto">
																{isDropped && val.name === current
																	? "expand_more"
																	: "navigate_next"}
															</span>
														</div>
														<div className="mt-2">
															{val.subtopics.map((v, i) => {
																if (isDropped === true && val.name === current)
																	return (
																		<Link
																			href={v.link}
																			key={i}
																			className="ml-4 flex items-center border-l-2 border-slate-200 pt-2"
																		>
																			<span className="material-symbols-outlined">
																				arrow_right
																			</span>
																			<span className="rounded-lg p-1 hover:underline">
																				{v.name}
																			</span>
																		</Link>
																	);
															})}
														</div>
													</div>
												);
											})}
										</div>
									);
							})}
						</div>
					</div>
					{/* <div className="w-1/5 bg-white rounded-lg shadow-md"></div> */}
				</div>
			</div>
		</>
	);
}
