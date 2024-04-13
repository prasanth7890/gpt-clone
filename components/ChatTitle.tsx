'use client'

type props = {
    title: string,
}

export default function ChatTitle({title}: props) {
    return(
        <div className="h-14 w-[279px] hover:bg-blue-400 hover:text-black text-white text-left rounded-lg cursor-pointer">
            <p className="p-4 truncate">{title}</p>
        </div>
    );
}