"use client";

import { Suspense, useEffect, useMemo } from "react";
import { useState } from "react";
import MessageBox from "./MessageBox";
import { chatHistoryType } from "@/lib/dummyData";
import { useRecoilValue } from "recoil";
import { chatId, chatState } from "@/lib/store";

async function getData(input: string, currchatId: string) {
  const response = await fetch(
    `http://localhost:5000/chat/${currchatId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: input }),
      credentials: "include",
    }
  );

  const { msg } = await response.json();
  return msg;
}

export default function ChatPage() {
  const [input, setInput] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<chatHistoryType[]>([]);
  const state = useRecoilValue(chatState);
  const currchatId = useRecoilValue(chatId);

  useMemo(() => setChatHistory(state), [state]);

  async function handleSubmit(e: any) {
    if (e.key === "Enter") {
      if (input.trim() !== "") {
        setChatHistory((chatHistory) => [
          ...chatHistory,
          { role: "user", message: input },
        ]);
        setInput("");
        try {
          const res = await getData(input, currchatId);
          setChatHistory((chatHistory) => [
            ...chatHistory,
            { role: "model", message: res },
          ]);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    }
  }

  return (
    <div className="h-screen w-full bg-yellow-200 overflow-y-scroll">
      <div className="relative w-[70%] h-auto ml-[15%] mt-16 mb-[50px]">
        <Suspense fallback={<div>Loading...</div>}>
          {chatHistory.map((message, key) => {
            return (
              <MessageBox
                key={key}
                role={message.role}
                message={message.message}
              />
            );
          })}
        </Suspense>
      </div>
      <div className="sticky bottom-10 top-[600px] w-[70%] ml-[15%] mt-2">
        <input
          type="text"
          placeholder="Message GPT..."
          className="h-14 w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => handleSubmit(e)}
        />
      </div>
      <div className="sticky ml-[45%] top-[570px] bottom-24 cursor-pointer">
        Down
      </div>
    </div>
  );
}
