import React from "react";
import cb from "@/app/Images/chatbot1.png";
import Image from "next/image";
import Link from "next/link";

function Chatbot() {
	return (
		<div className="fixed bottom-7 right-7 animate-bounce rounded-full hover:cursor-pointer">
			<Link href="/doubts">
				<Image className="h-16 w-16" src={cb} alt="chatbot" />
			</Link>
		</div>
	);
}

export default Chatbot;
