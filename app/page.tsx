import Link from "next/link";

export default function Home() {

  return (
    <div className="bg-black h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-white">
        <div className="font-bold text-6xl mb-1 flex flex-col cursor-default">
          <h2 className="bg-[#6366f0] pb-2">Hi, I'm a Gpt Clone.</h2>
          <h3 className="text-sm font-normal mt-1">using Gemini's api😅</h3>
        </div>
      </div>
      <div className="flex rounded-sm text-white text-sm">
        <Link href={'/signin'} className="p-1 rounded-sm hover:text-[#6366f0]">Sign In</Link>
        <Link href={'/signup'} className="p-1 rounded-sm hover:text-[#6366f0]">Sign Up</Link>
      </div>
    </div>
  );
}
