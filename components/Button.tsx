"use client";

import { useRouter } from "next/navigation";

type props = {
  children: string;
  outline: boolean;
};

export default function Button({ children, outline }: props) {
  const router = useRouter();

  async function logoutUser() {
    try {
      console.log('/logout called');
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL as string}/logout`,
        {
          cache: "no-store",
          credentials: "include",
        }
      );

      const res = await response.json();
      if (res.success) {
        router.push("/signin");
      } else {
        console.log(res.message);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }

  let css = "bg-blue-400 text-white pt-1 pb-1";
  if (outline) {
    css =
      "border-[1px] border-[#6366f0] text-[#6366f0] pt-[2px] pb-[2px] bg-opacity-0";
  }

  return (
    <button
      className={`p-2 rounded-md font-medium ${css}`}
      onClick={logoutUser}
    >
      {children}
    </button>
  );
}
