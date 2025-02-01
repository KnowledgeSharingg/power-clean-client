"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="container">
      <h1>📚 Power Clean</h1>
      <p>Share book information and engage in discussions!</p>
      <button className="btn" onClick={() => router.push("/create")}>
        Add Post ➕
      </button>
    </div>
  );
}
