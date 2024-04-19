type props = {
    children: string,
    outline: boolean
}

export default function Button({children, outline}: props) {
    let css = "bg-blue-400 text-white pt-1 pb-1"
    if(outline) {
        css = "border-2 border-blue-400 text-blue-400 bg-white pt-[2px] pb-[2px]";
    }


    return (
        <button className={`p-2 rounded-md font-medium ${css}`}>
            {children}
        </button>
    )
}