import { BASE_URL } from "./constants/baseURL";

export async function getComments({ productId, limit = 3, cursor = null }) {
  let query = "";
  if (!cursor) {
    query = `limit=${limit}`;
  } else {
    query = `limit=${limit}&cursor=${cursor}`;
  }
  try {
    const response = await fetch(
      `${BASE_URL}/products/${productId}/comments?${query}`
    );
    if (!response.ok) {
      throw new Error(`HTTP 오류 : ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.log("댓글 불러오기 실패", error);
  }
}

export async function postComments({ productId, content }) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}/comments`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });
    if (!response.ok) {
      throw new Error(`HTTP 오류 : ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log("댓글 등록 실패", error);
  }
}

export async function updateComment({ commentId, content }) {
  try {
    const response = await fetch(`${BASE_URL}/comments/${commentId}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });

    if (!response.ok) {
      throw new Error(`HTTP 오류 : ${response.status}`);
    }

    const body = await response.json();
    return body;
  } catch (error) {
    console.log("댓글 수정 요청 실패", error);
  }
}

export async function deleteComment({ commentId }) {
  try {
    const response = await fetch(`${BASE_URL}/comments/${commentId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP 오류 : ${response.status}`);
    }

    const body = await response.json();
    return body;
  } catch (error) {
    console.log("댓글 삭제 요청 실패", error);
  }
}
