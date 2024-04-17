"use client";

import { useSetRecoilState } from "recoil";
import { chatState } from "@/lib/store";

type props = {
  title: string;
};

export default function ChatTitle({ title }: props) {
  const setchatState = useSetRecoilState(chatState);

  async function handleClick(title: string) {
    const response = await fetch(`http://localhost:5000/chat/${title}`, {
      method: "GET",
      credentials: "include",
      cache: "no-store",
    });
  
    const result = await response.json();
    setchatState(result?.history);
  }

  return (
    <div
      className="h-14 w-[279px] hover:bg-blue-400 hover:text-black text-white text-left rounded-lg cursor-pointer"
      onClick={() => handleClick(title)}
    >
      <p className="p-4 truncate">{title}</p>
    </div>
  );
}
