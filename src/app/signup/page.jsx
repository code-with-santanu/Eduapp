import React from "react";
export default function loginSignup() {
	return (
		<div className="flex items-center justify-center py-20">
			<div className="w-1/3">
				<div className="rounded-t-lg bg-white p-2 text-center text-3xl font-bold text-orange-500 shadow">
					Sign Up Now
				</div>
				<div className="rounded-b-lg bg-orange-400 px-10 py-6">
					<div>
						<div className="p-1 text-lg font-semibold">Enter your name: </div>
						<input
							type="name"
							className="mb-3 w-full rounded-lg bg-orange-100 px-4 py-2"
							placeholder="your name"
						/>
						<div className="p-1 text-lg font-semibold">Enter your email: </div>
						<input
							type="email"
							className="mb-3 w-full rounded-lg bg-orange-100 px-4 py-2"
							placeholder="example@email.com"
						/>
						<div className="p-1 text-lg font-semibold">
							Enter your password:{" "}
						</div>
						<input
							type="password"
							className="w-full rounded-lg bg-orange-100 px-4 py-2"
							placeholder="password"
						/>
					</div>
					<div className="ml-auto w-fit py-2 pr-1 text-base font-medium text-blue-900 hover:underline">
						Forgot password?
					</div>
					<div className="flex space-x-2">
						<div className="mb-3 w-1/2 rounded-lg border-4 border-slate-200 bg-white px-3 py-2 text-center text-lg font-extrabold text-orange-500 hover:border-slate-300">
							Sign in
						</div>
						<div className="mb-3 w-1/2 rounded-lg border-4 border-slate-200 bg-white px-3 py-2 text-center text-lg font-extrabold text-orange-500 hover:border-slate-300">
							Submit
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
