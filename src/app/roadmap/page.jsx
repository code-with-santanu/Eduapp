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
			<div className="flex px-12 py-7 space-x-7 w-full">
				<div className="w-1/5 bg-white rounded-lg shadow-md">
					<div className="py-4 px-6 text-lg text-orange-500 border-b-2 border-slate-00 font-bold rounded-t-lg">Courses</div>
					{
						data.roadmap.map((val,index,arr)=>{
							let cn = "cursor-pointer hover:underline hover:bg-purple-50 py-4 px-6 text-slate-800 font-medium";
							if (index!=arr.length-1)
								return (<div key = {index} className={`${cn} border-b-2 border-slate-100`} onClick={()=>{setShow(val.course)}}>{val.course}</div>);
							else
								return (<div key = {index} className={cn} onClick={()=>{setShow(val.course)}}>{val.course}</div>)
						})
					}
				</div>
				<div className="w-3/5 bg-white rounded-lg shadow-md pb-3"> 
					<div className="p-3 text-3xl text-center text-orange-500 border-b-2 border-slate-200 font-bold rounded-t-lg">RoadMap</div>
					<div className="py-4 px-10 text-2xl font-bold text-blue-900">{show}</div>
					<div>
					{
						data.roadmap.map((value,ind)=>{
							if(value.course === show)
							return (
							<div key={ind}>{value.topics.map((val,index)=>{
								return (
									<div key = {index} className="py-3 px-16 text-xl cursor-pointer" onClick={()=>{if(val.name === current)setIsDropped(!isDropped); setCurrent(val.name)}}>
										<div className="flex items-center border-l-4 border-b border-orange-400 p-1 rounded-md text-orange-500">{val.name}<span className="material-symbols-outlined ml-auto">{(isDropped && (val.name === current)) ? "expand_more" : "navigate_next"}</span></div>
										<div className="mt-2">
										{val.subtopics.map((v)=>{
											if((isDropped === true) && (val.name === current)) return ( 
												<Link href={v.link} className="flex items-center pt-2 ml-4 border-l-2 border-slate-200"><span className="material-symbols-outlined">arrow_right</span><span className="hover:underline p-1 rounded-lg">{v.name}</span></Link>
											)
										})}
										</div>
									</div>
								);
						    })}
							</div>)
						})
					}
					</div>
				</div>
				<div className="w-1/5 bg-white rounded-lg shadow-md">3</div>
			</div>
		</div>
    </>
  )
}