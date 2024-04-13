type props = {
    role: string,
    message: string
}

export default function MessageBox({role, message}: props) {
    return(
        <div className="pt-3 pb-3n w-full bg-blue-300">
            <span>{role}</span>
            <p>{message}</p>
        </div>
    )
}