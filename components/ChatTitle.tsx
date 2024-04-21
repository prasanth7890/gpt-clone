"use client";

import { useSetRecoilState } from "recoil";
import { chatState, chatId } from "@/lib/store";

type props = {
  title: string;
};

export default function ChatTitle({ title }: props) {
  const setchatState = useSetRecoilState(chatState);
  const setChatId = useSetRecoilState(chatId);

  async function handleClick(title: string) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL as string}/chat/${title}`,
      {
        method: "GET",
        credentials: "include",
        cache: "no-store",
      }
    );

    const result = await response.json();
    setchatState(result?.history);
    setChatId(title);
  }

  return (
    <div
      className="h-14 w-[279px] hover:bg-[#6366f0] text-white text-left rounded-lg cursor-pointer"
      onClick={() => handleClick(title)}
    >
      <p className="p-4 truncate">{title}</p>
    </div>
  );
}
