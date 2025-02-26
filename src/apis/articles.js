import { instance, STATUS_CREATED, STATUS_OK } from "./common-http";

const PATH = "/articles";

export async function getArticles(page = 1, pageSize = 10, orderBy = "recent", keyword) {
  const params = { page, pageSize, orderBy, keyword };
  try {
    const response = await instance.get(PATH, { params });
    if (response.status === STATUS_OK) return response.data;
  } catch (e) {
    throw new Error("게시글 목록 조회에 오류가 발생했습니다.");
  }
}
export async function getArticleDetail(articleId) {
  try {
    const response = await instance.get(`${PATH}/${articleId}`);
    if (response.status === STATUS_OK) return response.data;
  } catch (e) {
    throw new Error("게시글 상세 조회에 오류가 발생했습니다.");
  }
}

export async function createArticle(value) {
  try {
    const response = await instance.post(PATH, value);
    if (response.status === STATUS_CREATED) return response.data;
  } catch (e) {
    throw new Error("게시글 등록에 오류가 발생했습니다.");
  }
}
export async function updateArticle(articleId, value) {
  try {
    const response = await instance.patch(`${PATH}/${articleId}`, value);
    if (response.status === STATUS_OK) return response.data;
  } catch (e) {
    throw new Error("게시글 정보 수정에 오류가 발생했습니다.");
  }
}
export async function deleteArticle(articleId) {
  try {
    const response = await instance.delete(`${PATH}/${articleId}`);
    if (response.status === STATUS_OK) return response.data;
  } catch (e) {
    throw new Error("게시글 정보 수정에 오류가 발생했습니다.");
  }
}

export async function addToLikes(articleId) {
  try {
    const response = await instance.post(`${PATH}/${articleId}/like`);
    if (response.status === STATUS_CREATED) return response.data;
  } catch (e) {
    throw new Error("게시글 좋아요 중 오류가 발생했습니다.");
  }
}
export async function removeFromLikes(articleId) {
  try {
    const response = await instance.delete(`${PATH}/${articleId}/like`);
    if (response.status === STATUS_OK) return response.data;
  } catch (e) {
    throw new Error("게시글 좋아요 취소 중 오류가 발생했습니다.");
  }
}
