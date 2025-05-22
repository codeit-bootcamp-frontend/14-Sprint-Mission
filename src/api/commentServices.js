const BASE_URL =
  process.env.REACT_APP_BASE_URL || "https://panda-market-api.vercel.app";

// POST: 댓글 작성
const postComment = async (productId, content) => {
  const accessToken = localStorage.getItem("accessToken");

  const res = await fetch(`${BASE_URL}/products/${productId}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ content }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "댓글 등록에 실패하였습니다.");
  }

  return await res.json();
};

// GET: 댓글 목록 조회
const getComments = async (productId, limit = 5, cursor = null) => {
  let url = `${BASE_URL}/products/${productId}/comments?limit=${limit}`;
  if (cursor) url += `&cursor=${cursor}`;

  const res = await fetch(url);

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "댓글 목록 조회에 실패하였습니다.");
  }

  return await res.json();
};

// PATCH: 댓글 수정
const patchComment = async (commentId, content) => {
  const accessToken = localStorage.getItem("accessToken");

  const res = await fetch(`${BASE_URL}/comments/${commentId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ content }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "댓글 수정에 실패하였습니다.");
  }

  return await res.json();
};

// DELETE: 댓글 삭제
const deleteComment = async (commentId) => {
  const accessToken = localStorage.getItem("accessToken");

  const res = await fetch(`${BASE_URL}/comments/${commentId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "댓글 삭제에 실패하였습니다.");
  }

  return await res.json();
};

export const commentServices = {
  postComment,
  getComments,
  patchComment,
  deleteComment,
};
