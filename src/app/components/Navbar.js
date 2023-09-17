import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <div>
      <div className="flex bg-white items-center px-6 py-3">
				<div className="font-extrabold text-base text-blue-900"><span className="text-2xl">E</span>DU<span className="text-2xl">A</span>PP</div>
				<div className="flex ml-auto text-orange-300 font-medium space-x-6 pr-4 ">
        <div className="py-1 px-2 hover:bg-orange-50 text-sm rounded-md"><Link href="/">HOME</Link></div>
					<div className="py-1 px-2 hover:bg-orange-50 text-sm rounded-md"><Link href="/roadmap">ROADMAP</Link></div>
					<div className="py-1 px-2 hover:bg-orange-50 text-sm rounded-md"><Link href="">QUIZ</Link></div>
					<div className="py-1 px-2 hover:bg-orange-50 text-sm rounded-md"><Link href="">SIGN IN</Link></div>
				</div>
				<div className="material-symbols-outlined bg-purple-200 text-purple-400 rounded-full p-1 hover:text-white hover:bg-purple-400">person</div>
			</div>
    </div>
  )
}

export default Navbar
