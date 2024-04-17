import ChatTitle from "./ChatTitle"

async function getAllChats() {
    const response = await fetch('http://localhost:5000/chats',{
        method: 'GET',
        credentials: 'include',
    })
    
    const result = await response.json();
    console.log(result);
}

export default async function Sidebar() {
    await getAllChats();

    return <div>
        <div className="w-0 md:w-[280px] h-screen bg-black">
        <div className="pt-1 pb-1 hover:bg-gray-800 cursor-pointer">
            <div className="flex justify-baseline justify-start items-center">
                <img src="https://www.edigitalagency.com.au/wp-content/uploads/chatgpt-logo-white-on-transparent-background-png-300x300.png" alt="openai" height={'60px'} width={'50px'} />
                <button className="text-white h-10 ml-[-10px] pt-1 pl-2 pr-2 text-left">New Chat</button>
            </div>
        </div>
            <ChatTitle title="Creating a chatTitle"/>
            <ChatTitle title="Creating a chatTitle"/>
            <ChatTitle title="Creating a chatTitle"/>
            <ChatTitle title="Creating a chatTitle"/>
            <ChatTitle title="Creating a chatTitle"/>
            <ChatTitle title="Creating a chatTitle"/>
            <ChatTitle title="Creating a chatTitle"/>
        </div>
    </div>
}