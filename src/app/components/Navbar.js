import Link from "next/link";
import React from "react";

function Navbar({ height }) {
	return (
		<div
			className={`fixed top-0 w-full ${height} flex items-center border-b-2 border-slate-100 bg-white p-3`}
		>
			<div className="text-lg font-extrabold text-blue-900">GEEKTOPIA</div>
			<div className="ml-auto flex space-x-4 pr-4 font-medium text-orange-500">
				<div className="rounded-md px-2 py-1 text-sm hover:bg-orange-50">
					<Link href="/">HOME</Link>
				</div>
				<div className="rounded-md px-2 py-1 text-sm hover:bg-orange-50">
					<Link href="/roadmap">ROADMAP</Link>
				</div>
				<div className="rounded-md px-2 py-1 text-sm hover:bg-orange-50">
					<Link href="/doubts">DOUBTS</Link>
				</div>
				<div className="rounded-md px-2 py-1 text-sm hover:bg-orange-50">
					<Link href="/quiz">QUIZ</Link>
				</div>
				<div className="rounded-md px-2 py-1 text-sm hover:bg-orange-50">
					<Link href="/signup">SIGN IN</Link>
				</div>
			</div>
			<div className="material-symbols-outlined rounded-full bg-purple-200 p-1 text-purple-400 hover:bg-purple-400 hover:text-white">
				person
			</div>
		</div>
	);
}

export default Navbar;
