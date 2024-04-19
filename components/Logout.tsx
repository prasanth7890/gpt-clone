import Button from "./Button";

export default function Logout() {
    return <div className="text-white bg-[#131411] sticky top-[90%] bottom-0 h-14 flex justify-evenly items-center p-2">
        <span>Username</span>
        <Button outline={true}>Logout</Button>
    </div>
}