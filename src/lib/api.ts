export async function createPost(data: any) {
  try {
    const response = await fetch("http://18.205.151.65:8081/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    return response.ok;
  } catch (error) {
    console.error("게시글 생성 오류:", error);
    return false;
  }
}
