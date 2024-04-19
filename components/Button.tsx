type props = {
    children: string,
    outline: boolean
}

export default function Button({children, outline}: props) {
    let css = "bg-blue-400 text-white pt-1 pb-1"
    if(outline) {
        css = "border-[1px] border-[#6366f0] text-[#6366f0] pt-[2px] pb-[2px] bg-opacity-0";
    }


    return (
        <button className={`p-2 rounded-md font-medium ${css}`}>
            {children}
        </button>
    )
}