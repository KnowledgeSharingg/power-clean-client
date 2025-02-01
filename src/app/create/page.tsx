"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createPost } from "@/lib/api";

export default function CreatePost() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    content: "",
    creatorAccountId: "123e4567-e89b-12d3-a456-426614174000",
    bookInfo: {
      title: "",
      content: "",
      link: "",
      authorInfo: {
        name: "",
        dateOfBirth: "",
        phoneNumber: "",
        gender: "",
        history: "",
      },
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await createPost(form);
    if (success) {
      alert("게시글이 등록되었습니다!");
      router.push("/");
    } else {
      alert("등록에 실패했습니다.");
    }
  };

  return (
    <div className="container">
      <h2>게시글 생성</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <input
            type="text"
            name="title"
            placeholder="제목"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="content"
            placeholder="내용"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="bookInfo.title"
            placeholder="책 제목"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="bookInfo.content"
            placeholder="책 내용"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="bookInfo.link"
            placeholder="책 링크"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn">
          게시
        </button>
      </form>
    </div>
  );
}
