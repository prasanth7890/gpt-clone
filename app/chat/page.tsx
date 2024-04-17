import Sidebar from "@/components/sidebar"
import ChatPage from "@/components/Chat"

export default function Chat() {
    return(
        <div className="flex h-screen">
            <Sidebar/>
            <ChatPage/>
        </div>
    )
}