"use client"; // Next.js의 Client Component

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="container">
      <h1>📚 Power Clean</h1>
      <p>책 정보를 공유하고 함께 토론하세요!</p>
      <button className="btn" onClick={() => router.push("/create")}>
        게시글 추가 ➕
      </button>
    </div>
  );
}
