import Image from "next/image";
import homeimage from "../app/Images/image51.png";
import Footer from "./components/Chatbot";

export default function Home() {
	return (
		<div>
			<div className="flex h-screen flex-col justify-center bg-yellow-300 px-16 py-24">
				<div className="flex items-center">
					<div className="">
						{" "}
						{/*-z-5 absolute*/}
						<div className="pb-8 pl-44 text-9xl font-extrabold text-white shadow-black drop-shadow-lg">
							GEEKTOPIA
						</div>
						<div className="border-r-4 border-blue-900 px-4 text-right text-2xl font-bold text-blue-900">
							Tired of switching between various tech platforms? Don&#39;t
							worry! Geektopia is your one stop solution. Starting from
							organizing your notes, to finding perfect roadmaps and clearing
							your doubts, we shall provide you everything required for a smooth
							ride in the tech world. So what are you waiting for? Join us today
							and become a tech expert with Geektopia!
						</div>
					</div>
					<Image className="ml-auto w-[30rem]" src={homeimage} alt="" />{" "}
					{/*-z-5 absolute*/}
				</div>
			</div>
			<Footer />
		</div>
	);
}
