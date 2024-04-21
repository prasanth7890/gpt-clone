"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function getAllChats() {
  const cookieStore = cookies();
  const token = cookieStore.get("gpt-token");

  const response = await fetch("http://localhost:5000/chats", {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: `gpt-token=${token?.value}`,
    },
    cache: 'no-store',
    next: {tags: ['alluserchats']}
  });

  const result = await response.json();
  return result.chats;
}

export async function Login(formData: FormData) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const response = await fetch("http://localhost:5000/signin", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const res = await response.json();
  console.log(res);
}

export async function createNewChat() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("gpt-token");
    const response = await fetch('http://localhost:5000/chat', {
      credentials: 'include',
      headers: {
        Cookie: `gpt-token=${token?.value}`,
      },
    })
  
    const res = await response.json();
    if(res.success) {
      revalidateTag('alluserchats');
      return res.chatId;
    }
  } catch (error) {
    console.log(error);    
  }
}
