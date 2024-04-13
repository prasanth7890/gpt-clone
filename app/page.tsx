'use client'

import Skeleton from "@/components/skeleton";

export default function Home() {

  return (
    <div>
      <h2>GPT CLONE</h2>
      <input
        type="text"
        placeholder="Enter your text"
      />
      <Skeleton>
        <button>Submit</button>
      </Skeleton>
    </div>
  );
}
