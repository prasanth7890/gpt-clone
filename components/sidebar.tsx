import ChatTitle from "./ChatTitle";
import { getAllChats } from "@/lib/functions";
import Logo from "./Logo";

export default async function Sidebar() {
  const chats = await getAllChats();
  
  return (
    <div>
      <div className="w-0 md:w-[280px] h-screen bg-black">
        <div className="pt-1 pb-1 hover:bg-gray-800 cursor-pointer">
          <Logo/>
        </div>
        {
            chats?.map((chat:string, key:any)=>{
                return <ChatTitle key={key} title={chat}/>
            })
        }
      </div>
    </div>
  );
}
