import Sidebar from "@/components/sidebar"
import ChatPage from "@/components/Chat"
import { Suspense } from "react"

export default function Chat() {
    return(
        <div className="flex h-screen">
            <Sidebar/>
            <Suspense fallback={<div>Loading...</div>}>
                <ChatPage/>
            </Suspense>
        </div>
    )
}