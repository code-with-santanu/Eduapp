import React from "react";
export default function loginSignup() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-1/3">
        <div className="text-3xl bg-white text-orange-500 text-center font-bold p-2 rounded-t-lg shadow">Sign Up Now</div>
        <div className="bg-orange-400 rounded-b-lg px-10 py-6">
          <div>
            <div className="font-semibold text-lg p-1">Enter your name: </div>
            <input type="name" className="bg-orange-100  py-2 px-4 w-full rounded-lg mb-3" placeholder="your name" />
            <div className="font-semibold text-lg p-1">Enter your email: </div>
            <input type="email" className="bg-orange-100  py-2 px-4 w-full rounded-lg mb-3" placeholder="example@email.com" />
            <div className="font-semibold text-lg p-1">Enter your password: </div>
            <input type="password" className="bg-orange-100  py-2 px-4 w-full rounded-lg" placeholder="password" />
          </div>
          <div className="text-blue-900 w-fit ml-auto hover:underline pr-1 py-2 font-medium text-base">Forgot password?</div>
          <div className="flex space-x-2">
            <div className="w-1/2 bg-white text-orange-500 mb-3 px-3 py-2 text-lg rounded-lg font-extrabold text-center hover:border-slate-300 border-4 border-slate-200">Sign in</div>
            <div className="w-1/2 bg-white text-orange-500 mb-3 px-3 py-2 text-lg rounded-lg font-extrabold text-center hover:border-slate-300 border-4 border-slate-200">Submit</div>
          </div>
        </div>
      </div>
    </div>
  );
}
