import { redirect } from "next/navigation";
import Link from "next/link";

// TODO - ADD Toast to show when succesfull signin and if not error

export default async function Signup() {
  async function handleSubmit(formData: FormData) {
    "use server";
    const email = formData.get("email");
    const password = formData.get("password");

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL as string}/signup`,
      {
        method: "POST",
        body: JSON.stringify({ email: email, password: password }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { success, msg } = await response.json();

    console.log(msg);

    if (success) {
      redirect("/signin");
    }
  }

  return (
    <div className="bg-[#131411] h-screen flex items-center justify-center text-white">
      <div className="flex bg-[#27242c] flex-col h-[400px] w-[350px] items-center justify-center rounded-lg">
        <h2 className="font-semibold text-2xl">Sign Up</h2>
        <span className="text-xs pb-2 pt-1">Please enter your details</span>
        <form action={handleSubmit} className="flex flex-col mt-1">
          <label htmlFor="email" className="text-xs font-semibold m-1">
            Email
          </label>
          <input
            type="text"
            placeholder="Email..."
            name="email"
            className="bg-[#131411] rounded-md p-1 pl-2 mb-2 placeholder:text-xs focus:outline-none"
          />
          <label htmlFor="password" className="text-xs font-semibold m-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="bg-[#131411] rounded-md p-1 pl-2 mb-2 placeholder:text-xs focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#6366f0] hover:bg-[#5658cf] rounded-md p-2 mt-1 text-white w-[100%] text-xs"
          >
            Sign Up
          </button>
        </form>
        <span className="text-xs m-1">
          Already had an account?{" "}
          <Link href="/signin" className="text-[#6366f0]">
            SignIn
          </Link>
        </span>
      </div>
    </div>
  );
}
