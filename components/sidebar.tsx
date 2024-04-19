import ChatTitle from "./ChatTitle";
import { getAllChats } from "@/lib/functions";
import Logo from "./Logo";
import Logout from "./Logout";

export default async function Sidebar() {
  const chats = await getAllChats();

  return (
    <div>
      <div className="w-0 md:w-[280px] h-screen bg-[#131411] overflow-y-scroll">
        <div className="top-[-4px] pt-1 pb-1 hover:bg-gray-800 cursor-pointer sticky">
          <Logo />
        </div>
        <div>
          {chats?.map((chat: string, key: any) => {
            return <ChatTitle key={key} title={chat} />;
          })}
        </div>
        <Logout />
      </div>
    </div>
  );
}
