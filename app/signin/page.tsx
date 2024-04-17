"use client";

import { useState } from "react";

export default function SignIn2() {
  const [email, setEmail] = useState<string>();
  const [password, setpassword] = useState<string>();

  async function handlesubmit() {
    const response = await fetch("http://localhost:5000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify({email: email, password: password}),
    });

    const res = await response.json();
    console.log(res);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setpassword(e.target.value)}
      />
      <button onClick={handlesubmit}>submit</button>
    </div>
  );
}
