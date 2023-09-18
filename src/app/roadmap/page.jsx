"use client";
import data from "../../../data";
import { useState } from "react";

export default function Roadmap() {
	const [show, setShow] = useState("Backend Development");
  return (
    <>
    <div className="">
			{/* <Navbar/> */}
			<div className="flex px-12 py-7 space-x-7 w-full">
				<div className="w-1/5 bg-white rounded-lg shadow-md">
					<div className="p-4 text-lg text-orange-400 border-b-2 border-slate-100 font-medium rounded-t-lg">Courses</div>
					{
						data.roadmap.map((val,index,arr)=>{
							let cn = "cursor-pointer hover:underline hover:bg-purple-200 px-7 py-4 text-slate-800 ";
							if (index!=arr.length-1)
								return (<div key = {index} className={`${cn} border-b-2 border-slate-100`} onClick={()=>{setShow(val.course)}}>{val.course}</div>);
							else
								return (<div key = {index} className={cn} onClick={()=>{setShow(val.course)}}>{val.course}</div>)
						})
					}
				</div>
				<div className="w-3/5 bg-white rounded-lg shadow-md"> 
					<div className="p-3 text-3xl text-center text-orange-400 border-b-2 border-slate-100 font-bold rounded-t-lg">RoadMap</div>
					<div className="py-3 px-10 text-xl font-bold text-blue-900">{show}</div>
				</div>
				<div className="w-1/5 bg-white rounded-lg shadow-md">3</div>
			</div>
		</div>
    </>
  )
}