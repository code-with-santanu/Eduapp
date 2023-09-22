import Image from 'next/image';
import homeimage from "../app/Images/image51.png";
import Footer from './components/Footer';

export default function Home() {
  	return (
    <div>
		<div className="flex flex-col justify-center py-24 px-16 bg-yellow-300 h-screen"> 
			<div className="flex items-center">
				<div className=''> {/*-z-5 absolute*/}
					<div className="text-9xl font-extrabold drop-shadow-lg text-white shadow-black pl-44">GEEKTOPIA</div>
					<div className="bg-red-100 text-4xl">Description</div>
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
