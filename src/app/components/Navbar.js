import Link from "next/link";
import React from "react";

function Navbar({ height }) {
	return (
		<div
			className={`fixed top-0 w-full ${height} flex items-center border-b-2 border-slate-100 bg-white p-3`}
		>
			<div className="text-lg font-extrabold text-blue-900">GEEKTOPIA</div>
			<div className="ml-auto flex items-center space-x-4 pr-4 font-medium text-orange-500">
				<Link
					href="/"
					className="rounded-md px-4 py-2 text-sm hover:bg-orange-100"
				>
					HOME
				</Link>
				<Link
					href="/roadmap"
					className="rounded-md px-4 py-2 text-sm hover:bg-orange-100"
				>
					ROADMAP
				</Link>
				<Link
					href="/doubts"
					className="rounded-md px-4 py-2 text-sm hover:bg-orange-100"
				>
					DOUBTS
				</Link>
				<Link
					href="/quiz"
					className="rounded-md px-4 py-2 text-sm hover:bg-orange-100"
				>
					QUIZ
				</Link>
				<Link
					href="/signup"
					className="rounded-md px-4 py-2 text-sm hover:bg-orange-100"
				>
					SIGN IN
				</Link>
				<a
					href="https://github.com/prantiranibanda/GeekTopia"
					target="_blank"
					className="pt-1"
				>
					<i className="fi fi-brands-github text-2xl text-orange-500"></i>
				</a>
			</div>
		</div>
	);
}

export default Navbar;
