"use client";
import data from "../../data";
import Navbar from "./components/Navbar";
import { useState } from "react";

export default function Home() {
	const [show, setShow] = useState("Backend Development");
  	return (
    <>
		<div className="bg-[#fcf9e3] min-h-screen">
			<Navbar/>
			<div className="flex px-12 py-7 space-x-7 w-full">
				<div className="w-1/5 bg-white rounded-lg shadow-md">
					<div className="p-4 text-lg text-orange-300 border-b-2 border-slate-100 font-medium rounded-t-lg">Courses</div>
					{
						data.roadmap.map((val,index,arr)=>{
							let cn = "cursor-pointer hover:underline px-7 py-4 text-slate-500";
							if (index!=arr.length-1)
								return (<div key = {index} className={`${cn} border-b-2 border-slate-100`} onClick={()=>{setShow(val.course)}}>{val.course}</div>);
							else
								return (<div key = {index} className={cn} onClick={()=>{setShow(val.course)}}>{val.course}</div>)
						})
					}
				</div>
				<div className="w-3/5 bg-white rounded-lg shadow-md"> 
					<div className="p-3 text-3xl text-center text-orange-300 border-b-2 border-slate-100 font-bold rounded-t-lg">RoadMap</div>
					<div className="py-3 px-10 text-xl font-bold text-blue-900">{show}</div>
				</div>
				<div className="w-1/5 bg-white rounded-lg shadow-md">3</div>
			</div>
			
		</div>
    </>
  );
  
}