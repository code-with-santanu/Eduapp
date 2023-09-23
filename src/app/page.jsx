import Image from 'next/image';
import homeimage from "../app/Images/image51.png";
import Footer from './components/Chatbot';

export default function Home() {
  	return (
    <div>
		<div className="flex flex-col justify-center py-24 px-16 bg-yellow-300 h-screen"> 
			<div className="flex items-center">
				<div className=''> {/*-z-5 absolute*/}
					<div className="text-9xl font-extrabold drop-shadow-lg text-white shadow-black pl-44 pb-8">GEEKTOPIA</div>
					<div className="text-2xl text-blue-900 font-bold text-right px-4 border-r-4  border-blue-900">Tired of switching between various tech platforms? Don't worry! Geektopia is your one stop solution. Starting from organizing your notes, to finding perfect roadmaps and clearing your doubts, we shall provide you everything required for a smooth ride in the tech world. So what are you waiting for? Join us today and become a tech expert with Geektopia!</div>
				</div>
				<Image className="w-[30rem] ml-auto" 
					src={homeimage}
					alt=""
				/>    {/*-z-5 absolute*/}
			</div>
		</div>
		<Footer/>
	</div>
  );
}
