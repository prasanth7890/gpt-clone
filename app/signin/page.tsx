"use client";

// TODO - ADD Toast to show when succesfull signin and if not error

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";
import { userName } from "@/lib/store";
import Link from "next/link";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setpassword] = useState<string>();
  const setUserName = useSetRecoilState(userName);
  const router = useRouter();

  async function handlesubmit() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL as string}/signin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email: email, password: password }),
      }
    );

    const res = await response.json();
    if (res?.success) {
      const username: string = email?.split("@")[0];
      setUserName(username);
      router.push("/chat");
    }
  }

  return (
    <div className="bg-[#131411] h-screen flex items-center justify-center text-white">
      <div className="flex bg-[#27242c] flex-col h-[400px] w-[350px] items-center justify-center rounded-lg">
        <h2 className="font-semibold text-2xl">Welcome back</h2>
        <span className="text-xs pb-2 pt-1">Please enter your details</span>
        <div className="flex flex-col p-1">
          <label htmlFor="email" className="text-xs font-semibold m-1">
            Email
          </label>
          <input
            className="bg-[#131411] rounded-md p-1 pl-2 mb-2 placeholder:text-xs focus:outline-none"
            name="email"
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="text-xs font-semibold m-1">
            Password
          </label>
          <input
            className="bg-[#131411] rounded-md p-1 pl-2 mb-2 placeholder:text-xs focus:outline-none"
            name="password"
            type="password"
            placeholder="............"
            onChange={(e) => setpassword(e.target.value)}
          />
          <button
            onClick={handlesubmit}
            className="bg-[#6366f0] hover:bg-[#5658cf] rounded-md p-2 mt-1 text-slate-50 w-[100%] text-xs"
          >
            Sign In
          </button>
        </div>
        <span className="text-xs">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-[#6366f0]">
            SignUp
          </Link>
        </span>
      </div>
    </div>
  );
}
