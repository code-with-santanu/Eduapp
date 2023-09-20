import Link from "next/link";
import React from "react";

function Navbar({ height }) {
  return (
    <div
      className={`fixed top-0 w-full ${height} bg-white flex border-b-2 border-slate-100 items-center p-3`}
    >
      <div className="font-extrabold text-lg text-blue-900">GEEKTOPIA</div>
      <div className="flex ml-auto text-orange-500 font-medium space-x-4 pr-4 ">
        <div className="py-1 px-2 hover:bg-orange-50 text-sm rounded-md">
          <Link href="/">HOME</Link>
        </div>
        <div className="py-1 px-2 hover:bg-orange-50 text-sm rounded-md">
          <Link href="/roadmap">ROADMAP</Link>
        </div>
        <div className="py-1 px-2 hover:bg-orange-50 text-sm rounded-md">
          <Link href="/doubts">DOUBTS</Link>
        </div>
        <div className="py-1 px-2 hover:bg-orange-50 text-sm rounded-md">
          <Link href="/quiz">QUIZ</Link>
        </div>
        <div className="py-1 px-2 hover:bg-orange-50 text-sm rounded-md">
          <Link href="/sign">SIGN IN</Link>
        </div>
      </div>
      <div className="material-symbols-outlined bg-purple-200 text-purple-400 rounded-full p-1 hover:text-white hover:bg-purple-400">
        person
      </div>
    </div>
  );
}

export default Navbar;
