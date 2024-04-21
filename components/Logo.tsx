'use client'

import { createNewChat } from "@/lib/functions";
import Image from "next/image";

export default function Logo() {
    async function handleClick() {
        await createNewChat();
    }

  return (
    <div className="flex justify-baseline justify-start items-center bg-[#131411]" onClick={handleClick}>
      <Image
        src='/gptlogo.png'
        alt="openai logo"
        height={60}
        width={50}
      />
      <div className="text-white h-10 ml-[-10px] pt-2 pl-2 pr-2 text-left">
        New Chat
      </div>
    </div>
  );
}
