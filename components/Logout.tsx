'use client'

import Button from "./Button";
import { userName } from "@/lib/store";
import { useRecoilValue } from "recoil";

export default function Logout() {
    //FIXME
    // make this state persistant
    const username: string = useRecoilValue(userName) || "username"
    
    return <div className="text-white bg-[#131411] sticky top-[90%] bottom-0 h-14 flex justify-evenly items-center p-2">
        <span>{username}</span>
        <Button outline={true}>Logout</Button>
    </div>
}