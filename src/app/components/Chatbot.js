import React from 'react'
import cb from "@/app/Images/chatbot1.png";
import Image from 'next/image';
import Link from 'next/link';

function Chatbot() {
  return (
    <div className="fixed bottom-7 right-7 rounded-full hover:cursor-pointer animate-bounce">
      <Link href="/doubts"><Image className="w-16 h-16"
       src={cb}
       alt="chatbot"
      /></Link>
    </div>
  )
}

export default Chatbot;
