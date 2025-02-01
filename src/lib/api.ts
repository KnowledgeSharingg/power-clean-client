const serverUrl = "http://18.205.151.65:8081";
// const serverUrl = "http://localhost:8080";

export async function createPost(data: any) {
  try {
    const response = await fetch(`${serverUrl}/post`, {
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
