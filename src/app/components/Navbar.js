import React from "react";

function Navbar() {
  return (
    <div>
      <div className="flex border-b-2 border-slate-100 items-center p-3">
        <div className="font-extrabold text-lg text-blue-900">EDUAPP</div>
        <div className="flex ml-auto text-orange-300 font-medium space-x-4 pr-4 ">
          <div className="py-1 px-2 hover:bg-orange-50 text-sm rounded-md">
            HOME
          </div>
          <div className="py-1 px-2 hover:bg-orange-50 text-sm rounded-md">
            ROADMAP
          </div>
          <div className="py-1 px-2 hover:bg-orange-50 text-sm rounded-md">
            QUIZ
          </div>
          <div className="py-1 px-2 hover:bg-orange-50 text-sm rounded-md">
            SIGN IN
          </div>
        </div>
        <div className="material-symbols-outlined bg-purple-200 text-purple-400 rounded-full p-1 hover:text-white hover:bg-purple-400">
          person
        </div>
      </div>
    </div>
  );
}

export default Navbar;
