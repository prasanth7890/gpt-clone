'use client'

import { Suspense } from "react"
import { useState } from "react"
import MessageBox from "./MessageBox"
import {chatHistoryType} from "@/lib/dummyData"
import { getData } from "@/lib/functions"

export default function ChatPage() {
    const [input, setInput] = useState<string>("");
    const [chatHistory, setChatHistory] = useState<chatHistoryType[]>([]);

    async function handleSubmit(e:any) {
        if(e.key === 'Enter') {
            if(input.trim() !== '') {
                setChatHistory((chatHistory)=>[...chatHistory, {role:'user', message: input}]);
                setInput('');
                try {
                    const res = await getData(input);
                    setChatHistory((chatHistory) => [...chatHistory, { role: 'model', message: res }]);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
        }
    }

    return(
        <div className="h-screen w-full bg-yellow-200">
            <div className="relative w-[70%] h-auto ml-[15%] mt-16 mb-[50px]">
                <Suspense fallback={<div>Loading...</div>}>
                    {chatHistory.map((message, key)=> {
                        return <MessageBox key={key} role={message.role} message={message.message}/>
                    })}
                </Suspense>
            </div>
            <div className="sticky bottom-9 w-[70%] ml-[15%] mt-2">
                <input type="text" placeholder="Message GPT..." className="h-14 w-full" value={input} onChange={(e)=>setInput(e.target.value)} onKeyPress={(e)=>handleSubmit(e)}/>
            </div>
        </div>
    )
}