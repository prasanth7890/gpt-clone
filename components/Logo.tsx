'use client'

import { createNewChat } from "@/lib/functions";

export default function Logo() {
    async function handleClick() {
        await createNewChat();
    }

  return (
    <div className="flex justify-baseline justify-start items-center bg-[#131411]" onClick={handleClick}>
      <img
        src="https://www.edigitalagency.com.au/wp-content/uploads/chatgpt-logo-white-on-transparent-background-png-300x300.png"
        alt="openai"
        height={"60px"}
        width={"50px"}
      />
      <div className="text-white h-10 ml-[-10px] pt-2 pl-2 pr-2 text-left">
        New Chat
      </div>
    </div>
  );
}
