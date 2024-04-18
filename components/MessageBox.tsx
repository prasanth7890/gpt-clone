type props = {
    role: string,
    message: string
}

export default function MessageBox({role, message}: props) {
    return(
        <div className={`flex ${role === 'user'?'justify-end': 'justify-start'}`}>
            <div className="m-1 w-fit max-w-[90%] sm:max-w-[80%] md:max-w-[70%] bg-[#6366f0] text-slate-200 rounded-lg">
                {/* <span>{role}</span> */}
                <p className="p-1 pl-2 pr-2">{message}</p>
            </div>
        </div>
    )
}