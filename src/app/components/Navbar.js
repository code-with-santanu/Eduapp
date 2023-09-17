import React from 'react'

function Navbar() {
  return (
    <div>
      <div className="flex  shadow-sm items-center p-3">
				<div className="font-extrabold text-lg text-blue-900">EDUAPP</div>
				<div className="flex ml-auto text-orange-300 font-medium space-x-4 pr-4 ">
					<div className="p-1 hover:bg-orange-100 hover:border-orange-200 text-sm rounded-md">HOME</div>
					<div className="p-1 hover:bg-orange-100 hover:border-orange-200 text-sm rounded-md">ROADMAP</div>
					<div className="p-1 hover:bg-orange-100 hover:border-orange-200 text-sm rounded-md">QUIZ</div>
					<div className="p-1 hover:bg-orange-100 hover:border-orange-200 text-sm rounded-md">SIGN IN</div>
				</div>
				<div className="material-symbols-outlined bg-purple-200 text-purple-400 rounded-full p-1 hover:text-white hover:bg-purple-400">person</div>
			</div>
    </div>
  )
}

export default Navbar
